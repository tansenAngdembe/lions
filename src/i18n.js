
import i18n from "i18next"; // core library that handles translation
import { initReactI18next } from "react-i18next"; // the react binding that connects i18next to react;

// importing languages files
import en from "./locales/en.json";
import ne from "./locales/ne.json";

// initialize react-i18next and defining language resources
const savedLanguage = localStorage.getItem("language") || "en";
i18n.use(initReactI18next).init({
    resources:{// resource object store the translations. en and ne is translation code 
        en: {translation : en}, // translation is required to access the json transation
        ne: {translation : ne},       
    },
    lng : savedLanguage,//default lang
    fallbacklang:"en", // if selected language is not available use en
    interpolation  :{
        escapeValue: false
    }

})
 
export default i18n;