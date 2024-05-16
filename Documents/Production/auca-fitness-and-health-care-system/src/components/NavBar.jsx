import React from 'react'
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
    Avatar
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
  import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
  import { Dropdown } from "flowbite-react";
  
  
  const NavBar = () => {
  return (
    <>
        <div className="p-4 flex">
            <div className="flex flex-grow p-4 items-center justify-between gap-y-4">
                <Typography variant="h5" color="blue-gray" className="flex-shrink-0">
                    Navbar
                </Typography>
                <div className="ml-auto flex items-center gap-1 md:mr-4">
                    
                </div>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <Input className='w-60' icon={<MagnifyingGlassIcon className="h-6 w-6" />} label="Search" />
                    <IconButton variant="text" color="black">
                        <Cog6ToothIcon className="h-6 w-6" />
                    </IconButton>
                    <IconButton variant="text" color="black">
                        <BellIcon className="h-6 w-6"/>
                    </IconButton>
                </div>
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar className="h-6 w-6 border border-gray-900 p-0.5" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"/>
                }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">KALISA Kelly</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Update Profile</Dropdown.Item>
                    <Dropdown.Item>View medical report</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown>
                <div className="relative flex w-full gap-2 md:w-max">
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar