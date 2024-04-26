import Link from "next/link";

export default function Write_to_Button() {



  return(
    <div className="mt-10">
        <button className="bg-white rounded-xl border-2 border-black p-4 shadow-[0_5px_1px_1px_black] hover:shadow-[0_1px_2px_1px_black] hover:translate-y-1 hover:text-violet-700" >
            <Link href="/menu/write" className="font-bold">다이어리 작성하러 가기</Link>
        </button>
    </div>
  )
}