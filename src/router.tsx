import { lazy, Suspense, type ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { AdminLayout } from '@/layouts/AdminLayout';

const Home = lazy(() => import('@/pages/Home'));
const SearchResults = lazy(() => import('@/pages/SearchResults'));
const NovelDetails = lazy(() => import('@/pages/NovelDetails'));
const ReadingPage = lazy(() => import('@/pages/ReadingPage'));
const Categories = lazy(() => import('@/pages/Categories'));
const Favorites = lazy(() => import('@/pages/Favorites'));
const RecentlyRead = lazy(() => import('@/pages/RecentlyRead'));
const ContinueReading = lazy(() => import('@/pages/ContinueReading'));
const Notifications = lazy(() => import('@/pages/Notifications'));
const Profile = lazy(() => import('@/pages/Profile'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'));

function Fallback() {
  return (
    <div className="grid min-h-[40vh] place-items-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-burgundy/20 border-t-burgundy" />
    </div>
  );
}

function withSuspense(el: ReactElement) {
  return <Suspense fallback={<Fallback />}>{el}</Suspense>;
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: withSuspense(<Home />) },
      { path: '/search', element: withSuspense(<SearchResults />) },
      { path: '/novel/:novelId', element: withSuspense(<NovelDetails />) },
      { path: '/categories', element: withSuspense(<Categories />) },
      { path: '/favorites', element: withSuspense(<Favorites />) },
      { path: '/recently-read', element: withSuspense(<RecentlyRead />) },
      { path: '/continue-reading', element: withSuspense(<ContinueReading />) },
      { path: '/notifications', element: withSuspense(<Notifications />) },
      { path: '/profile', element: withSuspense(<Profile />) },
      { path: '/login', element: withSuspense(<Login />) },
      { path: '/register', element: withSuspense(<Register />) },
      { path: '/about', element: withSuspense(<About />) },
      { path: '/contact', element: withSuspense(<Contact />) },
      { path: '/privacy', element: withSuspense(<Privacy />) },
      { path: '/terms', element: withSuspense(<Terms />) },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
  {
    path: '/read/:novelId/:chapterId',
    element: withSuspense(<ReadingPage />),
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ index: true, element: withSuspense(<AdminDashboard />) }],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
