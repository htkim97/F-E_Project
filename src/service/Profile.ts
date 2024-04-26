import { readFile } from "fs/promises";
import path from 'path';

export type Profile = {
    path:string;
    title:string;
    description : string;
    more: string;
};

export async function getAllPosts(): Promise<Profile[]>{
    const filePath = path.join(process.cwd(),'src',"data","guide.json");
    return readFile(filePath, 'utf-8')
        .then<Profile[]>((data) => {
            const profiles: Profile[] = JSON.parse(data);
            shuffleArray(profiles); // 배열을 무작위로 섞음
            return profiles;
        });
}

// 배열을 무작위로 섞는 함수
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
