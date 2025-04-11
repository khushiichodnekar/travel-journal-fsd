import React from 'react'

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="">
        WJ
      </div>

      <div>
        <p className="text-sm font-medium">Dustin</p>
        <button className="" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo
