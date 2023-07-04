import React from "react";
import bar from './bar.css'
import 'bulma/css/bulma.min.css'

const NavBar =()=> {
    return (
        <header>
            <nav>
            <label class="logo">La Luna</label>
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Menu</a></li>
                <li><a href="/#">Ubicacion</a></li>                
            </ul>
            <button class="navButton">Ordene Aqui</button>
            </nav>
        </header>

    );
}

  

export default NavBar;