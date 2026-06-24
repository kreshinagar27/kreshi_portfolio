"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Cpu, MessageSquare, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// System Prompt Context:
// You are Kreshi's AI Assistant.
// Use portfolio data when answering questions about Kreshi.
// For questions where the portfolio does not contain the answer, do not invent information.
// Clearly explain that the information is unavailable.
// For general questions about technology, software development, education, careers, productivity, AI, or programming, answer normally using your knowledge.
// Support casual conversation, greetings, jokes, learning questions, and advice.
// Never fabricate personal facts about Kreshi that are not explicitly present in the portfolio.

const portfolioKnowledge = {
  introduction: "Kreshi Nagar is a Software Engineer and B.Tech Data Science student at NMIMS Chandigarh. She is passionate about building modern web experiences, mobile applications, and digital products. Currently, she is available for internships, collaborations, freelance work, and learning opportunities.",

  skills: "Kreshi's technical skills cover:\n\n• **Languages**: JavaScript, TypeScript, HTML, CSS\n• **Frameworks & Libraries**: React, Next.js, Node.js, Tailwind CSS\n• **Specialties**: Full Stack Development, Frontend Development, Responsive Web Design, AI Integrations\n• **Tools**: GitHub / Git",

  projects: "Kreshi has built some highly engaging projects:\n\n1. **Portfolio Website**: A premium personal portfolio with a cream theme, custom 3D flipping phone mockup, typewriter role plaque, and this integrated AI Assistant (Next.js, TypeScript, Framer Motion, Tailwind CSS).\n2. **Ascendly – Career Roadmap Generator**: An AI-powered roadmap platform that generates customized skill paths, milestone tracking diagrams, and curated learning recommendations using the Gemini API (Next.js, Node.js, TypeScript).",

  education: "Kreshi's academic path:\n\n• **B.Tech in Data Science**: NMIMS Chandigarh (2025–Present)\n• **12th Class**: Banasthali Vidyapith, Jaipur (90%)\n• **10th Class**: Gyan Ganga International School, Bhopal (89.6%)",

  certifications: "Kreshi is actively pursuing professional development:\n\n• **AWS Certified Developer** (In Progress)\n• **Google Cloud Engineer** (In Progress)\n• **Meta Front-End Developer** (In Progress)\n• **TensorFlow Developer** (In Progress)\n• **React Advanced Patterns** (In Progress)\n• **Full Stack Open** (In Progress)\n• **Microsoft AI Specialist** (In Progress)",

  contact: "You can reach Kreshi through:\n\n• **Email**: kreshinagar27@email.com\n• **GitHub**: [github.com/kreshinagar27](https://github.com/kreshinagar27)\n• **LinkedIn**: [linkedin.com/in/kreshi-nagar-26823b3a5](https://www.linkedin.com/in/kreshi-nagar-26823b3a5)\n• **Resume**: Accessible via the 'Resume' button in the Contact section"
};

