import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import dynamic from "next/dynamic"
const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then((x) => x.FontAwesomeIcon),
    { ssr: false }
)
import langJson from "./Home.language.json"
import { faCalendar, faCog, faTicket, faTooth, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"

export default function FeaturesHero({ lang }: { lang: "en" | "es" }) {
    const language = langJson[lang].sectionFeatures
    const { title, subtitle } = language

    return (
        <section className="w-full px-6 md:px-10 xl:px-[60px] py-[80px] text-center">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
                <h2 className="text-[8vw] md:text-[3.5vw] xl:text-[48px] font-extrabold leading-tight text-black">
                    {title}
                </h2>

                <p className="text-gray-600 text-[16px] md:text-[1.3vw] xl:text-[22px] max-w-[700px]">
                    {subtitle}
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 pt-8">
                    {[
                        {
                            icon: faWhatsapp,
                            label: language.channelsName.whatsapp,
                            sublabel: language.channelsFriendlyText.whatsapp
                        },
                        {
                            icon: faFacebook,
                            label: language.channelsName.facebook,
                             sublabel: language.channelsFriendlyText.facebook
                        },
                        {
                            icon: faInstagram,
                            label: language.channelsName.instagram,
                            sublabel: language.channelsFriendlyText.instagram
                        },
                        {
                            icon: faWandMagicSparkles,
                            label: language.channelsName.ai,
                            sublabel: language.channelsFriendlyText.ai
                        },
                        {
                            icon: faCog,
                            label: language.channelsName.workflows,
                            sublabel: language.channelsFriendlyText.workflows
                        },
                        {
                            icon: faCalendar,
                            label: language.channelsName.calendars,
                            sublabel: language.channelsFriendlyText.calendars
                        },
                        {
                            icon: faTicket,
                            label: language.channelsName.tickets,
                            sublabel: language.channelsFriendlyText.tickets
                        },
                        {
                            icon: faTooth,
                            label: language.channelsName.dentists,
                            sublabel: language.channelsFriendlyText.dentists
                        }
                    ].map(({ icon, label, sublabel }, index) => (
                        <div
                            key={`features-hero-item-${index}`}
                            className="flex flex-col items-center gap-3 max-w-[150px] transition transform hover:scale-110 hover:text-red-500 duration-200"
                        >
                            <FontAwesomeIcon icon={icon} size="3x" />
                            <div className="flex flex-col">
                                <p className="text-[15px] font-semibold">{label}</p>
                                <p className="text-[12px] font-semibold opacity-60">{sublabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
