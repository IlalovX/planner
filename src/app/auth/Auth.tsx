'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { UIButton } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Heading } from '@/components/ui/heading/Heading'
import { IAuthForm } from '@/types/auth.types'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)
	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Succesfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/3 m-auto shadow bg-slate-900 rounded-xl px-10 py-5 text-white'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Auth' />
				<Field
					{...register('email', { required: 'Email is required!' })}
					id='email'
					label='Email:'
					placeholder='Enter email'
					type='email'
					extra='mb-4'
				/>
				<Field
					{...register('password', { required: 'Password is required!' })}
					id='password'
					label='Password:'
					placeholder='Enter password'
					type='password'
					extra='mb-4'
				/>
				<div className='flex items-center gap-5 justify-center'>
					{/* btns */}
					<UIButton onClick={() => setIsLoginForm(true)}>Login</UIButton>
					<UIButton onClick={() => setIsLoginForm(false)}>Register</UIButton>
				</div>
			</form>
		</div>
	)
}
