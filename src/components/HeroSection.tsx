import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Star } from "lucide-react";
import { BUSINESS_NAME } from "@/data/products";

const HeroSection = () => {
  const scrollToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Gold diagonal lines decoration (inspired by reference) */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary rotate-12 origin-top" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-primary -rotate-12 origin-top" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-primary rotate-6 origin-top" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-primary -rotate-6 origin-top" />
      </div>

      {/* Gold particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: `hsla(43, 72%, ${50 + Math.random() * 30}%, ${0.15 + Math.random() * 0.2})`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>


      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mx-auto">
              <img
                src={window.AppConfig.logoUrl}
                alt={BUSINESS_NAME}
                className="w-full h-full object-cover scale-[1.3]"
              />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary tracking-wider uppercase">Originales · Estables</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-foreground">Tu Entretenimiento</span>
          <br />
          <span className="text-gradient-gold">Premium</span>
        </motion.h1>

        {/* Stars */}
        <motion.div
          className="flex items-center justify-center gap-1 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Las mejores plataformas de streaming y herramientas digitales.
          <br className="hidden sm:block" />
          Cuentas 100% originales con activación inmediata.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={scrollToCatalog}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-body font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
          >
            Ver Catálogo
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
