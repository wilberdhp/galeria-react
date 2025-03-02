import '../styles/modal.css';

export const Modal = ({ isActive, src, id, descripcion, closeModal }) => {

  const modalClassName = isActive ? 'ventana-modal activo' : 'ventana-modal';


  return (
    <div className={modalClassName}>
      <button onClick={closeModal} className="boton-cerrar"><i className="bi bi-x"></i></button>
      <figure className="contenedor-imagenes-modal">
          <img id={isActive ? id : null} className="imagen-modal" src={isActive ? src : null} />
          <figcaption className="descripcion-imagen">{isActive ? descripcion : null}</figcaption>                
      </figure>
  </div>
  )
}