import { Avatar, AvatarFallback, AvatarImage } from '@ui/ui/avatar'


export default function MyAvatar() {
	return (
		<div>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	)
}
