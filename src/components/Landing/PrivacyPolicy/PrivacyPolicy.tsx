"use client"
import Footer from "../Common/Footer/Footer"
import Header from "../Common/Header/Header"
import PrivacyArray from "./Privacy.json"
const privacy = PrivacyArray as {
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
        | {
            type: "table"
            headers: string[]
            rows: string[][]
        }
    )[]
}[]

function Privacy() {
    return (
        <section className="max-w-4xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-1xl font-bold">Privacy Policy</h1>
                <h1 className="text-md sm:text-1xl">Last updated May 07, 2025</h1>
            </div>

            {privacy.map((section, sectionIndex) => (
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
                            } else if (item.type === "table") {
                                return (
                                    <div key={itemIndex} className="overflow-x-auto">
                                        <table className="min-w-full border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    {item.headers.map((header, headerIndex) => (
                                                        <th key={headerIndex} className="border px-4 py-2 text-left font-bold">{header}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.rows.map((row, rowIndex) => (
                                                    <tr key={rowIndex} className="even:bg-gray-50">
                                                        {row.map((cell, cellIndex) => (
                                                            <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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
            <Privacy />
        </main>
    )
}

export default function PrivacyPolicyPage({
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
