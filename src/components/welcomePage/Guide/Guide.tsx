
import { getAllPosts } from "@/service/Guide";
import GuideGrid from "./GuideGrid"


export default async function Guide() {

  const Guide = await getAllPosts();

  return(
    <>
        <GuideGrid Guide={Guide}/>
    </>
  )
}