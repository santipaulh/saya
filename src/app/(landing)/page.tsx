import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Botketing - Adapta tu negocio al 2025',
    description: 'Es hora de conectar con tus clientes como más lo disfrutan: Respondiendo rápido a cualquier hora.',
    keywords: [
        'automatización',
        'digitalización',
        'experiencia digital',
        'startup',
        'ecuador'
    ],
    openGraph: {
        title: 'Botketing - Adapta tu negocio al 2025',
        description: 'Es hora de conectar con tus clientes como más lo disfrutan: Respondiendo rápido a cualquier hora.',
    }
}

export default async function MainPage() {
    redirect('/es')
}
