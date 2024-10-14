'use client'
import { GlobalLoader } from './profile/GlobalLoader'
import { Profile } from './profile/Profile'

export function DashboardHeader() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
