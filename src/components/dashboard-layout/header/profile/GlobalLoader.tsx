'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Loader from '@/components/ui/loader/Loader'

export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()
	return isFetching || isMutating ? (
		<div className='fixe top-[1.5rem] right-[1.5rem]'>
			<Loader />
		</div>
	) : null
}
