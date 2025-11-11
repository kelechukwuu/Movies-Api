import react, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMovieList from "./Components/GenreMovieList";
import ModalBox from "./Components/ModalBox";
import GlobalApi from "./Services/GlobalApi";


function App() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerId, setTrailerId] = useState(false);

  
  function openModal(id) {
    GlobalApi.getVideosTeaser(id)
      .then((resp) => {
        console.log(resp.data)
        setTrailerId(resp.data.results[0].key);
        setIsOpen(true);
      })
      .catch((error) => console.log(error));
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className=" bg-gray-900 min-h-screen">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList openModal={openModal} />
      <ModalBox
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        trailerId={trailerId}
      />
    </div>
  );
}

export default App;
