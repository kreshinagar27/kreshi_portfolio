"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MinusCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: portfolioData.chatbotKnowledge.greeting, sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simple keyword-based logic matching
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let foundAnswer = portfolioData.chatbotKnowledge.fallback;
      
      for (const qa of portfolioData.chatbotKnowledge.qa) {
        if (qa.keywords.some((kw) => lowerInput.includes(kw))) {
          foundAnswer = qa.answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), text: foundAnswer, sender: "bot" }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-card w-[350px] max-w-[calc(100vw-48px)] h-[450px] mb-4 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-lavender font-outfit">Kreshi's AI</span>
              </div>
              <div className="flex gap-2 text-gray-400">
                <button onClick={() => setIsMinimized(true)} className="hover:text-white transition-colors">
                  <MinusCircle size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user" 
                      ? "bg-lavender text-midnight rounded-tr-sm" 
                      : "bg-white/10 text-gray-200 rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black/20 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-lavender/50 text-white"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center text-midnight hover:bg-blush transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`w-14 h-14 rounded-full bg-lavender text-midnight flex items-center justify-center shadow-[0_0_20px_rgba(177,156,217,0.3)] transition-all ${
          isOpen && !isMinimized ? "opacity-0 scale-0 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}
