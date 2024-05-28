import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import axios from "axios";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(backend)
    .init(
        {
            /*  resources: {
                 en: {
                     translation: { 'K1': "Yes" }
                 },
                 cn: {
                    translation: { 'K1': '是' }
                 }
             }, */
            backend: {
                request: (options, url, payload, callback) => {
                    console.log(url, "33333333333333333333333333333333333", options);

                    axios.get("https://xxx.aliyuncs.com/bc_service_platform").then((result: any) => {
                        if (result.status === 200 && result.data) {

                            let langs = {
                                resources: {
                                    en: {
                                        translation: { 'K1': "Yes" }
                                    },
                                    cn: {
                                        translation: { 'K1': '是' }
                                    }
                                },
                            }
                            // result.data returns the above variable langs
                            // result.data === langs
                            callback(null, {
                                status: 200,
                                // data: result.data
                                data: langs
                            });
                        }
                    })

                },
            },
            fallbackLng: "en", // 默认当前的语言环境
            lng: "en",
            debug: true,

        },
        (err, t) => {
            if (err) {
                console.error("i18next error:", err);
            } else {
                console.log("i18 success");
            }
        }
    );
