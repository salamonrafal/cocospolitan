import DefultConfig from './default';



let developConfig = function() {
    let defaultConfig = DefultConfig;
    
    defaultConfig.services.headlines.get = "http://localhost:3004/headlines";
    defaultConfig.test = true;

    return defaultConfig;
}


export default developConfig;