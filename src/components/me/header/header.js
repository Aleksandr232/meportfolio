import React from "react";
import { Link } from "react-router-dom";


const Header=()=>{
    return(
        <section class="promo" id="promo">
        <div class="container">
            <div class="title title_fz16 circle">Меня зовут Александр Мельников</div>
            <h1 class="title title_fz48 promo__title">Я web-разработчик<br/>из города Казани</h1><Link
                to="/meportfolio"><button class="btn">Портфолио</button></Link> <Link to='/about' class="me" href="#wr">Про меня</Link>
        </div>
    </section>
    )
}

export default Header;