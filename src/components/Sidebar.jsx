import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    QuestionMarkCircleIcon,
    Squares2X2Icon,
    CalendarDaysIcon,
    AdjustmentsHorizontalIcon,
  } from "@heroicons/react/24/solid";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
  import dumbbell from "../assets/dumb-bell.svg"


const Sidebar = () => {
  return (
    <Card className="h-screen max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex space-x-4 mx-auto w-1/2 items-center">
        <Typography variant="h5" color="blue-gray">
          FITNESS 
        </Typography>
        <FontAwesomeIcon icon={faDumbbell} className="h-10 w-10 fill-current" />
      </div>
      <List className=''>
        <ListItem>
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Overview
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FontAwesomeIcon icon={faDumbbell} className="h-5 w-5 fill-current" />
          </ListItemPrefix>
          Workout
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </ListItemPrefix>
          Diet Plan
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <QuestionMarkCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Questions
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CalendarDaysIcon className="h-5 w-5" />
          </ListItemPrefix>
          Scheduler
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Biometrics
        </ListItem>
        <div className="absolute bottom-0">
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        </div>
      </List>
    </Card>
  )
}

export default Sidebar