import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PlaceholderPage from './pages/PlaceholderPage';
import ThankYou from './pages/ThankYou';
import Admin from './pages/Admin';

const router = createBrowserRouter([
  // Admin panel — completely separate from the public layout
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <NotFound />
      </RootLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <PlaceholderPage label="Company" title="About Us" /> },
      { path: 'privacy', element: <PlaceholderPage label="Legal" title="Privacy Policy" /> },
      { path: 'terms', element: <PlaceholderPage label="Legal" title="Terms of Service" /> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
