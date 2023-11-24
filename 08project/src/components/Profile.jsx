import React from "react";
import UserContext from "../context/UserContext";


function Profile(){
    const {User} = UserContext(UserContext)

    if (!User) return <div> Please log in</div>

    return <div>Welcome {User.username }</div>
   
}



export default Profile;