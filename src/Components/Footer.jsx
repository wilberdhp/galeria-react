import '../styles/footer.css';

const RedesSociales = ({ href, iconClassName}) => {
  return (
    <a className="redes-sociales" href={href} target="_blank" rel="noopener noreferrer"><i className={iconClassName}></i></a>
  )
}

export const Footer = () => {

  return (
    <footer>
    <div className="contenedor-contacto">
        <p className="texto-contacto">Contáctame para iniciar tu proyecto de desarrollo web</p>
        <a className="enlace-email" href="mailto:wilberdelfinhernandezpena19@gmail.com">Contacto <i className="bi bi-envelope-check-fill"></i></a>
    </div>
    <div className="contenedor-redes-sociales">
        <RedesSociales href="https://github.com/wilberdhp" iconClassName="bi bi-github" />
        <RedesSociales href="https://www.linkedin.com/in/wilberdhp/" iconClassName="bi bi-linkedin" /> 
    </div>
    <p className="texto-copyright">Creado por Wilber Delfín Hernández Peña (2025) &#169;</p>
</footer>
  )
}
