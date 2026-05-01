import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem, removeOneItem, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-primary/10 bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Tag badges */}
        <div className="absolute top-2 left-2 z-10 flex gap-1.5 flex-wrap">
          {product.tag && (
            <span className="px-2 py-0.5 text-[8px] sm:text-[10px] font-body font-bold rounded-full bg-primary text-primary-foreground uppercase tracking-wider">
              {product.tag}
            </span>
          )}
          <span className="px-2 py-0.5 text-[8px] sm:text-[10px] font-body font-bold rounded-full bg-surface border border-primary/20 text-primary uppercase tracking-wider">
            100% Original
          </span>
        </div>

        {/* Icon/Image area */}
        <div className={`relative h-28 sm:h-40 flex items-center justify-center overflow-hidden w-full 
          ${product.imageUrl ? 'bg-black' : `bg-gradient-to-br ${product.color}`}`}>

          <div className="absolute inset-0 bg-black/10" />

          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <>
              {/* Decorative corner lines only for emoji cards */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 m-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 m-2" />
              <span className="relative text-4xl sm:text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{product.icon}</span>
            </>
          )}

          {/* Duration badge at bottom */}
          {product.duration && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 sm:px-4 sm:py-1 bg-black/60 backdrop-blur-sm rounded-full border border-primary/30 w-max max-w-[90%]">
              <span className="text-[10px] sm:text-xs font-body font-bold text-primary uppercase tracking-wider whitespace-nowrap">{product.duration}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 bg-gradient-to-b from-card to-background/50 flex flex-col min-h-[160px] sm:min-h-[180px]">
          <p className="text-[8px] sm:text-[10px] font-body text-primary/60 uppercase tracking-[0.2em] mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-1 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          <div className="mt-auto pt-3 border-t border-primary/10 flex flex-col gap-2.5">
            <div className="text-center w-full">
              <span className="text-lg sm:text-2xl font-display font-bold text-gradient-gold">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
              <button
                onClick={() => quantity > 0 && removeOneItem(product.id)}
                disabled={quantity === 0}
                className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl transition-all duration-300 ${quantity > 0
                  ? 'bg-secondary/50 border border-primary/20 hover:border-primary/50 text-foreground hover:shadow-md'
                  : 'bg-secondary/20 border border-border/30 text-muted-foreground opacity-40 cursor-not-allowed'
                  }`}
              >
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <span className="font-display font-bold text-base sm:text-lg text-foreground w-4 text-center">
                {quantity}
              </span>

              <button
                onClick={() => addItem(product)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
