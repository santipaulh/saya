export type LandingLanguage = 'en' | 'es'

export function isLandingLanguage(value: string): value is LandingLanguage {
    return value === 'en' || value === 'es'
}

export function getLandingPath(
    lang: LandingLanguage,
    path: string = '/'
) {
    const normalizedPath = path.startsWith('/')
        ? path
        : `/${path}`

    if (normalizedPath === '/') {
        return `/${lang}`
    }

    return `/${lang}${normalizedPath}`
}