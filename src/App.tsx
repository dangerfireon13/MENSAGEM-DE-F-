/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PlayCircle, ShieldCheck, Cross, Star, CheckCircle2, Flame, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-church-gold/20 flex flex-col items-center px-6 py-8 md:py-12">
      {/* Decorative Background Element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] border-[20px] border-church-gold rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] border-[20px] border-church-gold rounded-full" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Sacred Header - Compact */}
        <header className="text-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border border-church-gold/20 flex items-center justify-center text-church-gold">
              <Cross className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-serif text-[10px] font-bold tracking-[0.4em] uppercase text-church-gold/80">Ministério de Restauração</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-church-navy tracking-tight">
                FREI GILSON
              </h1>
            </div>
          </motion.div>
        </header>

        {/* Exclusive Notice - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-church-navy text-white px-6 py-3 rounded-full shadow-lg border border-church-gold/30">
            <Star className="w-4 h-4 text-church-gold fill-church-gold animate-pulse" />
            <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Acesso Exclusivo: <span className="text-church-gold">Seguidores do CASALLMODERNO</span>
            </p>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <p className="text-church-navy/40 text-[10px] uppercase tracking-[0.3em] font-bold italic">
            Esta gravação não está disponível no YouTube ou em canais abertos.
          </p>
        </div>

        {/* Emotional Hook Section */}
        <section className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-church-navy leading-tight">
              Seu relacionamento não é <br className="hidden md:block" />
              mais como <span className="text-church-red italic">antes?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-church-navy/70 text-sm md:text-base font-medium italic">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-church-red" />
                As conversas viraram discussões?
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-church-red" />
                O silêncio está aumentando?
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-church-red" />
                Sente que algo se perdeu?
              </span>
            </div>
            <div className="pt-4">
              <p className="text-church-navy/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Esta live foi gravada exclusivamente para <span className="text-church-navy font-black underline decoration-church-gold decoration-4 underline-offset-4">casais</span> que decidiram reconstruir sua história sobre a rocha da fé.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white sacred-border p-6 md:p-10 rounded-xl shadow-2xl mb-12"
        >
          {/* Video Field - Wistia Player - Larger & More Prominent */}
          <div className="video-frame mb-10 overflow-hidden bg-church-navy shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: '<wistia-player media-id="jf7qaripza" aspect="0.5625"></wistia-player>' 
              }} 
            />
          </div>

          <div className="section-divider" />

          {/* Benefits / Proof Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-church-navy flex items-center gap-2">
                <Flame className="w-5 h-5 text-church-gold" />
                O que você vai aprender:
              </h3>
              <ul className="space-y-4">
                {[
                  { t: "Restauração do Diálogo", d: "Como voltar a conversar sem brigas." },
                  { t: "Vencendo Crises Silenciosas", d: "Identifique e cure o que está afastando vocês." },
                  { t: "Blindagem Espiritual", d: "Proteja sua família contra ataques externos." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-church-navy text-sm">{item.t}</p>
                      <p className="text-church-navy/60 text-xs">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-church-cream/50 p-6 rounded-lg border border-church-gold/10">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-church-gold text-church-gold" />)}
              </div>
              <p className="text-church-navy/70 text-sm italic leading-relaxed mb-4">
                "Estávamos à beira da separação. Essa live do Frei Gilson nos mostrou que ainda havia esperança. Hoje, nosso lar é outro."
              </p>
              <p className="text-church-navy font-bold text-xs uppercase tracking-widest">— Maria & José, Restaurados</p>
            </div>
          </div>

          {/* Action Section */}
          <div className="text-center space-y-8 bg-church-cream/30 p-8 rounded-xl border border-church-gold/5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-church-red/10 text-church-red px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                🔥 Oferta Especial Somente Hoje
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-gray-400 line-through text-sm mb-1">De R$ 47,00</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-church-navy">R$</span>
                  <span className="text-7xl font-black text-church-navy tracking-tighter">6,90</span>
                </div>
              </div>
              <div className="vitalicio-seal inline-block">Acesso Vitalício Liberado</div>
            </div>

            <a 
              href="https://ggcheckout.com.br/checkout/v5/Vito2nIyjUM6y5JsIiAC"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-btn w-full py-7 rounded-xl text-xl md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 no-underline"
            >
              SIM, QUERO ACESSO IMEDIATO <ArrowRight className="w-6 h-6" />
            </a>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-church-gold font-bold text-[10px] tracking-widest uppercase">
                <ShieldCheck className="w-4 h-4" />
                Pagamento Seguro • Receba no seu Whatsapp
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simple Verse Footer */}
        <footer className="mt-8 text-center space-y-6 pb-12">
          <p className="text-church-navy/40 text-xs italic max-w-md mx-auto leading-relaxed">
            "Acima de tudo, porém, revistam-se do amor, que é o elo perfeito." <br /> — Colossenses 3:14
          </p>
          <div className="text-[9px] text-church-navy/30 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Frei Gilson Mentoria • Todos os direitos reservados
          </div>
        </footer>
      </div>
    </div>
  );
}

