import DefultConfig from './default';



let developConfig = function() {
    let defaultConfig = DefultConfig;
    
    defaultConfig.services.headlines.get = "http://localhost:3000/headlines";

    return defaultConfig;
}


export default developConfig;