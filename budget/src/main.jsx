import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        children: [
          {
            index: true,
            element: <Navigate replace to='/homepage' />,
          },
        ],
      },
      {

        path: '/homepage',
        element: <Homepage/>
      },
      {
        path: '*', element: <NotFound />,
      },
      {
        path: '/not-found',
        element: <NotFound />,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <Projects/>,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicyPage/>
      },
       {
        path: '/terms',
        element: <TermsPage/>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />
)