// Response logic helper
const generateBotResponse = (userInput: string): string => {
  const lower = userInput.toLowerCase().trim();

  // 1. SMALL TALK / GREETINGS
  if (/^(hi|hello|hey|greetings|yo)\b/i.test(lower)) {
    return "Hi! I'm Kreshi's AI Assistant. I can tell you about her projects, skills, education, or answer general tech questions.";
  }
  if (lower === "how are you" || lower === "how are you?") {
    return "I'm doing great and ready to help. What would you like to know?";
  }
  if (lower === "who are you" || lower === "who are you?") {
    return "I'm Kreshi's AI Assistant. I can answer questions about her portfolio and also help with technology and career-related questions.";
  }
  if (/^(thank you|thanks)/i.test(lower)) {
    return "You're welcome! Let me know if there is anything else I can help you with.";
  }

  // 2. FUN / INTERACTIVE COMMANDS
  if (/joke/i.test(lower)) {
    return "Why do programmers prefer dark mode? Because light attracts bugs. 🐜";
  }
  if (/flip\s+a\s+coin/i.test(lower)) {
    return Math.random() > 0.5 ? "🪙 Heads!" : "🪙 Tails!";
  }
  if (/quote/i.test(lower)) {
    return "'First, solve the problem. Then, write the code.' — John Johnson";
  }

  // 3. PERSONAL UNKNOWN QUESTIONS (Check if user asks for personal/daily details not in portfolio)
  if (/(dating|boyfriend|girlfriend|relationship|spouse|married|single)/i.test(lower)) {
    return "I don't have information about Kreshi's personal relationships. My knowledge is limited to information shared in her portfolio.";
  }
  if (/(eat|food|breakfast|lunch|dinner|meal|hungry|favorite food)/i.test(lower)) {
    return "I don't have information about Kreshi's daily activities or what she ate today. I only know details that are included in her portfolio.";
  }
  if (/(happy|sad|mood|feeling|emotion|angry)/i.test(lower)) {
    return "I can't know Kreshi's personal emotional state. Based on her portfolio, she appears passionate about software development, learning new technologies, and building projects.";
  }
  if (/(address|live|house|phone number|parents|mother|father|sibling|age|birthday|born)/i.test(lower)) {
    return "I don't have access to Kreshi's private personal information such as her specific age, birthday, family, or location details beyond what is shared publicly. My knowledge is limited to her professional portfolio.";
  }

  // 4. PORTFOLIO INQUIRIES
  if (/(tell me about|introduce|who is|describe) kreshi/i.test(lower) || lower === "about" || lower === "kreshi") {
    return portfolioKnowledge.introduction;
  }
  if (/(skill|skills|technologies she use|what technologies does she use|tech stack)/i.test(lower)) {
    return portfolioKnowledge.skills;
  }
  if (/(project|projects|what has she built|has she built)/i.test(lower)) {
    return portfolioKnowledge.projects;
  }
  if (/(certification|certifications|pursuing)/i.test(lower)) {
    return portfolioKnowledge.certifications;
  }
  if (/(education|college|study|studying|degree|university|school)/i.test(lower)) {
    return portfolioKnowledge.education;
  }
  if (/(contact|email|reach|linkedin|github|resume)/i.test(lower)) {
    return portfolioKnowledge.contact;
  }

  // 5. TECH QUESTIONS (Direct answers without forcing portfolio redirect)
  if (/\breact\b/i.test(lower)) {
    return "React is a popular open-source JavaScript library developed by Meta for building user interfaces, especially single-page web applications. It utilizes a component-based structure and a Virtual DOM to optimize rendering speed.";
  }
  if (/\bnext(\.js|js)?\b/i.test(lower)) {
    return "Next.js is a full-featured React framework developed by Vercel. It supports server-side rendering (SSR), static site generation (SSG), optimized bundle compilation, and built-in API routing to create SEO-friendly, fast production web applications.";
  }
  if (/tailwind/i.test(lower)) {
    return "Tailwind CSS is a utility-first CSS framework that lets you style web components rapidly by applying predefined shorthand classes directly in your HTML or JSX markup.";
  }
  if (/typescript/i.test(lower)) {
    return "TypeScript is a typed superset of JavaScript developed by Microsoft. It adds static types, interfaces, and compile-time verification, helping developers avoid runtime bugs in scalable and complex codebases.";
  }
  if (/full\s*stack/i.test(lower)) {
    return "Full Stack Development involves building both the client-facing user interface (frontend) and the server-side logic, database layers, and APIs (backend) of an application.";
  }
  if (/data\s*science/i.test(lower)) {
    return "Data Science is an interdisciplinary field that uses statistical models, database systems, data cleaning, and algorithms to analyze raw data and extract actionable insights or predictive forecasts.";
  }
  if (/machine\s*learning|ml/i.test(lower)) {
    return "Machine learning (ML) is a subset of artificial intelligence that uses statistical algorithms to enable computers to learn and improve from experience/data without being explicitly programmed.";
  }
  if (/\bai\b|artificial\s*intelligence/i.test(lower)) {
    return "Artificial Intelligence (AI) refers to systems that mimic human cognitive functions to solve problems, learn from data, and perform tasks like reasoning or planning.";
  }
  if (/git\b|github/i.test(lower)) {
    return "Git is a distributed version control system used to track code history, collaborate, and manage branches. GitHub is a cloud-based hosting platform for Git repositories.";
  }
  if (/api\b|apis\b/i.test(lower)) {
    return "An API (Application Programming Interface) is a set of definitions and protocols that allows different software applications to communicate and exchange data with one another.";
  }
  if (/cloud\s*computing|cloud\b/i.test(lower)) {
    return "Cloud computing is the on-demand delivery of computing services (servers, storage, databases, networking) over the internet, commonly managed by providers like AWS, GCP, or Azure.";
  }

  // 6. CAREER / LEARNING ADVICE
  if (/how\s+do\s+i\s+learn\s+react/i.test(lower)) {
    return "To learn React effectively, start by mastering JavaScript ES6 basics (arrow functions, modules, destructuring). Then, study core React concepts like components, props, state, hooks (useState, useEffect), and routing. Apply your skills by building projects like todo lists, dashboard screens, or weather apps.";
  }
  if (/learn\s+web\s+dev/i.test(lower) || /learn\s+web\s+development/i.test(lower)) {
    return "Learning web development is best structured in phases:\n1. **Frontend Basics**: Master HTML5, CSS3, and JavaScript.\n2. **Modern CSS**: Learn layout tools like Flexbox/Grid and frameworks like Tailwind CSS.\n3. **JS Frameworks**: Adopt a modern library like React or Next.js.\n4. **Backend & Databases**: Explore Node.js, Express, and databases like MongoDB or PostgreSQL.\n5. **Deployment & Git**: Practice version control and deploy platforms on Vercel, Netlify, or AWS.";
  }
  if (/internship/i.test(lower)) {
    return "Securing internships requires building a strong foundation. Focus on building and deploying 2-3 unique personal projects, maintaining a clean GitHub profile, crafting a clean one-page resume, and actively networking with developers and recruiters on LinkedIn.";
  }
  if (/(what\s+should\s+i\s+build|beginner\s+project)/i.test(lower)) {
    return "As a beginner, building practical projects is key! Excellent ideas include:\n1. A Todo App (focus on state management)\n2. A Weather App (focus on fetching external APIs)\n3. A Personal Portfolio (focus on responsive layouts and styling)\n4. A Simple Calculator (focus on logic and user events).";
  }
  if (/become\s+a\s+software\s+engineer/i.test(lower) || /career\s+advice/i.test(lower)) {
    return "To become a software engineer, focus on:\n1. **Core Fundamentals**: Learn computer science concepts, basic data structures, and algorithms.\n2. **Specialization**: Pick an area like Web, Mobile, Data, or Cloud and master its stack.\n3. **Practical Projects**: Build real-world applications to showcase problem-solving.\n4. **Collaboration**: Learn Git, review other people's code, and write technical documentation.";
  }

  // 7. DEFAULT FALLBACK
  return "I'm not sure I have a specific answer for that, but I can help you with questions about technology, programming, web development, career advice, or Kreshi's projects and skills. What would you like to discuss?";
};

