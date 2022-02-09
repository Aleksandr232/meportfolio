import React from 'react';


const Sidepanel=()=>{
    return(
        <aside className="sidepanel"><a href="" className="sidepanel__link"><img src="/icons/social/facebook.svg"/>
                </a><a href="https://www.instagram.com/melnikrowing1999/?hl=ru"
                className="sidepanel__link"><img src="/icons/social/instagram.svg"/> </a><a
            href="https://github.com/Aleksandr232" class="sidepanel__link"><img src="/icons/social/github.svg"/>
                </a>
            <div className="sidepanel__divaider"></div>
            <div className="sidepanel__social"><span>социальные сети</span></div>
            </aside>
    )
}

export default Sidepanel;