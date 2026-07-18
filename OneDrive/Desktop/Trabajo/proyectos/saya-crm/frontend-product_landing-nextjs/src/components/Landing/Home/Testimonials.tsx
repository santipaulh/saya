"use client"
import { useMemo, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import langJson from "./Home.language.json"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { getLandingPath, LandingLanguage } from "../Common/landingLanguage"

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then((x) => x.FontAwesomeIcon),
    {
        ssr: false
    }
)

type StudyCase = {
    id: string
    businessName: string
    representativeRole: string
    image: string
    benefits: string[]
}

export default function Testimonials({
    lang
}: {
    lang: LandingLanguage
}) {
    const language = langJson[lang].sectionTestimonials
    const studyCases = language.studyCases as StudyCase[]
    const [visibleCount, setVisibleCount] = useState(2)

    const visibleStudyCases = useMemo(
        () => studyCases.slice(0, visibleCount),
        [studyCases, visibleCount]
    )

    if (studyCases.length === 0) {
        return null
    }

    return (
        <section className="w-full px-6 md:px-10 xl:px-[60px] py-20 bg-[#f8fafc]">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-2 items-center text-center">
                    <h2 className="text-[8vw] md:text-[3.3vw] xl:text-[44px] font-extrabold text-black">
                        {language.title}
                    </h2>
                    <p className="text-gray-600 text-[16px] md:text-[1.2vw] xl:text-[20px] max-w-[760px]">
                        {language.subtitle}
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {visibleStudyCases.map((studyCase) => (
                        <article
                            key={studyCase.id}
                            className="w-full bg-white rounded-3xl shadow-sm border border-gray-200 p-5 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8"
                        >
                            <div className="w-full lg:w-[340px] shrink-0">
                                <Image
                                    src={studyCase.image}
                                    alt={studyCase.businessName}
                                    width={680}
                                    height={420}
                                    className="w-full h-[210px] md:h-[240px] object-cover rounded-2xl"
                                />
                            </div>

                            <div className="flex-1 flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                                        {studyCase.businessName}
                                    </h3>
                                    <p className="text-gray-500 text-base md:text-lg">
                                        {studyCase.representativeRole}
                                    </p>
                                </div>

                                <ul className="flex flex-col gap-3">
                                    {studyCase.benefits.map((benefit, index) => (
                                        <li
                                            key={`${studyCase.id}-benefit-${index}`}
                                            className="flex items-start gap-3 text-base md:text-lg text-gray-700"
                                        >
                                            <span className="text-green-600 mt-1">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <a
                                        href={getLandingPath(lang, `/study-cases/${studyCase.id}`)}
                                        className="inline-flex px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
                                    >
                                        {language.readStudy}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {visibleCount < studyCases.length && (
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 2)}
                            className="px-8 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                        >
                            {language.addMore}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
