import { Outlet } from 'react-router-dom'
import Header from './compunent/haeder/Header'
import Footer from './compunent/footer/Footer'

function App() {

  return (
    <div
      className='w-full overflow-hidden bg-white'
    >
      <Header />


      <Outlet />
      <Footer />
    </div>
  )
}

export default App
