import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    de: {
        translation: {
            "Full Stack Entwicklerin": "Full Stack Entwicklerin",
            "Kontak aufnehmen!": "Kontakt aufnehmen!",
            "Scroll runter": "Scroll runter",
            "Über mich": "Über mich",
            "Moin! Mein Name ist Paula, ich bin in Spanien geboren, lebe aber seit 2019 in Flensburg, Deutschland. Im Sommer habe ich meine Ausbildung zur Fachinformatikerin für Anwendungsentwicklung": "Moin! Mein Name ist Paula, ich bin in Spanien geboren, lebe aber seit 2019 in Flensburg, Deutschland. Im Sommer habe ich meine Ausbildung zur Fachinformatikerin für Anwendungsentwicklung",
            " bei der lambda9 GmbH abgeschlossen und arbeite gerade bei CODIN IT in Flensburg als Softwareentwicklerin. Mein Ziel ist es, barrierefreie, kundenorientierte und innovative Anwendungen zu entwickeln, wobei": " bei der lambda9 GmbH abgeschlossen und arbeite gerade bei CODIN IT in Flensburg als Softwareentwicklerin. Mein Ziel ist es, barrierefreie, kundenorientierte und innovative Anwendungen zu entwickeln, wobei",
            " ich besonderen Wert auf Sicherheit und Skalierbarkeit lege. Ich bin immer daran interessiert, mein Wissen zu erweitern und an neuen, interessanten Projekten zu arbeiten!": " ich besonderen Wert auf Sicherheit und Skalierbarkeit lege. Ich bin immer daran interessiert, mein Wissen zu erweitern und an neuen, interessanten Projekten zu arbeiten!",
            "Außerdem bin ich ein großer Filmfan, liebe die Luftfahrt, meine Katze und das Musical Hamilton. Wenn du das hier liest, bin ich wahrscheinlich am Videospiele spielen, höre Musik, schaue Filme oder schlafe.": "Außerdem bin ich ein großer Filmfan, liebe die Luftfahrt, meine Katze und das Musical Hamilton. Wenn du das hier liest, bin ich wahrscheinlich am Videospiele spielen, höre Musik, schaue Filme oder schlafe.",
            " Wenn ich nicht zu Hause bin, bin ich wahrscheinlich im örtlichen Geek-Shop und kaufe Karten, Comics oder andere Dinge, für die ich nicht so viel Geld ausgeben sollte.": " Wenn ich nicht zu Hause bin, bin ich wahrscheinlich im örtlichen Geek-Shop und kaufe Karten, Comics oder andere Dinge, für die ich nicht so viel Geld ausgeben sollte.",
            "CV Herunterladen": "CV Herunterladen",
            "Meine Tech-Skills": "Meine Tech-Skills",
            "Frontend Entwicklerin": "Frontend Entwicklerin",
            "Backend Entwicklerin": "Backend Entwicklerin",
            "Qualifikationen": "Qualifikationen",
            "Mein Werdegang": "Mein Werdegang",
            "Bildungsweg": "Bildungsweg",
            "Berufserfahrung": "Berufserfahrung",
            "Fachinformatikerin": "Fachinformatikerin",
            "Softwareentwicklung": "Softwareentwicklung",
            "Computerysteme und Netzwerke": "Computerysteme und Netzwerke",
            "Spanien": "Spanien",
            "Softwareentwicklerin": "Softwareentwicklerin",
            "Ausbildung": "Ausbildung",
            "Meine letzten Projekte": "Meine letzten Projekte",
            "Tritt in Kontakt mit mir": "Tritt in Kontakt mit mir",
            "Kontaktiere mich gern!": "Kontaktiere mich gern!",
            "Schreib mir": "Schreib mir",
            "Projekte": "Projekte",
            "Kontakt": "Kontakt"

        }
    },
    en: {
        translation: {
            "Full Stack Entwicklerin": "Full Stack Developer",
            "Kontakt aufnehmen!": "Contact me!",
            "Scroll runter": "Scroll down",
            "Über mich": "About me",
            "Moin! Mein Name ist Paula, ich bin in Spanien geboren, lebe aber seit 2019 in Flensburg, Deutschland. Im Sommer habe ich meine Ausbildung zur Fachinformatikerin für Anwendungsentwicklung": "Hi there, my name is Paula, I was born in Spain but I have been living in Flensburg, Germany since 2019. In the summer I graduated in Computer Science for Software Development ",
            " bei der lambda9 GmbH abgeschlossen und arbeite gerade bei CODIN IT in Flensburg als Softwareentwicklerin. Mein Ziel ist es, barrierefreie, kundenorientierte und innovative Anwendungen zu entwickeln, wobei": "with an apprenticeship at lambda9 GmbH and I am now working as a software developer at CODIN IT in Flensburg. My goal is to develop accessible, customer-focused and innovative applications, whereby ",
            " ich besonderen Wert auf Sicherheit und Skalierbarkeit lege. Ich bin immer daran interessiert, mein Wissen zu erweitern und an neuen, interessanten Projekten zu arbeiten!": "I put particular importance in security and scalability. I am always interested in expanding my knowledge and working on new, interesting projects!",
            "Außerdem bin ich ein großer Filmfan, liebe die Luftfahrt, meine Katze und das Musical Hamilton. Wenn du das hier liest, bin ich wahrscheinlich am Videospiele spielen, höre Musik, schaue Filme oder schlafe.": "I'm also a big film fan, love aviation, my cat and the musical Hamilton. If you're reading this, I'm probably playing video games, listening to music, watching movies or sleeping. ",
            " Wenn ich nicht zu Hause bin, bin ich wahrscheinlich im örtlichen Geek-Shop und kaufe Karten, Comics oder andere Dinge, für die ich nicht so viel Geld ausgeben sollte.": " When I'm not at home, I'm probably at my local geek shop buying cards, comics or other things I shouldn't be spending so much money on.",
            "CV Herunterladen": "Download CV",
            "Meine Tech-Skills": "My tech stack",
            "Frontend Entwicklerin": "Frontend Developer",
            "Backend Entwicklerin": "Backend Developer",
            "Qualifikationen": "Qualifications",
            "Mein Werdegang": "My journey",
            "Bildungsweg": "Education",
            "Berufserfahrung": "Experience",
            "Fachinformatikerin": "Computer Science",
            "Softwareentwicklung": "Software Development",
            "Computerysteme und Netzwerke": "Computer Systems and Networking",
            "Spanien": "Spain",
            "Softwareentwicklerin": "Software Developer",
            "Ausbildung": "Apprenticeship",
            "Meine letzten Projekte": "My latest projects",
            "Tritt in Kontakt mit mir": "Get in touch!",
            "Kontaktiere mich gern!": "Contact me",
            "Schreib mir": "Write me",
            "Projekte": "Projects",
            "Kontakt": "Contact"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;