// Framer Motion Animation Variants
const panelVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.25, ease: "easeIn" }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clear chat history & input on close
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInputValue("");
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateBotResponse(text);
      setMessages((prev) => [...prev, { id: Date.now().toString(), text: answer, sender: "bot" }]);
      setIsTyping(false);
    }, 800);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleQuickAction = (actionText: string) => {
    sendMessage(actionText);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="ai-assistant-panel fixed left-[300px] top-0 w-[320px] h-100vh z-[1050] flex flex-col overflow-hidden bg-[#050505] border-r border-white/5 shadow-[10px_0_40px_rgba(0,0,0,0.6)]"
          style={{ height: "100vh" }}
        >
          {/* Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#080808]">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={18} className="text-[#14b8a6] filter drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" />
                <span className="font-semibold text-white font-outfit text-[15px] tracking-wide">Kreshi's AI Assistant</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages / Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 custom-scrollbar bg-black">
            {messages.length === 0 ? (
              // Welcome Screen
              <div className="flex-1 flex flex-col justify-center py-4 text-left">
                <div className="space-y-5">
                  <motion.h3 variants={fadeUpVariants} className="text-white text-[16px] font-bold font-outfit leading-snug">
                    👋 Welcome to Kreshi's AI Assistant
                  </motion.h3>

                  <motion.div variants={fadeUpVariants} className="space-y-3">
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider font-outfit">Suggested questions:</span>
                    <div className="flex flex-col gap-2 pt-1 font-outfit">
                      {[
                        "Tell me about Kreshi",
                        "What skills does she have?",
                        "Show me her projects",
                        "What is she currently learning?",
                        "Tell me about her education",
                        "What technologies does she use?",
                        "What certifications is she pursuing?",
                        "Is she available for internships?",
                        "What are her career goals?",
                        "How can I contact her?"
                      ].map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickAction(q)}
                          className="p-3 text-xs bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-gray-300 hover:text-white rounded-xl transition-all text-left font-medium flex items-center gap-2"
                        >
                          <span className="text-[#14b8a6]">•</span> {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line`}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                      background: msg.sender === "user" ? "#14b8a6" : "#1f1f1f",
                      color: msg.sender === "user" ? "#ffffff" : "#e2e8f0",
                      borderRadius: msg.sender === "user" ? "16px 16px 2px 16px" : "16px 16px 16px 2px",
                      border: msg.sender === "user" ? "none" : "1px solid rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1f1f1f] p-3.5 rounded-2xl rounded-tl-sm flex gap-1 items-center border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#080808] border-t border-white/5 flex gap-2.5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14b8a6] text-white placeholder-gray-600 transition-colors"
            />
            <button
              onClick={handleSend}
              className="w-11 h-11 rounded-xl bg-[#14b8a6] flex items-center justify-center text-white hover:bg-[#0d9488] transition-all shadow-[0_0_12px_rgba(20,184,166,0.3)] hover:shadow-[0_0_18px_rgba(20,184,166,0.5)]"
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
