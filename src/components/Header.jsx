

function Cabecera(props){
    return (
      <header>
        <div id= "titulos">
        <a href="http://greenhomenow.de/">
          <img src="https://i.ibb.co/GVQCRSW/Logo-big-roundbackground.png" alt="Logo-big-roundbackground" border="0" width="80"
                height="80"/>
          </a>
        </div>
        <nav class="navbar">
            <a href="http://greenhomenow.de/">Home</a>
                <div class="dropdown">
                   <button class="dropbtn">
                     <a href="#">Unsere Leistungen</a>
                   </button>
                   <div class="dropdown-content">
                     <a href="#">Für Photovoltaik Kunden</a>
                     <a href="#">Für Installationsfirmen</a>
                   </div>
                  </div>
              <a href="http://greenhomenow.de/" class="fusion-background-highlight"> </a>
              <a href="http://greenhomenow.de/blog/">Photovoltaik verstehen</a>
              <a href="http://greenhomenow.de/about-us/">Über uns</a>
              <a href="http://greenhomenow.de/contact-us/">Kontakt</a>
        </nav>
    </header>
);
}

export default Cabecera;