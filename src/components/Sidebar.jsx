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


const Sidebar = () => {
  return (
    <Card className="h-screen max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <Typography variant="h5" color="blue-gray">
            Navbar 
            <ListItemPrefix>
            {/* <ShoppingBagIcon className="h-5 w-5" /> */}
            <img src="src/assets/dumbbell.svg" className="h-5 w-5"/>
          </ListItemPrefix>
        </Typography>
      <List>
        <ListItem>
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Overview
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            {/* <ShoppingBagIcon className="h-5 w-5" /> */}
            <img src="src/assets/dumbbell.svg" className="h-5 w-5"/>
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