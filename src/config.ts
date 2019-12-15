const origin = process.env.CORS_ORIGIN || 'http://localhost:4200';

export const corsOptions = {
    origin: origin,
    credentials: true
};
