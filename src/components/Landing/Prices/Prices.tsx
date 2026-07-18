"use client"
import { faUsers, faRocket, faCrown, IconDefinition, faCheck, faTicket, faBuilding } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Common/Footer/Footer"
import Header from "../Common/Header/Header"
import langJson from "./Prices.language.json"
import dynamic from "next/dynamic"
import Assets from "@/components/assets/assets"

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome")
        .then((x) => x.FontAwesomeIcon), {
    ssr: !!false
})

function MainContent({ lang }: { lang: "en" | "es" }) {
    const language = langJson[lang]

    const plans: {
        icon: IconDefinition
        name: string
        price: string
        recommendedPrice: string
        features: {
            label:
            | "min_workflows"
            | "min_whatsapp_accounts"
            | "min_instagram_accounts"
            | "min_messenger_accounts"
            | "min_calendars"
            | "min_ai_chatbots"
            value: number
        }[]
    }[] = [
            {
                icon: faCheck,
                name: "Plan Basic",
                price: Assets.methods.toUsDollars(7700),
                recommendedPrice: Assets.methods.toUsDollars(15400),
                features: [
                    { label: "min_workflows", value: 5 },
                    { label: "min_calendars", value: 1 },
                    { label: "min_whatsapp_accounts", value: 1 },
                    { label: "min_instagram_accounts", value: 1 },
                    { label: "min_messenger_accounts", value: 1 },
                    { label: "min_ai_chatbots", value: 1 }
                ]
            },
            {
                icon: faRocket,
                name: "Plan Business",
                price: Assets.methods.toUsDollars(15755),
                recommendedPrice: Assets.methods.toUsDollars(29400),
                features: [
                    { label: "min_workflows", value: 30 },
                    { label: "min_calendars", value: 10 },
                    { label: "min_whatsapp_accounts", value: 5 },
                    { label: "min_instagram_accounts", value: 3 },
                    { label: "min_messenger_accounts", value: 3 },
                    { label: "min_ai_chatbots", value: 5 }
                ]
            },
            {
                icon: faBuilding,
                name: "Plan Enterprise",
                price: Assets.methods.toUsDollars(21500),
                recommendedPrice: Assets.methods.toUsDollars(45000),
                features: [
                    { label: "min_workflows", value: 99999999 },
                    { label: "min_calendars", value: 99999999 },
                    { label: "min_whatsapp_accounts", value: 99999999 },
                    { label: "min_instagram_accounts", value: 99999999 },
                    { label: "min_messenger_accounts", value: 99999999 },
                    { label: "min_ai_chatbots", value: 99999999 }
                ]
            }
        ]


    return (
        <main className="grow w-full px-6 md:px-10 xl:px-[60px] py-[80px] bg-white text-black">
            <div className="max-w-[1280px] mx-auto text-center flex flex-col gap-10">
                <div className="flex flex-col gap-1">
                    <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[48px] font-extrabold">
                        {language.title}
                    </h2>
                    <p className="text-gray-600 text-[16px] md:text-[1.3vw] xl:text-[22px] max-w-[700px] mx-auto">
                        {language.subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 pt-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-300 rounded-2xl p-6 w-full max-w-[320px] hover:shadow-xl transition duration-300 flex flex-col items-center"
                        >
                            <FontAwesomeIcon
                                icon={plan.icon}
                                size="2x"
                                className="text-red-500"
                            />
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <div className="flex flex-col items-center mt-2">
                                <span className="text-2xl font-extrabold text-red-600 flex items-center gap-2">
                                    {language.sellAt.replace("{{price}}", `${plan.recommendedPrice}`)}
                                </span>
                                <span className="text-gray-400 text-base line-through mb-3">
                                    {language.original.replace("{{price}}", `${plan.price}`)}
                                </span>
                            </div>
                            <ul className="text-sm text-gray-700 flex flex-1 flex-col gap-1 mt-2 w-full px-4">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={`${feature.label}-${i}`}
                                        className="flex w-full flex-row justify-between gap-4"
                                    >
                                        ✔ {language.planFeatures[feature.label]}
                                        <span className="font-semibold">
                                            {feature.value === 99999999 ? language.infinity : feature.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="/auth/register"
                                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition text-[13px] mt-4 font-bold shadow-md uppercase"
                            >
                                {language.startNow}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default function PricesPage({ lang }: { lang: "en" | "es" }) {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-white text-black overflow-x-hidden">
            <Header lang={lang} />
            <MainContent lang={lang} />
            <Footer lang={lang} />
        </div>
    )
}
