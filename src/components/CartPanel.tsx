import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingCart, MessageCircle, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, WHATSAPP_NUMBER, BUSINESS_NAME } from "@/data/products";

const CartPanel = () => {
  const { items, removeItem, clearCart, totalItems, subtotal, discount, total, isCartOpen, setIsCartOpen } = useCart();

  const sendToWhatsApp = () => {
    if (items.length === 0) return;

    let message = `Hola, quiero hacer este pedido:\n\n`;
    items.forEach((item) => {
      const line = `• ${item.product.name}${item.product.duration ? ` (${item.product.duration})` : ""} x${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`;
      message += line + "\n";
    });
    message += `\nSubtotal: ${formatPrice(subtotal)}`;
    if (discount > 0) {
      message += `\nDescuento combo: -${formatPrice(discount)}`;
    }
    message += `\n*Total final: ${formatPrice(total)}*`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating cart button (mobile) */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 font-body font-semibold"
      >
        <ShoppingCart className="w-5 h-5" />
        {totalItems > 0 && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-foreground text-primary text-sm font-bold">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            onClick={() => setIsCartOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Cart drawer/panel */}
      <AnimatePresence>
        {(isCartOpen || typeof window !== "undefined") && (
          <motion.aside
            className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-card border-l border-border flex flex-col
              ${isCartOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
              lg:sticky lg:top-0 lg:h-screen lg:max-w-sm lg:z-10 transition-transform duration-300 lg:transition-none`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">Tu Pedido</h3>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary text-primary-foreground font-body">
                    {totalItems}
                  </span>
                )}
              </div>
              <button onClick={() => setIsCartOpen(false)} className="lg:hidden text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground font-body">
                  <ShoppingCart className="w-12 h-12 mb-3 opacity-30" />
                  <p>Tu carrito está vacío</p>
                  <p className="text-sm mt-1">Agrega productos del catálogo</p>
                </div>
              ) : (
                <>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-2 flex flex-col items-center justify-center text-center">
                    <span className="text-primary font-display font-medium text-sm">
                      ✨ ¡Aprovecha nuestros Combos! ✨
                    </span>
                    <span className="text-muted-foreground font-body text-xs mt-1">
                      Mientras más plataformas agregues, mayor será tu descuento.
                    </span>
                  </div>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border"
                    >
                      {item.product.imageUrl ? (
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-8 h-8 object-contain drop-shadow" />
                      ) : (
                        <span className="text-2xl">{item.product.icon}</span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-medium text-sm text-foreground truncate">
                          {item.product.name}
                        </p>
                        {item.product.duration && (
                          <p className="text-xs text-muted-foreground font-body">{item.product.duration}</p>
                        )}
                        <p className="text-sm font-semibold text-primary font-body">
                          {formatPrice(item.product.price)} {item.quantity > 1 && `x${item.quantity}`}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Summary */}
            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-3">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-green-400">Descuento combo 🎉</span>
                    <span className="text-green-400">-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between font-display text-lg font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>

                <button
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-body font-semibold transition-colors mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pedido por WhatsApp
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-body font-semibold transition-colors mt-2"
                >
                  Elegir más productos
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-muted-foreground hover:text-destructive font-body transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartPanel;
