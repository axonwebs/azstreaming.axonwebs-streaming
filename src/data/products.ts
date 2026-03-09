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
  color: string;         // Color de acento para la tarjeta (tailwind class)
  tag?: string;          // Etiqueta opcional (ej: "Popular", "Oferta")
}

export const products: Product[] = [
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    price: 15000,
    duration: "1 mes",
    category: "Streaming",
    icon: "🎬",
    color: "from-red-600 to-red-800",
    tag: "Popular",
  },
  {
    id: "disney-premium",
    name: "Disney+ Premium",
    price: 12000,
    duration: "1 mes",
    category: "Streaming",
    icon: "✨",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "amazon-prime",
    name: "Amazon Prime Video",
    price: 8000,
    duration: "1 mes",
    category: "Streaming",
    icon: "📦",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    price: 9000,
    duration: "1 mes",
    category: "Streaming",
    icon: "🎭",
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "spotify-1mes",
    name: "Spotify",
    price: 10000,
    duration: "1 mes",
    category: "Música",
    icon: "🎵",
    color: "from-green-600 to-green-800",
  },
  {
    id: "spotify-3meses",
    name: "Spotify",
    price: 25500,
    duration: "3 meses",
    category: "Música",
    icon: "🎵",
    color: "from-green-600 to-green-800",
    tag: "Ahorra",
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    price: 7000,
    duration: "1 mes",
    category: "Streaming",
    icon: "🍥",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "vix-premium",
    name: "ViX Premium",
    price: 8000,
    duration: "1 mes",
    category: "Streaming",
    icon: "📺",
    color: "from-amber-500 to-amber-700",
  },
  {
    id: "paramount",
    name: "Paramount+",
    price: 8000,
    duration: "1 mes",
    category: "Streaming",
    icon: "⭐",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "youtube-1mes",
    name: "YouTube Premium",
    price: 12000,
    duration: "1 mes",
    category: "Streaming",
    icon: "▶️",
    color: "from-red-500 to-red-700",
  },
  {
    id: "youtube-3meses",
    name: "YouTube Premium",
    price: 31000,
    duration: "3 meses",
    category: "Streaming",
    icon: "▶️",
    color: "from-red-500 to-red-700",
    tag: "Ahorra",
  },
  {
    id: "chatgpt",
    name: "ChatGPT a Dominio",
    price: 25000,
    category: "Productividad",
    icon: "🤖",
    color: "from-emerald-500 to-emerald-700",
    tag: "Nuevo",
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    price: 20000,
    duration: "6 meses",
    category: "Productividad",
    icon: "🎨",
    color: "from-violet-500 to-violet-700",
  },
  {
    id: "office-365",
    name: "Office 365",
    price: 45000,
    duration: "Anual",
    category: "Productividad",
    icon: "📊",
    color: "from-orange-600 to-orange-800",
    tag: "Premium",
  },
];

/* ============================================
   CONFIGURACIÓN DEL NEGOCIO
   ============================================ */

export const BUSINESS_NAME = "Digital Premium Store";
export const WHATSAPP_NUMBER = "573175287585";
export const COMBO_DISCOUNT_PER_ITEM = 2000; // Descuento por cada producto adicional

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
