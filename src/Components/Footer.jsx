import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from 'react-router-dom'

/*****************************FOOTER *********************************/

const Footer = () => (
<footer className=" footer small bg-dark">
   <div className="container text-white">
      <div className="row">
          <div className="col-lg-3 col-md-6">
            <br />
            <h5>Información de contacto</h5>
            <p className="mb-0">Dirección: 123 Calle Principal, Ciudad</p>
            <p className="mb-0">Teléfono: (555) 555-5555</p>
            <p>Correo electrónico: Darwin.cerda@gmail.com</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <br />
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a className="text-white text-decoration-none" href="./Pages/Nosotros.html">Acerca de nosotros</a></li>
              <li><a className="text-white text-decoration-none" href="./Pages/Contacto.html">Términos y condiciones</a></li>
              <li><a className="text-white text-decoration-none" href="./Pages/Contacto.html">Política de privacidad</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <br />
            <h5>Redes sociales</h5>
            <ul className="list-unstyled">
              <li><a  className="text-white text-decoration-none " href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a  className="text-white text-decoration-none" href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a  className="text-white text-decoration-none" href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <br />
            <h5>Suscríbete a nuestro boletín</h5>
            <p className="mb-0">Recibe noticias y ofertas especiales en tu correo electrónico.</p>
            <form>
              <div className="form-group ">
                <input type="email" className="form-control" placeholder="Correo electrónico"></input>
              </div>
              <button type="submit" className="btn btn-primary">Suscríbete</button>
            </form>
          </div>
      </div>
      <p className="text-white text-center p-3">© 2023 Mantenciones MTB DC. Todos los derechos reservados | Creado por DarwinCerda</p>
    </div>
        
</footer>
)
        
export default Footer;