/**
 * @module temp.ts is simply check the file save using path props 
 * it it used to check the path is correctly 
 */

import { promises as fs } from 'fs';


export class temp {
    private dataFilePath: string;
    constructor(dataFilePath: string) {
        this.dataFilePath = dataFilePath;
    }
	public async Write(): Promise<boolean> {
        const content = { msg: "helloworld - this is from file infra" };
        try {
            await fs.writeFile(this.dataFilePath, JSON.stringify(content, null, 2));
            return true;
        } catch (error) {
            console.error('Error writing data:', error);
            return false;
        }
    }

}
