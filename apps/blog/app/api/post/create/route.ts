import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { filename, content } = body;

    if (!filename || !content) {
      return NextResponse.json({ error: 'Filename and content are required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'save', 'storage', filename);

    fs.writeFileSync(filePath, content);
    
    return NextResponse.json({ message: 'File created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to create file:', error);
    return NextResponse.json({ error: 'Failed to create file' }, { status: 500 });
  }
}
