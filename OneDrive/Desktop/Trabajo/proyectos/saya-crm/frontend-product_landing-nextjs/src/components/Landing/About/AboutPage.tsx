"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Common/Footer/Footer"
import Header from "../Common/Header/Header"
import Image from "next/image"

const langJson = {
    en: {
        aboutPage: {
            title: "How it all started",
            text: [
                "All started with a feedback suggestion.",
                "Yep, we had an SMMA back in the day before it was ever a trend.",
                "Using the #1 tool of our competitors",
                " ",
                " ",
                "But as a founder from a '3rd world country' our business failed, even though we didn't hold a chance our now competitor tried to charge us every time just to maintain our agency. So I (founder) asked a simple question:",
                "What if we the agencies don't take the risk of paying, but rather our b2b clients?",
                "So yeah, now if you're building a digital agency don't worry of payments because your clients will pay and we'll send you the payout by just reselling this SaaS. Velkommen!"
            ],
            ourMission: "Our mission is to help freelancers and agencies to provide tools for businesses to grow within each other. Your clients pay the product, you take the comission."
        }
    },
    es: {
        aboutPage: {
            title: "Así empezó todo",
            text: [
                "Todo comenzó con una sugerencia como feedback.",
                "Así es, teníamos una SMMA antes de que fuera tendencia.",
                "Usando la herramienta #1 de nuestros competidores.",
                " ",
                " ",
                "Pero como fundador de un 'país tercermundista', nuestro negocio fracasó. Aunque no teníamos oportunidad, nuestro ahora competidor intentaba cobrarnos a cada rato solo por mantener nuestra agencia. Así que yo (fundador) hice una pregunta muy simple:",
                "¿Y si las agencias no asumieran el riesgo de pagar, sino sus clientes?",
                "Así que sí, ahora si estás construyendo una agencia digital no te preocupes por los pagos, porque tus clientes pagarán y nosotros te enviaremos tus ganancias simplemente revendiendo este SaaS. ¡Velkommen!"
            ],
            ourMission: "Nuestra misión es hacer crecer freelancers y agencias para que le den herramientas a los negocios no digitales. Ellos pagna, ustedes se llevan las ganancias."
        }
    }
}

function MainContent({ lang }: { lang: "en" | "es" }) {
    const language = langJson[lang].aboutPage

    return (
        <main className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-14 mt-4 md:mt-8 mb-8 text-base md:text-lg leading-relaxed">
            <section className="flex flex-col gap-8 items-center">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    <div className="w-full flex justify-center mb-6">
                        <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px]">
                            <Image
                                width={420}
                                height={420}
                                src="/images/bklogo.jpg"
                                alt={"Botketing Story"}
                                className="rounded-2xl shadow-2xl object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 md:text-start text-center flex w-full">
                            {language.title}
                        </h2>
                        <div className="flex flex-col gap-3 max-w-2xl w-full">
                            {language.text
                                .filter((x) => x.trim() !== "")
                                .map((x, k) => (
                                    <p
                                        key={`about-text-${k}`}
                                        className="flex text-gray-700 text-base sm:text-lg md:text-start text-center w-full"
                                    >
                                        {x}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-6 bg-red-50 border-l-4 border-red-400 p-3 md:p-4 rounded-lg shadow-sm max-w-2xl w-full">
                    <p className="text-red-700 font-semibold text-sm sm:text-base text-center">
                        {language.ourMission}
                    </p>
                </div>
            </section>
        </main>
    )
}

export default function AboutPage({
    lang
}: {
    lang: "en" | "es"
}) {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-white text-black overflow-x-hidden">
            <Header lang={lang} />
            <MainContent lang={lang} />
            <Footer lang={lang} />
        </div>
    )
}
