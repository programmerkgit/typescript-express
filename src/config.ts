export const config = {
    cookieOptions: {
        maxAge: 5 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        signed: true
    },
    corsOptions: {
        origin: 'http://localhost:4200',
        credentials: true
    },
    cookieSecret: "jreoiwjlaJKJLWLIOfae910"
};
