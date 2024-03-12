import { Kim } from "@repo/domains/entities/kim";

export default function ShowCard() {
	let person = new Kim("hong");
	return (
		<div>This is card object</div>
	)
}
