import dynamic from "next/dynamic"
import langJson from "./Footer.language.json"
import { faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { getLandingPath, LandingLanguage } from "../landingLanguage"

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome")
        .then(x => x.FontAwesomeIcon),
    {
        ssr: !!false
    }
)

export default function Footer({
    lang,
}: {
    lang: LandingLanguage
}) {
    const language = langJson[lang]
    return (
        <footer className="flex-1 bg-[#1c1c1c] text-white w-full px-6 pt-14 pb-10" style={{
            borderRadius: "20px 20px 0px 0px"
        }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Left: Resources */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm text-gray-300">
                    <div>
                        <h4 className="text-white font-semibold mb-4">{language.product}</h4>
                        <ul className="space-y-2">
                            <li><a href={getLandingPath(lang, "/prices")} className="hover:text-white">{language.pricing}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{language.company}</h4>
                        <ul className="space-y-2">
                            <li><a href={getLandingPath(lang, "/about")} className="hover:text-white">{language.about}</a></li>
                            <li><a href="/auth/register" className="hover:text-white">{language.product}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">{language.legal}</h4>
                        <ul className="space-y-2">
                            <li><a href={getLandingPath(lang, "/legal/terms")} className="hover:text-white">{language.terms}</a></li>
                            <li><a href={getLandingPath(lang, "/legal/privacy")} className="hover:text-white">{language.privacy}</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right: Social */}
                <div className="flex flex-col items-start gap-4">
                    <p className="text-white font-semibold text-sm">{language.followUs}</p>
                    <div className="flex gap-5 text-xl text-gray-400">
                        <a href="https://linkedin.com/in/santipaulh" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a href="https://twitter.com/@santipaulh" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                        <a href="https://instagram.com/santi.herreram" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom note */}
            <div className="mt-10 pt-6 text-center text-xs text-gray-500">
                {language.rights.replace("{{year}}", `${new Date().getFullYear()}`)}
            </div>
        </footer>
    )
}
