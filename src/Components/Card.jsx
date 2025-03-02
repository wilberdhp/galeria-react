import '../styles/card.css';

export const Card = ({ id, src, alt, openModal }) => {

  const handleClick = (e) => {
    openModal(e)
  }

  return (
    <img onClick={handleClick} id={id} className="imagen" src={src} alt={alt}></img>
  )
}