import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Loader2, Trash2, X, MessageCircle, Sparkles } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const context = `
    RISECONFIRM PROJECT SPECIFICATIONS:
    - Target: African e-commerce businesses scaling up and looking to minimize COD (Cash on Delivery) retours.
    - Core Value: "La voix de votre succès e-commerce. Confirmez chaque commande avec une équipe experte."
    
    SERVICES & FEATURES:
    - Confirmation humaine experte : Appels professionnels pour confirmer l'intention d'achat, vérifier les adresses et rassurer le client.
    - Upsell & Cross-sell : Proposition de produits complémentaires (Bump/Upsell) pendant l'appel pour augmenter le panier moyen.
    - Relance des injoignables : Relances des clients injoignables et traitement des objections pour sauver les commandes.
    - Scripts personnalisés : Approche adaptée à la marque et au produit du client.
    - Analytics en direct : Tableaux de bord de suivi.
    - Intégrations : Seamless avec RiseManager, Shopify, WooCommerce.
    
    BUSINESS GOALS:
    - Conversion : Encourager l'utilisateur à créer un compte "Démarrer gratuitement".
  `;

  useEffect(() => {
    const savedHistory = localStorage.getItem('riseconfirm_chat_history');
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Salam ! 👋 Je suis l'assistant RiseConfirm. Je peux vous expliquer comment notre call center spécialisé peut faire exploser votre taux de livraison et réduire vos retours. Que souhaitez-vous savoir ?"
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('riseconfirm_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setInput("");
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const systemPrompt = `Tu es l'assistant concierge intelligent de RiseConfirm.
      
      TON RÔLE :
      - Tu es un expert en confirmation de commandes COD (Cash On Delivery) et service client e-commerce en Afrique.
      - Tu aides les marchands à comprendre comment RiseConfirm réduit les retours et augmente le panier moyen (Upsell/Cross-sell).
      - Tu es proactif, digne de confiance et toujours encourageant.
      - Ton ton est professionnel, persuasif, et amical.

      DONNÉES DE RÉFÉRENCE :
      ${context}

      CONSIGNES :
      1. Si l'utilisateur parle de retours ou de commandes annulées, explique la relance et l'expertise téléphonique de RiseConfirm.
      2. Toujours encourager à démarrer gratuitement.
      3. Réponds en Français par défaut, mais si l'utilisateur parle en Arabe (Darja ou Classique), réponds en Arabe de la même façon.
      4. Ne pas inventer de prix exacts, dire que nos offres s'adaptent au volume et inviter à nous contacter.
      `;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "RiseConfirm AI Concierge",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((msg) => ({ role: msg.role, content: msg.content })),
            { role: "user", content: userMessage.content },
          ],
        }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling AI:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Désolé, je rencontre une petite difficulté technique. Vous pouvez nous contacter directement par WhatsApp ou réessayer plus tard."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Voulez-vous réinitialiser la discussion ?")) {
      setMessages([{
        role: "assistant",
        content: "Salam ! 👋 Je suis l'assistant RiseConfirm. Comment puis-je aider votre e-commerce aujourd'hui ?"
      }]);
      localStorage.removeItem('riseconfirm_chat_history');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="size-16 cursor-pointer rounded-2xl bg-[#0091ff] text-white shadow-[0_20px_40px_-10px_rgba(0,145,255,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <MessageCircle className="size-8 relative z-10" />
          <div className="absolute top-3 right-3 size-2.5 bg-emerald-400 border-2 border-[#0091ff] rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-3rem)] sm:w-[440px] max-w-[440px] h-[640px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-[#0091ff]/10 dark:bg-[#0091ff]/20 flex items-center justify-center border border-[#0091ff]/30">
                <Sparkles className="size-6 text-[#0091ff]" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-wider">Rise Concierge</h3>
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">AI Expert Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={handleClearHistory} className="p-2.5 text-slate-300 dark:text-slate-600 hover:text-red-500 transition-colors" title="Réinitialiser">
                <Trash2 className="size-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-800 rounded-xl transition-all"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 bg-white dark:bg-slate-900 custom-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="size-8 rounded-xl bg-[#0091ff] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0091ff]/20">
                    <Bot className="size-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-[24px] px-5 py-4 text-sm leading-relaxed ${message.role === "user"
                    ? "bg-[#0091ff] text-white font-bold shadow-lg shadow-[#0091ff]/10"
                    : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium border border-slate-100/50 dark:border-slate-700/50"
                    } ${message.role === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="size-8 rounded-xl bg-[#0091ff] text-white flex items-center justify-center flex-shrink-0">
                  <Bot className="size-4" />
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-100/50 dark:border-slate-700/50 rounded-[24px] rounded-tl-none px-6 py-4">
                  <div className="flex gap-1.5">
                    <div className="size-1.5 bg-[#0091ff]/40 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-[#0091ff]/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="size-1.5 bg-[#0091ff]/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-6 sm:px-8 bg-white dark:bg-slate-900 flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {[
              "Réduire mes retours",
              "Comment vous confirmez ?",
              "L'upsell, comment ça marche ?",
              "Vos tarifs"
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => setInput(action)}
                className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest hover:bg-[#0091ff] hover:text-white transition-all border border-slate-100 dark:border-slate-700"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-t border-slate-50 dark:border-slate-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question à Rise..."
                disabled={isLoading}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0091ff]/5 focus:border-[#0091ff]/50 transition-all pr-14"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 size-11 rounded-xl bg-[#0091ff] text-white flex items-center justify-center hover:bg-[#0077d4] shadow-lg shadow-[#0091ff]/20 transition-all disabled:opacity-50 active:scale-95"
              >
                {isLoading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-300 dark:text-slate-600 font-bold uppercase tracking-[0.2em] mt-4">
              Intelligence Artificielle Rise v1.0
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
