import OpenAI from "openai";
import { assistants, isAssistantId } from "@/lib/ai/assistants";
import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequest = {
  assistant?: unknown;
  messages?: unknown;
};

const MAX_MESSAGES = 14;
const MAX_MESSAGE_LENGTH = 1800;

function parseMessages(value: unknown): ChatMessage[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const parsed: ChatMessage[] = [];

  for (const item of value.slice(-MAX_MESSAGES)) {
    if (
      typeof item !== "object" ||
      item === null ||
      !("role" in item) ||
      !("content" in item)
    ) {
      return null;
    }

    const role = item.role;
    const content = item.content;

    if (
      (role !== "user" && role !== "assistant") ||
      typeof content !== "string"
    ) {
      return null;
    }

    const cleanedContent = content.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (!cleanedContent) {
      continue;
    }

    parsed.push({
      role,
      content: cleanedContent,
    });
  }

  return parsed;
}

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "Configurazione AI non disponibile.",
        },
        {
          status: 503,
        }
      );
    }

    const body = (await request.json()) as ChatRequest;

    if (!isAssistantId(body.assistant)) {
      return NextResponse.json(
        {
          error: "Assistente non valido.",
        },
        {
          status: 400,
        }
      );
    }

    const messages = parseMessages(body.messages);

    if (!messages?.length) {
      return NextResponse.json(
        {
          error: "Messaggio non valido.",
        },
        {
          status: 400,
        }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const assistant = assistants[body.assistant];

    const response = await openai.responses.create({
      model: process.env.OPENAI_CHAT_MODEL ?? "gpt-5-mini",
      instructions: assistant.instructions,
      input: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
      max_output_tokens: 350,
      store: false,
    });

    const reply = response.output_text.trim();

    if (!reply) {
      throw new Error("Risposta AI vuota.");
    }

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("AI chat error:", error);

    return NextResponse.json(
      {
        error:
          "In questo momento non riesco a rispondere. Puoi contattarci direttamente tramite WhatsApp o email.",
      },
      {
        status: 500,
      }
    );
  }
}
