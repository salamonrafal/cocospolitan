import DefaultConfig    from './default';
import developConfig    from './develop';

class Config {
    constructor(env) {
        this.env = env;
        this.config = {};

        this.loadDefault();

        if (env === 'develop') {
            this.loadDevelop();
        }
    }

    loadDefault() {
        this.config = DefaultConfig;
    }

    loadDevelop() {
        this.config = developConfig();
    }

    getConfig (...args) {
        let value = this.config;

        for (let i = 0; i < args.length; i++) {
            if (value[args[i]] !== undefined) {
                value = value[args[i]];
            } else {
                throw 'Cannot find config!';
            }
        }

        return value;
    }
}

export default Config;