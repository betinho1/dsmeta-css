import Header from "./components/header"
import SalesCard from "./components/salescard"

function App() {
  return (
    <>
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