
import path from 'path';
import { TodoImpleFile } from "@infra/file/todo"
import { NextResponse } from 'next/server';
const DATA_FILE_PATH = path.join(process.cwd(), '/src/data/todo.json');
const handler = new TodoImpleFile(DATA_FILE_PATH);

export async function GET() {
    const result = await handler.ReadTodoList();
    return NextResponse.json(result);
}

export async function POST(req: Request) {
    const data = await req.json(); // Extract JSON from the request body
    await handler.AddTodo(data); // Assuming AddTodo expects the todo data

    return NextResponse.json({ msg: 'Post data successfully' });
}
