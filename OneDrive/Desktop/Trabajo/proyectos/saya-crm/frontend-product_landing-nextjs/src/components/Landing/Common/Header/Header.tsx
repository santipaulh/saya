"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import langJson from "./Header.language.json"
import { getLandingPath, LandingLanguage } from "../landingLanguage"

export default function Header({
  lang
}: {
  lang: LandingLanguage
}) {
  const language = langJson[lang]
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const getLanguagePath = (targetLang: LandingLanguage) => {
    const parts = pathname.split("/").filter(Boolean)

    if (parts.length === 0) {
      return `/${targetLang}`
    }

    if (parts[0] === "en" || parts[0] === "es") {
      parts[0] = targetLang
      return `/${parts.join("/")}`
    }

    return `/${targetLang}/${parts.join("/")}`
  }

  return (
    <header className="w-[90%] max-w-[1200px] mx-auto mt-6 bg-white flex items-center gap-4 py-4 px-6 rounded-[20px] shadow-md relative">
      {/* Logo */}
      <a aria-label={language.brandName} href={getLandingPath(lang)} className="shrink-0">
        <div className="flex items-center gap-3">
          <img
            alt="logo"
            loading="lazy"
            width="42"
            height="42"
            decoding="async"
            src="/images/bklogo.jpg"
            className="object-cover w-[42px] h-[42px] rounded-full"
          />
          <div className="text-2xl font-medium truncate max-w-[120px] sm:max-w-none">
            {language.brandName}
          </div>
        </div>
      </a>

      <div className="flex flex-1 items-center justify-center gap-3">
        <Link
          href={getLanguagePath("es")}
          aria-label="Cambiar a español"
          className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${lang === "es" ? "border-red-600 bg-red-50 text-red-700" : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50"}`}
          onClick={() => setIsOpen(false)}
        >
          <span aria-hidden="true" className="text-base">🇪🇸</span>
          <span>ES</span>
        </Link>
        <Link
          href={getLanguagePath("en")}
          aria-label="Switch to English"
          className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${lang === "en" ? "border-red-600 bg-red-50 text-red-700" : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50"}`}
          onClick={() => setIsOpen(false)}
        >
          <span aria-hidden="true" className="text-base">🇺🇸</span>
          <span>EN</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-5">
        <a
          className="font-medium text-secondary hover:text-accent duration-200 hover:opacity-50"
          href={getLandingPath(lang, "/about")}
        >
          {language.about}
        </a>
        <a
          className="font-medium text-secondary hover:text-accent duration-200 hover:opacity-50"
          href={getLandingPath(lang, "/prices")}
        >
          {language.prices}
        </a>
        {/* <a
          className="font-medium text-secondary hover:text-accent duration-200 hover:opacity-50"
          href="/portfolio"
        >
          {language.portfolio}
        </a> */}
        <a
          aria-label={language.startNow}
          className="min-w-[120px] w-fit rounded-xl flex justify-center items-center px-4 py-2 text-white bg-red-600 border border-red-600 hover:bg-red-700 transition-colors duration-200"
          href="/auth/register"
        >
          {language.startNow}
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-b-[20px] py-4 px-6 z-10 flex flex-col gap-4">
          <a
            className="font-medium text-secondary hover:text-accent duration-200"
            href={getLandingPath(lang, "/about")}
            onClick={() => setIsOpen(false)}
          >
            {language.about}
          </a>
          <a
            className="font-medium text-secondary hover:text-accent duration-200"
            href={getLandingPath(lang, "/prices")}
            onClick={() => setIsOpen(false)}
          >
            {language.prices}
          </a>
          {/* <a
            className="font-medium text-secondary hover:text-accent duration-200"
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            {language.portfolio}
          </a> */}
          <a
            className="w-full text-center rounded-[15px] px-[15px] py-[10px] text-[16px] bg-white text-accent border border-accent hover:bg-accent hover:text-white duration-200"
            href={getLandingPath(lang, "/#contact")}
            onClick={() => setIsOpen(false)}
          >
            {language.startNow}
          </a>
        </div>
      )}
    </header>
  )
}
