import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>
export function UIButton({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={cn(
				'linear rounded-lg bg-transparent  border border-purple-300 py-2 px-7 text-base font-medium text-white transition hover:bg-slate-400 active:bg-blue-800',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
