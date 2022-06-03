import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: {
      job: "Junior Fullstack Web Developer",
      title: "Welcome",
      info: "Here you will find information about me and my job.",
      message: "auf meiner neuen Webseite.",
      email: "If there are any questions just ask me",
    },
    nav: {
      impressum: "Impressum",
      contact: "Contact"
    }
  },
  de: {
    welcome: {
      job: "Junior Fullstack Webentwickler",
      title: "Willkommen",
      info: "Du findest hier alle Informationen über mich und meinen Beruf.",
      message: "auf meiner neuen Webseite.",
      email: "Bei Fragen einfach melden per Mail an",
    },
    nav: {
      impressum: "Impressum",
      contact: "Kontakt"
    }
  },
};

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "de",
  fallbackLocale: "en",
  messages,
});

export default i18n;
