'use client'
import Loader from '@/components/ui/loader/Loader'
import userProfile from '@/hooks/userProfile'

function Statistics() {
	const { data, isLoading } = userProfile()

	return isLoading ? (
		<Loader />
	) : (
		<div className='grid grid-cols-4 mt-7 gap-12'>
			{data?.statistics.length ? (
				data.statistics.map(statistic => (
					<div
						className='border-black/5 rounded p-5 text-center hover:-translate-y-3 transition-transform duration-500'
						key={statistic.label}
					>
						<div className='text-xl'>{statistic.label}</div>
						<div className='text-3xl font-semibold'>{statistic.value}</div>
					</div>
				))
			) : (
				<div>Statistics not loaded!</div>
			)}
		</div>
	)
}

export default Statistics
