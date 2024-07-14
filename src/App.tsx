import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import NotFound from './pages/notfound/NotFound';
import AnimatedLayout from './components/AnimatedLayout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route
        index
        element={
          <AnimatedLayout>
            <Home />
          </AnimatedLayout>
        }
      />
      <Route
        path='projects'
        element={
          <AnimatedLayout>
            <Portfolio />
          </AnimatedLayout>
        }
      />
      <Route
        path='*'
        element={
          <AnimatedLayout>
            <NotFound />
          </AnimatedLayout>
        }
      />
    </Route>
  )
);
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
