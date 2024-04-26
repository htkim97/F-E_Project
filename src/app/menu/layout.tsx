import Menu from "../../components/mainPage/tabMenu"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex flex-col p-10">
                <div className="sticky top-0 z-10"><Menu/></div>
                <div className="flex justify-center p-10">{children}</div>
            </div>
           
           
        </>

    )
}