"use client"
import langJson from "./Home.language.json"
import Image from "next/image"
import styles from "./Home.module.css"

export default function WhitelabelHero({
    lang
}: {
    lang: "en" | "es"
}) {
    const language = langJson[lang].sectionWhitelabel
    const images = language.showCases as {
        src: string,
        label: string
    }[]

    return (
        <section className="w-full py-20 px-6 md:px-12 flex flex-col items-center gap-16 text-center overflow-hidden">
            <h2 className="text-[8vw] md:text-[3vw] font-bold leading-tight text-gray-900">
                {language.title}
            </h2>

            <div className="w-full overflow-hidden relative">
                <div className={["whitespace-nowrap flex gap-6", styles['animate-marquee']].join(" ")}>
                    {images.concat(images).map((item, i) => (
                        <div key={i} className={styles.imageWrapper}>
                            <Image
                                src={item.src}
                                alt={`Logo ${i}`}
                                fill
                                className="object-cover"
                            />
                            <div className={styles.overlay}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
