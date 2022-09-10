import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-footer.png"



export default function Footer() {

    return (
        <>
            <footer class="footer">
                <div class="grupo1">
                    <div class="box1">

                        <Link to="/"> <img src={logo} alt="logo" className="logo-footer"></img> </Link>

                    </div>
                    <div class="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum incidunt fuga molestiae ab impedit amet
                            corrupti aliquam vero sequi ratione.</p>

                        <Link to="/nosotros">Mas sobre nosotros</Link> <br />
                        <Link to="/contacto">Contactanos</Link>k  <br />
                    </div>
                    <div class="box">
                        <h2>SIGUENOS</h2>
                        <div class="icon-redes_">
                            <a href="https://www.facebook.com/Juniros-Arequipe-108802061960917" target="_blank"> <box-icon className="icon-fb" type='logo' name='facebook-square' /> </a>
                            <a href="https://www.instagram.com/junirosarequipe/" target="_blank"> <box-icon name='instagram' type='logo' className="icon-inst" /> </a>
                            <a href="https://wa.me/message/JZFWE2CJVWUCB1" target="_blank"> <box-icon name='whatsapp' type='logo' className="icon-what" /> </a>
                        </div>
                    </div>
                </div>

                <div class="grupo2">
                    <small> &copy; 2022 <b>By Juniro's Arequipe | SENA </b> Todos los derechos reservados</small>
                </div>
            </footer>
        </>
    )

}