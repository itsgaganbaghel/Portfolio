import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from './Pages/Home'
import About from './Pages/About'
import ProjectIndex from './ProjectComponents/ProjectIndex'
import ProjectOverView from './ProjectComponents/ProjectOverView'
import LearnWebDev from './Pages/LearnWebDev'

const Routers = () => {

  let allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'About',
          element: <About />
        },
        {
          path: 'Projects',
          element: <ProjectIndex />,

        },
        {
          path: '/Projects/ProjectOverView',
          element: <ProjectOverView />
        },
        {
          path: 'learn',
          element: <LearnWebDev />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={allRoutes} />
  )
}

export default Routers