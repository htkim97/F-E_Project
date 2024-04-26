import {Profile} from "@/service/Profile"
import ProfileCard from "./profileCard"

type Props = {Profile:Profile[]}

export default function ProfileGrid ({Profile}:Props) {
return(
<>
<div className="flex">
            {Profile.map((Profile)=>(
                <div className="w-full mx-1 mt-20"><ProfileCard Profile={Profile}/></div>
            ))}
        </div>
</>
)
}