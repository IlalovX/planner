import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import { SITE_NAME } from '@/constants/seo.constants'
import './globals.scss'
import { Providers } from './providers'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
	description: 'PLANNER'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className='text-white'
		>
			<body className={zen.className}>
				<Providers>
					{children}
					<Toaster
						theme='dark'
						position='top-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
