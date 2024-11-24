import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Skill from './pages/Skill.tsx';
import Project from './pages/Project.tsx';
import Contact from './pages/Contact.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/skills',
        element:<Skill />
      },
      {
        path:'/projects',
        element:<Project />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      
    ]
  },
 
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
