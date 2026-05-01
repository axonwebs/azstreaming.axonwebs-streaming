import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BUSINESS_NAME } from "@/data/products";
import { motion } from "framer-motion";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-b border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={window.AppConfig.logoUrl} alt={BUSINESS_NAME} className="w-20 h-20 rounded-full object-cover border-2 border-primary/40 shadow-lg shadow-primary/10" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-gradient-gold block leading-tight">AZ</span>
            <span className="font-display text-sm font-semibold text-primary/80 tracking-widest uppercase">Streaming</span>
          </div>
        </a>

        <div className="flex items-center gap-8">
          <a href="#catalogo" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors hidden sm:block uppercase tracking-wider">
            Catálogo
          </a>
          <a href="#beneficios" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors hidden md:block uppercase tracking-wider">
            Beneficios
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
