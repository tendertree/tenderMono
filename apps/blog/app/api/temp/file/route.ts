/**
 * @module simple route example, it save json file 
 */
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';


const DATA_FILE_PATH = path.join(process.cwd(), '/src/data/hello.json');

export async function GET() {
    try {
        const data = { msg: "helloworld" };
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');

        return NextResponse.json({ msg: "Data saved successfully!" });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}

