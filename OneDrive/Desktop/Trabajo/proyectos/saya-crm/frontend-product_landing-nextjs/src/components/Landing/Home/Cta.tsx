"use client"
import langJson from "./Home.language.json"

export default function CTA({
    lang
}: {
    lang: "en" | "es"
}) {
    const language = langJson[lang].sectionCta

    return (
        <section className="w-full bg-white py-20 px-6 md:px-12 flex flex-col items-center text-center gap-6">
            <h2 className="text-[8vw] md:text-[3.5vw] font-bold text-gray-900 leading-tight">
                {language.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                {language.subtitle}
            </p>
            <a
                href="/auth/register"
                className="mt-6 px-10 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 transition-all hover:cursor-pointer"
            >
                {language.button}
            </a>
        </section>
    )
}
