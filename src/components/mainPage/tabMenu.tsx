'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Main() {
  const menu =[
    {
        href: '/menu/write',
        // icon: <HomeIcon />,
        // clickedIcon: <HomeFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">write</p>,
        font: <p>write</p>
      },
      {
        href: '/menu/calendar',
        // icon: <SearchIcon />,
        // clickedIcon: <SearchFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">Calendar</p>,
        font: <p>Calendar</p>
      },
      {
        href: '/menu/myPage',
        // icon: <NewIcon />,
        // clickedIcon: <NewFillIcon />,
        SelectedFont: <p className="text-violet-700 font-bold">MyPage</p>,
        font: <p>MyPage</p>
      },

]

const pathname = usePathname()

  return(
    <section className="flex justify-center gap-10">    
        {menu.map((item)=>(
          <div className="flex">
            <Link href={item.href}>
              {pathname === item.href ? item.SelectedFont : item.font}
            </Link>
          </div>
        ))}
    </section>
  )
}