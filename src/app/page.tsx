import FullBleed from "@/components/fullBleed/fullBleed";
import Profile from "@/components/profile/profile";
import Title from "@/components/title/title";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Title/>
    <Profile/>
    <FullBleed/>
    </div>
  );
}
