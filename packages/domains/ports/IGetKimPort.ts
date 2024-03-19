import { Kim } from "../entities/kim";
//inbound
export interface IGetKimPort {
	getKim(id: string): Kim;
}
//outbound
export interface IKimRepository {
	findById(id: string): Kim | null;
}
