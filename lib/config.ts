export const PORT: number = parseInt(process.env.PORT || '3001');
export const DOMAIN: string = process.env.DOMAIN || `localhost:${PORT}`;
export const BASE_API_URL: string = process.env.NEXT_PUBLIC_BASE_API_URL || `localhost:3000`;
