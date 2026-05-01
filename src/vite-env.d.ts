/// <reference types="vite/client" />

interface AppConfig {
    businessName: string;
    whatsappNumber: string;
    comboDiscountPerItem: number;
    logoUrl: string;
    metaTitle: string;
    metaDescription: string;
    products: any[];
}

interface Window {
    AppConfig: AppConfig;
}
