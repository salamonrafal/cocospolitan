import DefultConfig from './default';



let developConfig = function() {
    let defaultConfig = DefultConfig;
    
    defaultConfig.services.headlines.get = "http://localhost:3004/headlines";
    defaultConfig.services.magazines.get = "http://localhost:3004/magazines";
    defaultConfig.test = true;

    return defaultConfig;
}


export default developConfig;