import { motion } from "framer-motion";
import { ShoppingCart, Plus } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-body font-semibold rounded-full bg-primary text-primary-foreground">
            {product.tag}
          </div>
        )}

        {/* Icon area */}
        <div className={`relative h-32 flex items-center justify-center bg-gradient-to-br ${product.color} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <span className="relative text-5xl">{product.icon}</span>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            {product.name}
          </h3>
          {product.duration && (
            <p className="text-sm font-body text-muted-foreground mb-3">
              {product.duration}
            </p>
          )}
          <div className="flex items-end justify-between mt-auto">
            <span className="text-2xl font-display font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Agregar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
