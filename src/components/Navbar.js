import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end items-center my-30px mb-8">
        <div className="mt-6 text-sm">
          <Link className="mr-5 hover:underline" to="/">Gmail</Link>
          <Link className="mr-6 hover:underline" to="/">Images</Link>
          <AppsIcon className="mr-3" />
          <AccountCircleIcon className="mr-3" fontSize="large" />
        </div>

      </div>
    </div>
  )
}
