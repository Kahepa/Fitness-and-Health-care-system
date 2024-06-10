import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import { SignUp, Login, Otp, Workout, Questions, DietPlan, MySchedule, Biometrics, PostPage, Adminpage, Exercise,BlogDetail,BlogPage} from './pages';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='SignUp' element={<SignUp />} />
      <Route path='Login' element={<Login />} />
      <Route path='OTP' element={<Otp />} />
      <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route 
        path='Workout' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist', 'user']}>
            <Workout />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='DietPlan' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist']}>
            <DietPlan />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='Questions' 
        element={
          <ProtectedRoute roles={['admin', 'user']}>
            <Questions />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='MySchedule' 
        element={
          <ProtectedRoute roles={['user']}>
            <MySchedule />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='Biometrics' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist', 'user']}>
            <Biometrics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='PostPage' 
        element={
          <ProtectedRoute roles={['admin', 'user']}>
            <PostPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='Adminpage' 
        element={
          <ProtectedRoute roles={['admin']}>
            <Adminpage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='Exercise' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist', 'user']}>
            <Exercise />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='BlogDetail' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist', 'user']}>
            <BlogDetail />
          </ProtectedRoute>
        } 
      />
      <Route 
        path='BlogPage' 
        element={
          <ProtectedRoute roles={['admin', 'nutritionist', 'user']}>
            <BlogPage />
          </ProtectedRoute>
        } 
      />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
