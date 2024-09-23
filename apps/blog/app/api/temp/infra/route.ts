/**
 * @module this route save file using 'infra/file' repo
 * temp route only use to check the system
 */
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { temp } from "@infra/file/temp/temp";

const DATA_FILE_PATH = path.join(process.cwd(), '/src/data/post.json');
export async function GET() {
    const tempFile = new temp(DATA_FILE_PATH);
    try {
        const result = await tempFile.Write(); // Use await to handle the promise
        console.log('Write successful:', result);
        return NextResponse.json({ msg: "Data saved successfully!" });
    } catch (error) {
        console.error('Write failed:', error);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}

