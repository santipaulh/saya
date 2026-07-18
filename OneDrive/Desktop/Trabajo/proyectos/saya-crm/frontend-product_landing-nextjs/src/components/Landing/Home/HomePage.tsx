"use client"
import Image from "next/image"
import Footer from "../Common/Footer/Footer"
import Header from "../Common/Header/Header"
import dynamic from "next/dynamic"
import StaticHero from "./StaticHero"
import FeaturesHero from "./FeaturesHero"
import CTA from "./Cta"
import WhitelabelHero from "./WhitelabelHero"
import Testimonials from "./Testimonials"

const LoadingSpinner = ({
    height,
    width
}: {
    width: `${string}px`,
    height: `${string}px`
}) => <svg
    className="animate-spin text-gray-500"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
    fill="none"
    viewBox="0 0 24 24"
>
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
    </svg>

const DynamicSteps = dynamic(() => import("./DynamicSteps"), {
    ssr: !!false,
    loading: () => {
        return <div className="flex flex-row w-full justify-center items-center">
            <LoadingSpinner
                width="30px"
                height="30px"
            />
        </div>
    },
})

function MainContent({ lang }: { lang: "en" | "es" }) {
    return (
        <div className="flex flex-col gap-5">
            <StaticHero lang={lang} />
            <WhitelabelHero lang={lang} />
            <FeaturesHero lang={lang} />
            <DynamicSteps lang={lang} />
            <CTA lang={lang} />
            <Testimonials lang={lang} />
        </div>
    )
}

export default function HomePage({ lang }: { lang: "en" | "es" }) {
    return (
        <div className="flex flex-col w-screen h-screen bg-white text-black gap-16 overflow-x-hidden">
            <Header lang={lang} />
            <MainContent lang={lang} />
            <Footer lang={lang} />
        </div>
    )
}
