import React from "react"

import LOGO from "../assets/images/logo.svg";
import ProfileInfo from "./Cards/ProfileInfo";

const Navbar = ({userInfo}) => {
    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow sticky top-0 z-10">
            <img src={LOGO} alt="travel story" className="h-9" />

            <ProfileInfo userInfo={userInfo} />
        </div>
    )
}

export default Navbar