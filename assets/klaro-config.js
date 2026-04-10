/*
 * Klaro! consent manager configuration for logotechnologia.com
 *
 * References:
 *   - Klaro docs: https://klaro.org/docs/getting-started
 *   - Regulation (EU) 2016/679 (GDPR)
 *   - Directive 2002/58/EC (ePrivacy), as transposed by Greek Law 3471/2006
 *   - Greek Law 4624/2019 (national data-protection implementation)
 *
 * The site currently sets only strictly-necessary cookies (Cloudflare
 * infrastructure). Cloudflare Web Analytics is declared as an opt-in
 * service and will only fire once the visitor gives consent via the banner.
 */
(function () {
  window.klaroConfig = {
    version: 1,

    // The <div id="…"> Klaro renders into. Auto-created if missing.
    elementID: "klaro",

    // Where the consent record is stored.
    storageMethod: "cookie",
    cookieName: "klaro",
    cookieExpiresAfterDays: 365,

    // UI behaviour ────────────────────────────────────────────────────────
    htmlTexts: true,
    embedded: false,

    // "Notice" mode: a small banner, dismissible without forcing a choice.
    // If you later add tracking scripts that need explicit opt-in BEFORE
    // any execution, flip `mustConsent` to true to upgrade to modal mode.
    noticeAsModal: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    disablePoweredBy: true,

    // Group services by purpose in the modal.
    groupByPurpose: true,

    // Opt-in by default (services off until user accepts).
    default: false,

    // Language: omit (or set to "zz") so Klaro reads <html lang="…">.
    // Note: Klaro v0.7.22 does NOT support "auto"; any string other
    // than undefined/"zz" is taken literally as the language code.

    // Shown in the generated "privacy policy" link.
    privacyPolicy: "/privacy",

    // ── Translations ────────────────────────────────────────────────────
    translations: {
      zz: {
        privacyPolicyUrl: "/privacy",
      },

      el: {
        consentModal: {
          title: "Ρυθμίσεις Απορρήτου",
          description:
            "Εδώ μπορείτε να δείτε και να προσαρμόσετε τις υπηρεσίες που επιτρέπετε να φορτωθούν σε αυτόν τον ιστότοπο. Έχετε τον πλήρη έλεγχο — οι επιλογές σας αποθηκεύονται τοπικά και μπορείτε να τις αλλάξετε ανά πάσα στιγμή.",
        },
        consentNotice: {
          title: "Cookies & Προστασία Δεδομένων",
          changeDescription:
            "Υπήρξαν αλλαγές από την τελευταία σας επίσκεψη — παρακαλούμε ανανεώστε τις προτιμήσεις σας.",
          description:
            "Γεια σας! Αυτός ο ιστότοπος χρησιμοποιεί τεχνικά απαραίτητα cookies (Cloudflare) για την ασφαλή λειτουργία του και προσφέρει ανώνυμη μέτρηση επισκεψιμότητας (Cloudflare Web Analytics) κατόπιν συγκατάθεσης. Δεν χρησιμοποιούνται υπηρεσίες διαφήμισης. Μπορείτε πάντα να διαχειριστείτε τις προτιμήσεις σας πατώντας «{learnMoreLink}».",
          learnMore: "Ρυθμίσεις",
          testing: "Λειτουργία δοκιμής!",
        },
        privacyPolicy: {
          name: "πολιτική απορρήτου",
          text: "Για περισσότερες πληροφορίες, διαβάστε την {privacyPolicy} μας.",
        },
        purposes: {
          functional: {
            title: "Λειτουργικά",
            description:
              "Υπηρεσίες απαραίτητες για την τεχνική λειτουργία και την ασφάλεια του ιστότοπου.",
          },
          analytics: {
            title: "Ανάλυση επισκεψιμότητας",
            description:
              "Υπηρεσίες που μετρούν ανώνυμα την επισκεψιμότητα, χωρίς να εντοπίζουν επισκέπτες προσωπικά.",
          },
        },
        purposeItem: {
          service: "υπηρεσία",
          services: "υπηρεσίες",
        },
        ok: "Εντάξει",
        save: "Αποθήκευση",
        decline: "Απόρριψη",
        close: "Κλείσιμο",
        acceptAll: "Αποδοχή όλων",
        acceptSelected: "Αποθήκευση επιλογών",
        poweredBy: "",
        service: {
          disableAll: {
            title: "Ενεργοποίηση / απενεργοποίηση όλων",
            description: "Εναλλαγή όλων των προαιρετικών υπηρεσιών ταυτόχρονα.",
          },
          optOut: {
            title: "(opt-out)",
            description: "Είναι ενεργοποιημένη εξ ορισμού· μπορείτε να την απενεργοποιήσετε.",
          },
          required: {
            title: "(πάντα ενεργό)",
            description:
              "Η υπηρεσία είναι απολύτως απαραίτητη για τη λειτουργία και την ασφάλεια του ιστότοπου και δεν μπορεί να απενεργοποιηθεί.",
          },
          purposes: "Σκοποί",
          purpose: "Σκοπός",
        },
        contextualConsent: {
          description: "Θέλετε να φορτώσετε εξωτερικό περιεχόμενο από τον πάροχο {title};",
          acceptOnce: "Ναι",
          acceptAlways: "Πάντα",
          descriptionEmptyStore: "Για να συμφωνήσετε μόνιμα σε αυτή την υπηρεσία, πρέπει να αποδεχθείτε {title} στο {link}.",
          modalLinkText: "Διαχείριση Συγκατάθεσης",
        },
        // ── Per-service descriptions ─────────────────────────────────
        cloudflare: {
          description:
            "Τεχνική υποδομή (CDN, DNS, προστασία DDoS, bot management). Απολύτως απαραίτητη για την ασφαλή και αξιόπιστη λειτουργία του ιστότοπου.",
        },
        "cloudflare-analytics": {
          description:
            "Cloudflare Web Analytics — ανώνυμη μέτρηση επισκεψιμότητας χωρίς cookies. Χρησιμοποιεί την ίδια υποδομή Cloudflare που ήδη εξυπηρετεί τον ιστότοπο.",
        },
        "google-analytics": {
          description:
            "Google Analytics — μέτρηση επισκεψιμότητας και ανάλυση συμπεριφοράς χρηστών. Χρησιμοποιεί cookies τρίτου μέρους (third-party). Λειτουργεί μόνο κατόπιν συγκατάθεσής σας.",
        },
      },

      en: {
        consentModal: {
          title: "Privacy Settings",
          description:
            "Here you can review and adjust which services are allowed to load on this site. You stay in control — your preferences are stored locally and can be changed at any time.",
        },
        consentNotice: {
          title: "Cookies & Data Protection",
          changeDescription:
            "There have been changes since your last visit — please renew your preferences.",
          description:
            "Hi! This website uses strictly-necessary technical cookies (Cloudflare) for secure operation and offers anonymous traffic measurement (Cloudflare Web Analytics) with your consent. No advertising services are used. You can always manage your preferences by clicking \"{learnMoreLink}\".",
          learnMore: "Settings",
          testing: "Testing mode!",
        },
        privacyPolicy: {
          name: "privacy policy",
          text: "To learn more, please read our {privacyPolicy}.",
        },
        purposes: {
          functional: {
            title: "Functional",
            description:
              "Services required for the technical operation and security of the website.",
          },
          analytics: {
            title: "Traffic analytics",
            description:
              "Services that measure traffic anonymously, without personally identifying visitors.",
          },
        },
        purposeItem: {
          service: "service",
          services: "services",
        },
        ok: "OK",
        save: "Save",
        decline: "Decline",
        close: "Close",
        acceptAll: "Accept all",
        acceptSelected: "Save selection",
        poweredBy: "",
        service: {
          disableAll: {
            title: "Enable / disable all",
            description: "Toggle all optional services at once.",
          },
          optOut: {
            title: "(opt-out)",
            description: "Enabled by default; you may disable it.",
          },
          required: {
            title: "(always required)",
            description:
              "This service is strictly necessary for the operation and security of the website and cannot be disabled.",
          },
          purposes: "Purposes",
          purpose: "Purpose",
        },
        contextualConsent: {
          description: "Do you want to load external content from {title}?",
          acceptOnce: "Yes",
          acceptAlways: "Always",
          descriptionEmptyStore: "To agree to this service permanently, you must accept {title} in the {link}.",
          modalLinkText: "Consent Manager",
        },
        cloudflare: {
          description:
            "Technical infrastructure (CDN, DNS, DDoS protection, bot management). Strictly necessary for the secure and reliable operation of the website.",
        },
        "cloudflare-analytics": {
          description:
            "Cloudflare Web Analytics — anonymous, cookieless traffic measurement. Uses the same Cloudflare infrastructure that already serves the website.",
        },
        "google-analytics": {
          description:
            "Google Analytics — traffic measurement and user-behaviour analysis. Uses third-party cookies. Only activated with your consent.",
        },
      },
    },

    // ── Services ───────────────────────────────────────────────────────
    //
    // Cloudflare's infrastructure cookies are strictly necessary and
    // declared for transparency only (`required: true` → cannot be
    // toggled off). Cloudflare Web Analytics is opt-in and will only
    // start firing once the visitor consents via the Klaro banner.
    //
    services: [
      {
        name: "cloudflare",
        title: "Cloudflare",
        purposes: ["functional"],
        required: true,
        cookies: [
          [/^__cf_bm$/, "/", ".logotechnologia.com"],
          [/^_cfuvid$/, "/", ".logotechnologia.com"],
          [/^cf_clearance$/, "/", ".logotechnologia.com"],
        ],
      },
      {
        name: "cloudflare-analytics",
        title: "Cloudflare Web Analytics",
        purposes: ["functional"],
        required: true,
        cookies: [],
      },
      {
        name: "google-analytics",
        title: "Google Analytics",
        purposes: ["analytics"],
        required: false,
        default: false,
        cookies: [
          [/^_ga/, "/", ".logotechnologia.com"],
          [/^_gid$/, "/", ".logotechnologia.com"],
          [/^_gat/, "/", ".logotechnologia.com"],
        ],
      },
    ],
  };
})();
