import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Evant from './pages/evant/Evant.jsx';
import Home from './pages/home/Home.jsx';
import TypeEvant from './pages/ttype/TypeEvant.jsx';
import Search from './pages/search/Search.jsx';
import Acount from './pages/acount/Acount.jsx';
import About from './pages/about/About.jsx';
import TermsAndConditions from './pages/taerm/Taerm.jsx';
import Contact from './pages/contact/Contact.jsx';
import Level from './pages/level/Level.jsx';
import LogIn from './pages/acount/LogIn.jsx';
import SignIn from './pages/acount/Sin.jsx';
import Ticket from './pages/Ticket/Ticket.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='evant/:id' Component={Evant} />
    <Route path='type' Component={TypeEvant} />
    <Route path='search' Component={Search} />
    <Route path='acount' Component={Acount} />
    <Route path='about' Component={About} />
    <Route path='taerm' Component={TermsAndConditions} />
    <Route path='contact' Component={Contact} />
    <Route path='level' Component={Level} />
    <Route path='login' Component={LogIn} />
    <Route path='signup' Component={SignIn} />
    <Route path='ticket/:id' Component={Ticket} />
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
