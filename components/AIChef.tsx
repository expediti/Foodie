import React, { useState, useRef, useEffect } from 'react';
import { getChefChat } from '../services/gemini';
import { ChatMessage } from '../types';
import { Send, X, ChefHat, Sparkles, Loader2 } from 'lucide-react';
import { GenerateContentResponse } from '@google/genai';

interface AIChefProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChef: React.FC<AIChefProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour! I am Chef Gusteau. How can I help you navigate our delicious menu today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const chat = getChefChat();
      const resultStream = await chat.sendMessageStream({ message: userText });
      
      // Create a placeholder message for the AI response
      setMessages(prev => [...prev, { role: 'model', text: '', isLoading: true }]);

      let fullResponse = '';
      
      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullResponse += text;
          // Update the last message with the current accumulated text
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg.role === 'model') {
                lastMsg.text = fullResponse;
                lastMsg.isLoading = false;
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error talking to Chef:", error);
      setMessages(prev => [...prev, { role: 'model', text: "My apologies, the kitchen is a bit chaotic right now. Could you ask that again?" }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end sm:items-end sm:p-6 pointer-events-none">
       {/* Backdrop on mobile */}
       <div className="fixed inset-0 bg-black/20 sm:hidden pointer-events-auto" onClick={onClose} />
       
       <div className="pointer-events-auto bg-white w-full h-[80vh] sm:h-[600px] sm:w-[400px] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-warm-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-warm-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <ChefHat size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Chef Gusteau</h3>
                <p className="text-warm-100 text-xs flex items-center gap-1">
                  <Sparkles size={10} /> AI Powered Sommelier
                </p>
              </div>
            </div>
            <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-warm-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`
                    max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-warm-600 text-white rounded-tr-none' 
                      : 'bg-white text-warm-900 rounded-tl-none border border-warm-100'
                    }
                  `}
                >
                  {msg.text}
                  {msg.isLoading && !msg.text && (
                      <Loader2 size={16} className="animate-spin text-warm-400" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-warm-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for a recommendation..."
                className="w-full bg-warm-50 border-warm-200 border rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-warm-500 focus:ring-1 focus:ring-warm-500 text-warm-900 placeholder:text-warm-300"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 bg-warm-600 hover:bg-warm-700 disabled:opacity-50 disabled:hover:bg-warm-600 text-white p-2 rounded-full transition-colors"
              >
                 {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </div>
          </div>
       </div>
    </div>
  );
};