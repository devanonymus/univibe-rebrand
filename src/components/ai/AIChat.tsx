"use client";

import {
  assistants,
  type AssistantId,
} from "@/lib/ai/assistants";
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
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

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

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();

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
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !data.reply) {
        throw new Error(data.error ?? "Errore chat");
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
          "In questo momento non riesco a rispondere. Puoi scriverci direttamente tramite WhatsApp o email."
        ),
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`ai-chat ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="ai-chat-launcher"
        aria-label={open ? "Chiudi assistente AI" : "Apri assistente AI"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="ai-chat-launcher-symbol">AI</span>

        <span className="ai-chat-launcher-copy">
          <strong>Assistente Univibe</strong>
          <small>Parliamo del tuo progetto</small>
        </span>
      </button>

      <section
        className="ai-chat-panel"
        aria-label="Assistente AI Univibe"
        aria-hidden={!open}
      >
        <header className="ai-chat-header">
          <div>
            <span className="ai-chat-status" />
            <div>
              <strong>{assistant.name}</strong>
              <small>{assistant.role}</small>
            </div>
          </div>

          <button
            type="button"
            aria-label="Chiudi chat"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </header>

        <div className="ai-chat-assistants">
          {assistantOrder.map((id) => (
            <button
              key={id}
              type="button"
              className={assistantId === id ? "is-active" : ""}
              onClick={() => changeAssistant(id)}
            >
              {assistants[id].role}
            </button>
          ))}
        </div>

        <div className="ai-chat-messages" aria-live="polite">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`ai-chat-message ai-chat-message-${message.role}`}
            >
              <p>{message.content}</p>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="ai-chat-suggestions">
              {assistant.suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="ai-chat-message ai-chat-message-assistant">
              <div className="ai-chat-typing" aria-label="Sto scrivendo">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          className="ai-chat-form"
          onSubmit={(event) => {
            event.preventDefault();
            void sendMessage();
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            maxLength={1800}
            rows={1}
            placeholder="Descrivi ciò che vuoi migliorare..."
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
            disabled={!input.trim() || loading}
          >
            Invia
          </button>
        </form>

        <p className="ai-chat-privacy">
          Non inserire dati sensibili. Le risposte dell’AI possono contenere
          imprecisioni.
        </p>
      </section>
    </div>
  );
}
