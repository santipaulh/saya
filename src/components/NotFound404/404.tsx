import langJson from "./404.language.json"
import styles from "./404.module.css"
import Link from "next/link"

export default function Page404() {
    const language = langJson.en

    return (
        <main className={styles.container}>
            <div className="flex flex-row gap-6 max-w-[400px] items-center">
                <span className="text-[20px] font-bold">404</span>
                <Link href="/" className="text-[18px] font-normal underline">
                    {language.text}
                </Link>
            </div>
        </main>
    )
}