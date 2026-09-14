import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technologies from "./components/technology/Technologies"
import { ToastContainer } from "react-toastify"
import type { ITechnology } from "./types/technologyType"

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};


function App() {

  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
