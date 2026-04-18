import React from 'react';

const Contact = () => {
    const contactMethods = [
        { 
            icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>, 
            label: "Email", 
            value: "contact@risemanager.com", 
            sub: "Réponse sous 24h" 
        },
        { 
            icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, 
            label: "Téléphone", 
            value: "0665 58 44 56", 
        },
        { 
            icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, 
            label: "Bureaux", 
            value: "Oran", 
            sub: "Algérie" 
        }
    ];

    const socialLinks = [
        { 
            icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/></svg>, 
            label: "Facebook",
            href: "https://www.facebook.com/risecartgroup",
            hoverClass: "hover:bg-blue-600 hover:border-blue-600 hover:text-white"
        },
        { 
            icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.586-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
            label: "Instagram",
            href: "https://www.instagram.com/risegroup.ecom/",
            hoverClass: "hover:bg-pink-600 hover:border-pink-600 hover:text-white"
        },
        { 
            icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.655zm6.305-3.654c1.54.914 3.411 1.401 5.314 1.402h.005c5.452 0 9.889-4.438 9.892-9.891 0-2.641-1.03-5.122-2.898-6.992-1.868-1.87-4.35-2.9-6.992-2.9-5.454 0-9.89 4.437-9.893 9.891-.001 1.905.501 3.766 1.455 5.385l-1.082 3.95 4.045-1.061-.246-.145zm11.332-13.011c-.302-.151-1.787-.881-2.064-.981s-.478-.151-.68.151-.781.981-.956 1.182-.352.227-.655.076-1.28-.422-2.441-1.456c-.903-.805-1.512-1.8-1.69-2.098-.176-.301-.019-.464.133-.613s.302-.352.453-.528c.151-.176.202-.302.302-.503s.05-.378-.025-.528c-.075-.151-.68-1.636-.932-2.24-.247-.591-.497-.508-.68-.517s-.378-.013-.578-.013-.528.076-.805.378-1.057 1.031-1.057 2.515.201 1.082 2.918 1.282c.151.201 2.112 3.226 5.116 4.526.715.309 1.273.498 1.708.636.72.229 1.376.196 1.895.119.579-.086 1.787-.73 2.039-1.436.252-.705.252-1.31.176-1.436s-.277-.202-.579-.352z"/></svg>, 
            label: "WhatsApp",
            href: "tel:0665584456",
            hoverClass: "hover:bg-green-500 hover:border-green-500 hover:text-white"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="contact">
            <div className="container mx-auto px-4 sm:px-6">
                
                <div className="flex flex-col items-center lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto ">
                    
                    {/* Left: Info & Branding */}
                    <div className="w-full lg:w-5/12 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800 shadow-sm transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Contactez-nous</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-tight">
                                Discutons de <span className="text-primary italic">votre projet.</span>
                            </h2>
                            <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-md">
                                Que vous soyez une petite boutique ou une grande marque, notre équipe est prête à optimiser votre service client.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-[28px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all group">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                        <div className="text-base font-bold text-heading dark:text-white mb-0.5">{item.value}</div>
                                        <div className="text-xs text-slate-400 dark:text-slate-600 font-medium">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4 pt-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Suivez-nous</div>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <a key={i} href={social.href || "#"} title={social.label} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 transition-all ${social.hoverClass || 'hover:border-primary hover:text-primary'}`}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="w-full lg:w-7/12 ">
                        <div className="bg-white dark:bg-slate-900 rounded-[48px] p-8 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            
                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-heading dark:text-slate-400 uppercase tracking-wider ml-1">Nom Complet</label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: Mohamed Amin"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-heading dark:text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-heading dark:text-slate-400 uppercase tracking-wider ml-1">Email Professionnel</label>
                                        <input 
                                            type="email" 
                                            placeholder="mohamed@boutique.com"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-heading dark:text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-heading dark:text-slate-400 uppercase tracking-wider ml-1">Volume Mensuel</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-heading dark:text-white outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                                            <option>Moins de 100 CMD / jour</option>
                                            <option>100 - 500 CMD / jour</option>
                                            <option>Plus de 500 CMD / jour</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-heading dark:text-slate-400 uppercase tracking-wider ml-1">Sujet</label>
                                        <input 
                                            type="text" 
                                            placeholder="Demande de démo, Tarifs..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-heading dark:text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-heading dark:text-slate-400 uppercase tracking-wider ml-1">Message (Optionnel)</label>
                                    <textarea 
                                        rows="4"
                                        placeholder="Dites-nous en plus sur vos besoins..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-heading dark:text-white outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-hover hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group/btn">
                                    Envoyer ma demande
                                    <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </button>
                                
                                <p className="text-center text-[10px] text-slate-400 dark:text-slate-600 font-bold uppercase tracking-[0.15em]">
                                    Estimation de réponse : moins de 2 heures
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
