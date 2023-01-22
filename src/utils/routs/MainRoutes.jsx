import { Stack } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../../screens/ErrorPage';
import LoginScreen from '../../screens/auth/LoginScreen'
import RegistrationScreen from '../../screens/auth/RegistrationScreen'
import VerifyPhoneScreen from '../../screens/auth/VerifyPhoneScreen'
import SignUpScreen from '../../screens/auth/SignUpScreen'
import ForgotPasswordScreen from '../../screens/auth/ForgotPasswordScreen'
import ForgotPasswordOTPScreen from '../../screens/auth/ForgotPasswordOTPScreen'
import RecoverPasswordScreen from '../../screens/auth/RecoverPasswordScreen'
import PrivateRoutes from './PrivateRoutes';
import Layout from '../../components/layout/Layout';
import DashboardScreen from '../../screens/profile/dashboard/DashboardScreen';
import GarageScreen from '../../screens/profile/garage/GarageScreen';
import AppointmentScreen from '../../screens/profile/appointment/AppointmentScreen';
import AccountScreen from '../../screens/account/AccountScreen';


const routes = createBrowserRouter([
  //auth section
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <LoginScreen />,
  },
  {
    path: '/register',
    errorElement: <ErrorPage />,
    element: <RegistrationScreen />,
  },
  {
    path: '/verify',
    errorElement: <ErrorPage />,
    element: <VerifyPhoneScreen />,
  },
  {
    path: '/signup',
    errorElement: <ErrorPage />,
    element: <SignUpScreen />,
  },
  {
    path: '/password',
    errorElement: <ErrorPage />,
    element: <ForgotPasswordScreen />,
  },
  {
    path: '/password/otp',
    errorElement: <ErrorPage />,
    element: <ForgotPasswordOTPScreen />,
  },
  {
    path: '/password/recover',
    errorElement: <ErrorPage />,
    element: <RecoverPasswordScreen />,
  },
  //Dashboard
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <DashboardScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Garage
  {
    path: '/garage',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <GarageScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Appointment
  {
    path: '/appointment',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AppointmentScreen />
        </Layout>
      </PrivateRoutes>
    ),
  },
  //Account
  {
    path: '/account',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoutes>
        <Layout>
          <AccountScreen />
        </Layout>
      </PrivateRoutes>
    ),
  }
]);
const MainRoutes = () => {
  return (
    <>
      <Stack height={'auto'}>
        <RouterProvider router={routes} />
      </Stack>
    </>
  );
};

export default MainRoutes;
