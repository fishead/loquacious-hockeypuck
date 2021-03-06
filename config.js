module.exports = {
    misc: {
        listen_port: 13510
    },
    jwt: {
        accessToken: {
            secret: 'cfvgbhnj',
            expiresInMinutes: 3600,
            algorithm: 'HS256',
            audience: 'fvgbhnj',
            subject: 'fvgbhnj',
            issuer: 'vgtbhnj',
            noTimestamp: false,
            header: {}
        },
        refreshToken: {
            secret: 'cfvgbhftvgybhnj',
            expiresInMinutes: 36000,
            algorithm: 'HS256',
            audience: 'fvgbhnj',
            subject: 'fvgbhnj',
            issuer: 'vgtbhnj',
            noTimestamp: false,
            header: {}
        }
    },
    upload: {
        meta: 'E:/files/meta',
        ref: 'E:/files/ref',
        chunk: 'E:/files/chunk',
        single: {
            fileFieldName: 'single'
        }
    }
};
