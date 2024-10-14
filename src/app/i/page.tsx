import type { Metadata } from 'next'
import { Heading } from '@/components/ui/heading/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Statistics from './Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div className='text-white'>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}
