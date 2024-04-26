import { getAllPosts } from "@/service/Profile"
import ProfileGrid from "./profileGrid"

export default async function Profile () {

    const Profile = await getAllPosts();

return(
<>
<ProfileGrid Profile={Profile}/>
</>
)
}