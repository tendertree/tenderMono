import { Kim } from "../entities/kim";
import { IGetKimPort } from "../ports/IGetKimPort";

//inbound
class GetKimController implements IGetKimPort {
	getKim(id: string) {
		var result: Kim = new Kim("hello");
		return result
	}
}
//outbound
