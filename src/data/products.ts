/* ============================================
   CATÁLOGO DE PRODUCTOS
   ============================================
   Para agregar, editar o eliminar productos,
   simplemente modifica este arreglo.
   ============================================ */

export interface Product {
  id: string;
  name: string;
  price: number;         // Precio en COP
  duration?: string;     // Duración del plan
  category: string;      // Categoría del producto
  icon: string;          // Emoji o icono representativo
  imageUrl?: string;     // Ruta de la imagen del producto
  color: string;         // Color de acento para la tarjeta (tailwind class)
  tag?: string;          // Etiqueta opcional (ej: "Popular", "Oferta")
}

export const products: Product[] = window.AppConfig?.products || [];

/* ============================================
   CONFIGURACIÓN DEL NEGOCIO
   ============================================ */

export const BUSINESS_NAME = window.AppConfig?.businessName || "Tienda Online";
export const WHATSAPP_NUMBER = window.AppConfig?.whatsappNumber || "";
export const COMBO_DISCOUNT_PER_ITEM = window.AppConfig?.comboDiscountPerItem || 0; // Descuento por cada producto adicional

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
