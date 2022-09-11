import Header from "./components/header"
import SalesCard from "./components/salescard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard />
        </div>

      </section>
    </>
  )
}

export default App