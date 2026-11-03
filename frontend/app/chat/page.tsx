"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSend() {
    const userMessage = message.trim();

    if (!userMessage || isThinking) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", content: userMessage },
    ]);

    setMessage("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            `I received your question: "${userMessage}". ` +
            "This is a demo response. We'll connect a real AI model later!",
        },
      ]);

      setIsThinking(false);
    }, 1000);
  }

  return (
    <div className="flex h-screen flex-col p-8">
      <h1 className="text-2xl font-bold text-slate-800">AI Assistant</h1>

      <p className="mt-2 text-slate-500">
        Ask questions and explore your knowledge.
      </p>

      <div className="mt-8 flex-1 space-y-4 overflow-y-auto rounded-xl bg-white p-6 shadow-sm">
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="text-5xl">🤖</div>

              <h2 className="mt-4 text-xl font-semibold">
                How can I help you today?
              </h2>

              <p className="mt-2 text-slate-500">
                Start by asking me a question.
              </p>
            </div>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-xl p-4 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="text-sm text-slate-500">Assistant is thinking...</div>
        )}
      </div>

      <div className="mt-5 flex gap-3">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSend();
          }}
          placeholder="Ask anything..."
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={isThinking || !message.trim()}
          className="rounded-xl bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
