import { readFile } from "fs/promises";
import path from 'path';

export type Guide = {
    name:string;
    description : string;
    menu: string;
    path:string;
};

export async function getAllPosts(): Promise<Guide[]>{
    const filePath = path.join(process.cwd(),'src',"data","guide.json");
    return readFile(filePath, 'utf-8')
    .then<Guide[]>(JSON.parse)
    
}