'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'
import { COLORS } from '@/constants/color.constants'
import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-black/5 h-full bg-black/45 flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-2 border-b border-b-black/5 '
					draggable={false}
				>
					<GanttChartSquare
						size={30}
						color={COLORS.primary}
					/>
					<span className='text-2xl font-bold relative'>
						Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg]font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
		</aside>
	)
}
