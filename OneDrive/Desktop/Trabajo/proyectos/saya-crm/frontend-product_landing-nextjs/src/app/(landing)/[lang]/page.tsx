import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HomePage from '@/components/Landing/Home/HomePage'
import { isLandingLanguage, LandingLanguage } from '@/components/Landing/Common/landingLanguage'

export const metadata: Metadata = {
    title: 'Botketing - Adapta tu negocio al 2025',
    description: 'Es hora de conectar con tus clientes como mas lo disfrutan: Respondiendo rapido a cualquier hora.',
    keywords: [
        'automatizacion',
        'digitalizacion',
        'experiencia digital',
        'startup',
        'ecuador'
    ],
    openGraph: {
        title: 'Botketing - Adapta tu negocio al 2025',
        description: 'Es hora de conectar con tus clientes como mas lo disfrutan: Respondiendo rapido a cualquier hora.',
    }
}

export default async function MainPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    if (!isLandingLanguage(lang)) {
        notFound()
    }

    return <HomePage lang={lang} />
}
