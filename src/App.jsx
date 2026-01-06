
import './App.css'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import AllTickets from './AllTickets/AllTickets'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

const fetchTickets= fetch('/tickets.json').then(res=>res.json())

const [counter,setCounter]=useState(0);
const [reCounter, setReCounter] = useState(0);

  return (
    <div data-theme="light" className="min-h-screen bg-base-100">
      <Navbar></Navbar>
      <Banner counter={counter} reCounter={reCounter}></Banner>
      <Suspense fallback='Loading...'>
      <AllTickets fetchTickets={fetchTickets} setCounter={setCounter} setReCounter={setReCounter}></AllTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
