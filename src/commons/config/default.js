let config = {
    services: {
        headlines: {
            // get:  "http://www.cocospolitan.pl/api"
            get:  "http://localhost:3004/headlines"
        },

        magazines: {
            // get:  "http://www.cocospolitan.pl/api"
            get:  "http://localhost:3004/magazines"
        },
    },

    test: false
} 

export default config;