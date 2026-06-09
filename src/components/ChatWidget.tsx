"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { chatConfig } from "@/lib/portfolio";

interface Message {
  who: "bot" | "user";
  text: string;
}

function useAutoScroll(dep: number) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [dep]);
  return ref;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    {
      who: "bot",
      text: "Hey — I'm Tirth's resume assistant. Ask me anything about his experience, projects, or availability.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const logRef = useAutoScroll(msgs.length + (typing ? 1 : 0));
  const streamTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(
    () => () => {
      if (streamTimer.current) clearInterval(streamTimer.current);
    },
    [],
  );

  function answerFor(q: string) {
    const a = chatConfig.answers[q];
    if (a) return a;
    const key = Object.keys(chatConfig.answers).find(
      (k) =>
        k !== "_default" &&
        q.toLowerCase().includes(k.toLowerCase().split(" ")[1] || ""),
    );
    return (key && chatConfig.answers[key]) || chatConfig.answers._default;
  }

  function ask(q: string) {
    if (!q.trim() || typing) return;
    setInput("");
    setMsgs((m) => [...m, { who: "user", text: q }]);
    setTyping(true);
    const full = answerFor(q);

    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { who: "bot", text: "" }]);
      let i = 0;
      if (streamTimer.current) clearInterval(streamTimer.current);
      streamTimer.current = setInterval(() => {
        i += Math.max(2, Math.round(full.length / 90));
        setMsgs((m) => {
          const copy = m.slice();
          copy[copy.length - 1] = { who: "bot", text: full.slice(0, i) };
          return copy;
        });
        if (i >= full.length && streamTimer.current) {
          clearInterval(streamTimer.current);
        }
      }, 18);
    }, 650);
  }

  const panel = (
    <div
      className="chat-panel pop-in"
      role="dialog"
      aria-label="Ask my AI"
    >
      <div className="chat-head">
        <span className="hav">
          <Sparkles size={18} />
        </span>
        <div>
          <div className="ht">Ask my AI</div>
          <div className="hs">
            <span className="d" /> online · resume-aware
          </div>
        </div>
        <button
          type="button"
          className="x"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      <div className="chat-log" ref={logRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`msg ${m.who}`}>
            {m.text || "\u00a0"}
          </div>
        ))}
        {typing && (
          <div className="msg bot">
            <span className="typing">
              <i />
              <i />
              <i />
            </span>
          </div>
        )}
      </div>

      {msgs.length <= 1 && (
        <div className="chat-sugg">
          {chatConfig.suggestions.map((s) => (
            <button key={s} type="button" onClick={() => ask(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="chat-cap">
        ⚡ <b>{chatConfig.caption}</b> · demo responses
      </div>

      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Tirth's work…"
          aria-label="Message"
        />
        <button className="send" type="submit" aria-label="Send">
          <Send size={17} />
        </button>
      </form>
    </div>
  );

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chat-fab pop-in"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <span className="av">
            <Sparkles size={14} />
          </span>
          <span className="label">Ask my AI</span>
          <span className="ping" />
        </button>
      )}
      {open && panel}
    </>
  );
}
