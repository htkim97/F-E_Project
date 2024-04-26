import { Guide } from "@/service/Guide";
import GuideCard from "./GuideCard";

type Props = {Guide:Guide[]};

export default function GuideGrid({Guide}:Props) {
  return(
    <>
        <div className="flex">
            {Guide.map((Guide)=>(
                <div className="w-72 mx-4"><GuideCard Guide={Guide}/></div>
            ))}
        </div>

    </>
  )
}