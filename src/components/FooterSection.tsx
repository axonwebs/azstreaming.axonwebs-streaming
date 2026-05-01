import { MessageCircle } from "lucide-react";
import { BUSINESS_NAME, WHATSAPP_NUMBER } from "@/data/products";

const FooterSection = () => {
  return (
    <footer className="border-t border-primary/10 py-12 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <img src={window.AppConfig.logoUrl} alt={BUSINESS_NAME} className="w-12 h-12 rounded-full border border-primary/30" />
          <div>
            <h4 className="font-display text-xl font-bold text-gradient-gold">{BUSINESS_NAME}</h4>
            <p className="text-sm text-muted-foreground font-body mt-0.5">
              Servicios digitales premium · Solo WhatsApp
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-body">+57 315 666 9991</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-body font-medium transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-primary/10 text-center">
        <p className="text-xs text-muted-foreground/60 font-body">
          © {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
