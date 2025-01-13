import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Evant from './pages/evant/Evant.jsx';
import Home from './pages/home/Home.jsx';
import TypeEvant from './pages/ttype/TypeEvant.jsx';
import Search from './pages/search/Search.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='evant/:id' Component={Evant} />
    <Route path='type' Component={TypeEvant} />
    <Route path='search' Component={Search} />
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
