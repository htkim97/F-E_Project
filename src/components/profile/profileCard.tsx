import {Profile} from "@/service/Profile"
import Image from "next/image"

type Props = {Profile:Profile}

export default function ProfileCard ({
    Profile : {path, title, description, more}
}:Props) {
return(
<>
    <div className="flex flex-col">
      <div className="flex">
        <Image src={`/img/${path}.jpg`} alt={""} width='100' height='100' className="rounded-full"></Image>
      </div>
      <div>
        <div className="font-bold mt-10 text-xl">{title}</div>
        <div className="mt-4 text-5">{description}</div>
        <div className="mt-4 text-sky-500">{more}</div>
      </div>

    </div>
</>
)
}