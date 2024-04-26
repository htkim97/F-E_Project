import { Guide } from "@/service/Guide";
import Link from "next/link";
import Image from "next/image"

type Props = { Guide: Guide };

export default function GuideCard({
  Guide: { menu, name, description, path }
}: Props) {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-center">
        <Image src={`/img/${path}.png`} alt={""} width='250' height='250'></Image>
      </div>
      <div>
        <div className="font-bold text-2xl text-violet-600 italic mt-5">{menu}</div>
        <div className="mt-3 font-bold text-xl">{name}</div>
        <div className="text-gray-500 w-100">{description}</div>
      </div>

    </div>
  )
}