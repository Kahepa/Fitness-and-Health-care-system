import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  CalendarDaysIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const userRole = localStorage.getItem('userRole');
  const isAuthenticated = !!localStorage.getItem('userToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    navigate('/Login');
  };

  return (
    <Card className="h-full p-4 shadow-xl shadow-blue-gray-900/5 fixed">
      <div className="flex space-x-4 mx-auto w-1/2 items-center">
        <Typography variant="h5" color="blue-gray">
          FITNESS 
        </Typography>
        <FontAwesomeIcon icon={faDumbbell} className="h-10 w-10" />
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/">Overview</Link>
        </ListItem>
        {(userRole === 'admin' || userRole === 'nutritionist' || userRole === 'user') && (
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faDumbbell} className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Workout">Workout</Link>
          </ListItem>
        )}
        {(userRole === 'admin' || userRole === 'nutritionist') && (
          <ListItem>
            <ListItemPrefix>
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/DietPlan">Diet Plan</Link>
          </ListItem>
        )}
        {(userRole === 'admin' || userRole === 'user') && (
          <ListItem>
            <ListItemPrefix>
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Questions">Questions</Link>
          </ListItem>
        )}
        {userRole === 'user' && (
          <ListItem>
            <ListItemPrefix>
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/MySchedule">Schedule</Link>
          </ListItem>
        )}
        {isAuthenticated && (userRole === 'admin' || userRole === 'nutritionist' || userRole === 'user') && (
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Biometrics">Biometrics</Link>
          </ListItem>
        )}
        {(userRole === 'admin' || userRole === 'user') && (
          <ListItem>
            <ListItemPrefix>
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/PostPage">Post Page</Link>
          </ListItem>
        )}
        {userRole === 'admin' && (
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Adminpage">Admin Page</Link>
          </ListItem>
        )}
        {(userRole === 'admin' || userRole === 'nutritionist' || userRole === 'user') && (
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faDumbbell} className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Exercise">Exercise</Link>
          </ListItem>
        )}
        <div className="absolute bottom-0">
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </div>
      </List>
    </Card>
  );
};

export default Sidebar;
