import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';
import Admin from './pages/Admin';

// Lazy-load secondary pages for code splitting
const Advertise = lazy(() => import('./pages/Advertise'));
const ScreenPartners = lazy(() => import('./pages/ScreenPartners'));
const Events = lazy(() => import('./pages/Events'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function LazyPage({ children }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <span className="text-label-md text-ink-muted">Loading...</span>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

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
      { path: 'advertise', element: <LazyPage><Advertise /></LazyPage> },
      { path: 'screen-partners', element: <LazyPage><ScreenPartners /></LazyPage> },
      { path: 'events', element: <LazyPage><Events /></LazyPage> },
      { path: 'about', element: <LazyPage><About /></LazyPage> },
      { path: 'contact', element: <LazyPage><Contact /></LazyPage> },
      { path: 'privacy', element: <LazyPage><Privacy /></LazyPage> },
      { path: 'terms', element: <LazyPage><Terms /></LazyPage> },
      { path: 'thank-you', element: <ThankYou /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

