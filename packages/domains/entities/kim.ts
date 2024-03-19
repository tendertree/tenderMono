export interface IKim {
	name: string;
}

export class Kim {
	public name: string;
	constructor(name: string) {
		this.name = name;
	}
}

export interface IKimService {
	getKimById(id: string): Kim | null;
	createKim(kim: Kim): void;
	updateKim(kim: Kim): void;
	deleteKim(id: string): void;
}

