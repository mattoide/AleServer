module.exports = {
    ruoli: {
        ADMIN: "ADMIN",
        UTENTE: "UTENTE",
        DRIVER: "DRIVER"
    },
    categorie:[
        { categoria:"WINE BAR", WINE_BAR:"WINE BAR" },
        { categoria:"TRATTORIE", TRATTORIE: "TRATTORIE" },
        { categoria:"TAKE AWAY", TAKE_AWAY: "TAKE AWAY" },
        { categoria:"ROSTICCERIA", ROSTICCERIA: "ROSTICCERIA" },
        { categoria:"RISTORANTI", RISTORANTI:"RISTORANTI" },
        { categoria:"PUB", PUB:"PUB" },
        { categoria:"PIZZERIA",  PIZZERIA: "PIZZERIA" },
        { categoria:"PIZZA AL TAGLIO", PIZZA_AL_TAGLIO: "PIZZA AL TAGLIO" },
        { categoria:"PASTICCERIE", PASTICCERIE: "PASTICCERIE" },
        { categoria:"PANINOTECHE", PANINOTECHE: "PANINOTECHE" },
        { categoria:"GELATERIE", GELATERIE: "GELATERIE" },
        { categoria:"CAFE", CAFE: "CAFE" }
    ],
    prodotti:[
        { prodotto:"Dolci", DOLCI: "Dolci" },
        { prodotto:"Panini e Sandwich", PANINI_E_SANDWICH: "Panini e Sandwich" },
        { prodotto:"Pizza", PIZZA: "Pizza" },
        { prodotto:"Primo", PRIMO: "Primo" },
        { prodotto:"Secondo", SECONDO: "Secondo" }
    ],
    servizi:[
        { servizio: "Accesso disabili", ACCESSO_DISABILI: "Accesso disabili" },
        { servizio: "Area bimbi", AREA_BIMBI: "Area bimbi" },
        { servizio: "Buoni pasto", BUONI_PASTO: "Buoni pasto" },
        { servizio: "Fascia prezzo", FASCIA_PREZZO: "Fascia prezzo" },
        { servizio: "Menù fissi", MENU_FISSI: "Menù fissi" },
        { servizio: "Pet friendly", PET_FRIENDLY: "Pet friendly" },
        { servizio: "Promozioni", PROMOZIONI: "Promozioni" },
        { servizio: "Senza glutine", SENZA_GLUTINE: "Senza glutine" },
        { servizio: "Solo vegan", SOLO_VEGAN: "Solo vegan" },
        { servizio: "Wi-Fi", WI_FI: "Wi-Fi" }
    ],
    toponimi:[
        { toponimo: "Viale", VIALE: "Viale" },
        { toponimo: "Via", VIA: "Via" },
        { toponimo: "Strada", STRADA: "Strada" },
        { toponimo: "Piazza", PIAZA: "Piazza" },
        { toponimo: "Contrada", CONTRADA: "Contrada" }
    ],
    messaggi:{
        ok_regist_azienda: "Azienda registrata correttamente"
    },
    errori:{
        generic: "Qualcosa é andato storto, riprova piú tardi.",
        no_token: "Nessun token fornito!",
        unauthorized: "Non autorizzato!",
        require_admin: "Richiede accesso Admin!",
        require_driver: "Richiede accesso Driver!",
        require_utente: "Richiede accesso Utente!",
        invalid_password: "Password errata!",
        not_found_user: "Utente non trovato",
        invalid_email: "Email non trovata",
        invalid_login: "Credenziali errate!"

    }
  };