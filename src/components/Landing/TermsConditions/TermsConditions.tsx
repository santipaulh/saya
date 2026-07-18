"use client"
import Footer from "../Common/Footer/Footer"
import Header from "../Common/Header/Header"
import TermsArray from "./Terms.json"
const terms = TermsArray as {
    title: string,
    content:
    (
        | {
            type: "text"
            text: string
        }
        | {
            type: "subtitle"
            text: string
        }
        | {
            type: "list"
            items: string[]
        }
    )[]
}[]

function Terms() {
    return (
        <section className="max-w-4xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-1xl font-bold">Terms & Conditions</h1>
                <h1 className="text-md sm:text-1xl">Last updated May 07, 2025</h1>
            </div>

            {terms.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold uppercase">{section.title}</h1>
                    <div className="flex flex-col gap-3">
                        {section.content.map((item, itemIndex) => {
                            if (item.type === "text") {
                                return <p key={itemIndex}>{item.text}</p>
                            } else if (item.type === "subtitle") {
                                return <h2 key={itemIndex} className="text-1xl font-bold">{item.text}</h2>
                            } else if (item.type === "list") {
                                return (
                                    <ul key={itemIndex} className="list-disc pl-5">
                                        {item.items.map((li, liIndex) => (
                                            <li key={liIndex}>{li}</li>
                                        ))}
                                    </ul>
                                )
                            }
                            return null
                        })}
                    </div>
                </div>
            ))}
        </section>
    )
}


function MainContent({ lang }: { lang: "en" | "es" }) {
    return (
        <main className="flex-1 w-full px-6 sm:px-10 md:px-20 py-10 mt-6 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            <Terms />
        </main>
    )
}

export default function TermsConditionsPage({
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
