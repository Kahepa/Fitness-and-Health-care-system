import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import { SignUp,Login,Otp,Workout,Questions,DietPlan,MySchedule,Biometrics,PostPage} from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/OTP' element={<Otp/>}/>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/Workout' element={<Workout />} />
        <Route path='/DietPlan' element={<DietPlan />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/MySchedule' element={<MySchedule />} />
        <Route path='/Biometrics' element={<Biometrics />} />
        <Route path='/PostPage' element={<PostPage />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App