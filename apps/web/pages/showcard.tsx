import { Kim } from "@repo/domains/entities/kim"
import Button from "@repo/ui/src/button"
import MyAvatar from "@repo/ui/src/myAvatar";
export default function ShowCard() {
	let person = new Kim("hong");

	return (
		<div>This is card object
			<MyAvatar />
		</div>
	)
}


