import { useQuery } from '@tanstack/react-query'
import { userService } from '@/services/user.service'

function userProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile()
	})
	return { data, isLoading }
}

export default userProfile
