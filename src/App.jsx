import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Workout from './pages/Workout';
import DietPlan from './pages/DietPlan';
import Questions from './pages/Questions';
import MySchedule from './pages/MySchedule';
import Biometrics from './pages/Biometrics';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/Workout' element={<Workout />} />
        <Route path='/DietPlan' element={<DietPlan />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/MySchedule' element={<MySchedule />} />
        <Route path='/Biometrics' element={<Biometrics />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App