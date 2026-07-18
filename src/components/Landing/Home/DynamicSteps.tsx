"use client"
import { useEffect, useRef, useState } from "react"
import langJson from "./Home.language.json"
import dynamic from "next/dynamic"
import { faCrown, faPalette, faSackDollar } from "@fortawesome/free-solid-svg-icons"

const FontAwesomeIcon = dynamic(
	() => import("@fortawesome/react-fontawesome").then((x) => x.FontAwesomeIcon),
	{ ssr: false }
)

export default function Steps({
	lang
}: {
	lang: "en" | "es"
}) {
	const language = langJson[lang].sectionSteps
	const elementsRef = useRef<(
		HTMLDivElement | null
	)[]>([])

	const [
		visibleIndexes,
		setVisibleIndexes
	] = useState<number[]>([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = Number(entry.target.getAttribute("data-index"))
					if (entry.isIntersecting) {
						setVisibleIndexes((prev) =>
							prev.includes(index) ? prev : [...prev, index]
						)
					} else {
						setVisibleIndexes((prev) =>
							prev.filter((i) => i !== index)
						)
					}
				})
			},
			{
				threshold: 0.3
			}
		)

		elementsRef.current.forEach((el) => {
			if (el) observer.observe(el)
		})

		return () => {
			elementsRef.current.forEach((el) => {
				if (el) observer.unobserve(el)
			})
		}
	}, [])

	return (
		<section className="w-full bg-[#101319] rounded-[40px] shadow-lg px-6 sm:px-10 md:px-20 py-[110px] md:py-[140px] flex flex-col gap-[40px]">
			<h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8">
				{language.startInSteps}
			</h1>
			<div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[80px] md:gap-[120px] relative">
				<div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/70 via-white/25 to-red-500/70" />
				{language.steps.map((step, i) => (
					<div
						key={i}
						data-index={i}
						ref={(el) => (elementsRef.current[i] = el) as any}
						className={[
							"will-change-transform will-change-opacity",
							"transition-all duration-[1000ms] ease-in-out",
							visibleIndexes.includes(i)
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-16",
							"relative",
							"flex flex-col md:flex-row items-center",
							i % 2 === 0
								? "justify-between"
								: "md:flex-row-reverse justify-between",
							"gap-8 md:gap-16"
						].join(" ")}
					>
						<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-red-500 z-10 items-center justify-center">
							<FontAwesomeIcon
								icon={[faPalette, faSackDollar, faCrown][i]}
								className="text-red-600 text-xl"
							/>
						</div>

						<div className="w-full md:w-[46%] flex justify-center">
							<img
								onClick={() => {
									window.location.href = "/auth/register"
								}}
								src={step.image}
								alt={step.title}
								className={[
									"cursor-pointer",
									"object-cover rounded-2xl",
									"border border-white/25",
									"shadow-[0_20px_80px_rgba(255,255,255,0.14)]",
									"h-[225px] md:h-[330px]",
									"w-[450px] md:w-full"
								].join(" ")}
							/>
						</div>

						<div className="w-full md:w-[46%] text-center md:text-left">
							<div className="flex items-center gap-3 justify-center md:justify-start mb-3">
								<span className="inline-flex px-4 py-1 rounded-full bg-red-600 text-white font-semibold text-sm tracking-wide">
									Paso {i + 1}
								</span>
								<span className="md:hidden inline-flex w-10 h-10 rounded-full bg-white items-center justify-center text-red-600 text-lg">
									<FontAwesomeIcon icon={[faPalette, faSackDollar, faCrown][i]} />
								</span>
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
								{step.title}
							</h2>
							<p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
								{step.description}
							</p>
							<span className="hidden md:inline-block text-red-200/80 text-lg md:text-xl font-mono">{`0${i + 1}`}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
