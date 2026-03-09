import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Clock, Award } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Activación Inmediata", desc: "Recibe tu acceso en minutos después de confirmar tu pedido" },
  { icon: Shield, title: "Compra Segura", desc: "Transacciones protegidas y soporte garantizado" },
  { icon: Headphones, title: "Soporte WhatsApp", desc: "Atención personalizada y rápida por WhatsApp" },
  { icon: Clock, title: "Atención Rápida", desc: "Respuesta en menos de 30 minutos en horario laboral" },
  { icon: Award, title: "Catálogo Premium", desc: "Las mejores plataformas de streaming y productividad" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué <span className="text-gradient-gold">elegirnos</span>?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Servicio confiable, rápido y premium para todos tus servicios digitales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
