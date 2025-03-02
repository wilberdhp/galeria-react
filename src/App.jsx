import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useState } from 'react';
import { ButtonNavBar } from './Components/ButtonNavBar';
import { Card } from './Components/Card';
import { Footer } from './Components/Footer';
import { Modal } from './Components/Modal';
import imagesJson from './config/images.json';

function App() {
  const [images, setImages] = useState([...imagesJson]);

  const [modal, setModal] = useState(false);
  const [idImagenModal, setIdImagenModal] = useState(null);
  const [imagenModal, setImagenModal] = useState(null);
  const [descriptionModal, setDescriptionModal] = useState(null);

  const filterImages = (categoria) => {
    if (categoria === "Todos") {
      setImages([...imagesJson])
    } else {
      const newImages = imagesJson.filter((img) => img.categorias.some((c) => c.trim().toLowerCase() === categoria.trim().toLowerCase()));
      setImages(newImages);
    }
  }

  const openModal = (e) => {
    const imagen = e.target.getAttribute("src");
    setImagenModal(imagen);

    const idImagen = parseInt(e.target.getAttribute("id"));
    setIdImagenModal(idImagen);

    imagesJson.forEach(({ id , descripcion }) => {
      if (id === idImagen) {
        setDescriptionModal(descripcion);
      }
    })

    setModal(true);
  }
  

  return (
    <>
    <header>
      <h1 className='text-center titulo'>Galería</h1>
          <nav>
            <ul  className='contenedor-elementos-navbar'>
              <li>
                <ButtonNavBar updateImages={filterImages} categoria={"Todos"} id="boton-todos">Todos</ButtonNavBar>
              </li>
              <li>
              <ButtonNavBar updateImages={filterImages} categoria={"Videojuegos"} id="boton-videojuegos">Videojuegos</ButtonNavBar>
              </li>
              <li>
              <ButtonNavBar updateImages={filterImages} categoria={"Fan Art"} id="boton-fan-art">Fan Art</ButtonNavBar>
              </li>
              <li>
              <ButtonNavBar updateImages={filterImages} categoria={"Paisaje"} id="boton-paisajes">Paisajes</ButtonNavBar>
              </li>
            </ul>
          </nav>
    </header>
    <section id='contenedor-imagenes' className='container-fluid contenedor-principal'>
      {
        images.map(({ id, src, alt}) => (
          <Card openModal={openModal} key={id} id={id} src={src} alt={alt}></Card>
          ))
      }
    </section>
    <Footer />
    <Modal isActive={modal} id={idImagenModal} src={imagenModal} descripcion={descriptionModal} closeModal={() => setModal(false)} />
    </>
  )
}

export default App
