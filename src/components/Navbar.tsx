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
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-gradient-gold">
          {BUSINESS_NAME}
        </a>

        <div className="flex items-center gap-6">
          <a href="#catalogo" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Catálogo
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
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
