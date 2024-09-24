import { TodoProp } from "@entity/todo/src/todo";
import { promises as fs } from "fs";
import path from "path";

export class TodoImpleFile {
 private dataFilePath: string;
 constructor(dataFilePath: string) {
  this.dataFilePath = dataFilePath;
 }
 public async ReadTodoList(): Promise<TodoProp[]> {
  try {
   const data = await fs.readFile(this.dataFilePath, "utf-8");
   return JSON.parse(data) as TodoProp[];
  } catch (error) {
   console.error("Error reading data:", error);
   return [];
  }
 }

 public async AddTodo(Basic: TodoProp): Promise<void> {
  try {
   await fs.writeFile(this.dataFilePath, JSON.stringify(Basic, null, 2));
  } catch (error) {
   console.error("Error writing data:", error);
  }
 }
}
