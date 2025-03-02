import '../styles/buttonNavBar.css';

export const ButtonNavBar = ({ id, updateImages, categoria, children }) => {
  
  const handleImages = () => {
    updateImages(categoria)
  }
  
  return (
    <button onClick={handleImages} id={id} type="button" className="boton-nav-bar btn btn-outline-primary">{children}</button>
  )
}