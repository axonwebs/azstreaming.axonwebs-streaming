import { MessageCircle } from "lucide-react";
import { BUSINESS_NAME, WHATSAPP_NUMBER } from "@/data/products";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-display text-xl font-bold text-gradient-gold">{BUSINESS_NAME}</h4>
          <p className="text-sm text-muted-foreground font-body mt-1">
            Servicios digitales premium al mejor precio
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-body font-medium transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Contáctanos por WhatsApp
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
