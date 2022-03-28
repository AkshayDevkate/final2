function Footer(props){

    return(
        <div id="footer">
        <div>
        <img src="https://i.ibb.co/GVQCRSW/Logo-big-roundbackground.png" alt="Logo-big-roundbackground" border="0" width="120px"
                height="120px"/>
        <div className="contact">
        <img src="https://i.ibb.co/vQwZ2fZ/Recurso-4.png" alt="phone" border="0" width="30" height="30"/>
            <p>+49 (0) 30 896 27 340</p>
        </div>
        <div className="contact">
        <img src="https://i.ibb.co/V9Fk1PK/Recurso-6.png" alt="icon-mail" border="0" width="30" height="30"/>
            <p>  info@greenhomenow.de</p>
        </div>
        </div>
        <div className="footerLeft">
        <img src="https://i.ibb.co/92J6GF6/Logos-2-800x132.png" alt="Logos-2-800x132"  alt="logos-360"  border="0"/>
        <a href="http://greenhomenow.de/daten/">Datenschutz</a>
        <a href="http://greenhomenow.de/impressum/">Impressum</a>
        </div>
        </div>
    );
}

export default Footer;