import Image from "next/image"
import langJson from "./Home.language.json"

export default function StaticHero({
	lang
}: {
	lang: "en" | "es"
}) {
	const language = langJson[lang].sectionHero
	const heroHighlight = {
		en: <>Your <span className="text-red-500">Platform</span> without <br className="hidden md:block" /> Pain of Building </>,
		es: <>Tu <span className="text-red-500">Plataforma</span> sin <br className="hidden md:block" /> Programar </>
	}[lang]

	return (
		<section className="w-full px-4 md:px-8 xl:px-[40px] max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pt-[40px] md:pt-[80px] pb-[40px]">

			{/* Texto */}
			<div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
				<h1 className="text-[8vw] md:text-[4vw] xl:text-[52px] leading-tight font-bold">
					{heroHighlight}
				</h1>

				<p className="text-[16px] md:text-[1.6vw] xl:text-[24px] text-gray-700">
					{language.subtitle["1"]} <br />
					{language.subtitle["2"]}
				</p>
			</div>

			{/* Imagen */}
			<div className="hidden w-full md:w-1/2 md:flex justify-center">
				<Image
					src="/images/landing-hero/hero.png"
					alt="Hero illustration"
					width={500}
					height={500}
					className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[500px] min-h-[200px] object-contain"
				/>
			</div>
		</section>
	)
}
