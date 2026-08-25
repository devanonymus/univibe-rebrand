"use client";

import {
  assistants,
  type AssistantId,
} from "@/lib/ai/assistants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const assistantOrder: AssistantId[] = [
  "advisor",
  "technology",
  "growth",
];

function createMessage(
  role: Message["role"],
  content: string
): Message {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  };
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [assistantId, setAssistantId] =
    useState<AssistantId>("advisor");

  const [messages, setMessages] = useState<Message[]>([
    createMessage("assistant", assistants.advisor.welcome),
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const assistant = assistants[assistantId];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusTimeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => window.clearTimeout(focusTimeout);
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const changeAssistant = (nextAssistantId: AssistantId) => {
    setAssistantId(nextAssistantId);
    setMessages([
      createMessage(
        "assistant",
        assistants[nextAssistantId].welcome
      ),
    ]);
    setInput("");
  };

  const sendMessage = async (presetText?: string) => {
    const content = (presetText ?? input).trim();

    if (!content || loading) {
      return;
    }

    const userMessage = createMessage("user", content);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assistant: assistantId,
          messages: nextMessages.map(({ role, content: value }) => ({
            role,
            content: value,
          })),
        }),
      });

      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !data.reply) {
        throw new Error(data.error ?? "Errore durante la risposta");
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", data.reply as string),
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        createMessage(
          "assistant",
          "In questo momento non riesco a completare la risposta. Puoi riprovare oppure richiedere direttamente un confronto con il team Univibe."
        ),
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`uvi-chat ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="uvi-launcher"
        aria-label={open ? "Chiudi UVI" : "Apri UVI"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="uvi-launcher-avatar">
          <Image
            src="/ai/uvi-avatar.svg"
            alt=""
            width={54}
            height={54}
            loading="eager"
            priority
          />
          <i />
        </span>

        <span className="uvi-launcher-copy">
          <strong>Parla con UVI</strong>
          <small>Il consulente AI di Univibe</small>
        </span>
      </button>

      <section
        className="uvi-panel"
        aria-label="UVI, assistente digitale Univibe"
        aria-hidden={!open}
      >
        <header className="uvi-header">
          <div className="uvi-identity">
            <div className="uvi-avatar">
              <Image
                src="/ai/uvi-avatar.svg"
                alt="UVI, assistente digitale di Univibe"
                width={54}
                height={54}
              />

              <span className="uvi-online-status" />
            </div>

            <div>
              <div className="uvi-name-row">
                <strong>{assistant.name}</strong>
                <span>AI</span>
              </div>

              <p>{assistant.role}</p>

              <small>
                <i />
                Online adesso
              </small>
            </div>
          </div>

          <button
            type="button"
            className="uvi-close"
            aria-label="Chiudi UVI"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
          </button>
        </header>

        <nav
          className="uvi-modes"
          aria-label="Seleziona l'ambito di consulenza"
        >
          {assistantOrder.map((id) => (
            <button
              key={id}
              type="button"
              className={assistantId === id ? "is-active" : ""}
              onClick={() => changeAssistant(id)}
            >
              {assistants[id].shortName}
            </button>
          ))}
        </nav>

        <div className="uvi-conversation" aria-live="polite">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`uvi-message uvi-message-${message.role}`}
            >
              {message.role === "assistant" && (
                <Image
                  src="/ai/uvi-avatar.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              )}

              <div>
                {message.role === "assistant" && (
                  <span>UVI</span>
                )}

                <p>{message.content}</p>
              </div>
            </article>
          ))}

          {messages.length === 1 && (
            <div className="uvi-suggestions">
              <span>Puoi iniziare da qui</span>

              {assistant.suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => void sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <article className="uvi-message uvi-message-assistant">
              <Image
                src="/ai/uvi-avatar.svg"
                alt=""
                width={30}
                height={30}
              />

              <div>
                <span>UVI sta analizzando</span>

                <div
                  className="uvi-typing"
                  aria-label="UVI sta scrivendo"
                >
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </article>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          className="uvi-composer"
          onSubmit={(event) => {
            event.preventDefault();
            void sendMessage();
          }}
        >
          <div className="uvi-input-shell">
            <textarea
              ref={inputRef}
              value={input}
              rows={1}
              maxLength={1800}
              aria-label="Scrivi un messaggio a UVI"
              placeholder="Descrivi il tuo progetto..."
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void sendMessage();
                }
              }}
            />

            <button
              type="submit"
              aria-label="Invia messaggio"
              disabled={!input.trim() || loading}
            >
              <span>→</span>
            </button>
          </div>

          <p>
            UVI utilizza l’intelligenza artificiale. Non inserire dati
            sensibili.
          </p>
        </form>
      </section>
    </div>
  );
}
