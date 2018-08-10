export default {
    // Maximal amount of digits/characters a from field is allowed to contain. 
    textFromField: {
        maxDigits: 16,
        maxChars: 11
    },
    validityTime: {
        // Default
        def: "In 48 hours",
        min: 1, // minutes
        max: 2880 // minutes
    },
    links: {
        helpDocs: {
            phoneNumberFormat: "https://www.cm.com/blog/how-to-format-international-telephone-numbers/",
            specialCharacters: "https://en.wikipedia.org/wiki/GSM_03.38#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_/_GSM_03.38",
            voiceGenders: "https://docs.cmtelecom.com/voice-api-apps/v2.0#/prerequisites%7Ctext-to-speech",
            voiceNumbers: "https://docs.cmtelecom.com/voice-api-apps/v2.0#/prerequisites%7Ctext-to-speech"
        },
        appkey: "https://appmanager.cmtelecom.com/",
        productToken: "https://gateway.cmtelecom.com/",
        addressbook: "https://addressbook.cmtelecom.com/"
    }
}