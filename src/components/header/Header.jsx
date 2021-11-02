import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from './Header.module.css'
import { Link} from 'react-scroll'


export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(window.screenX)
    const [menuHover, setMenuHover] = useState(false);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header className={scrollPosition < 100 ? style.header : style.changeHeader}>
            <div className={scrollPosition < 100 ? style.headerContent : style.changeHeaderContent}>
                <div className={style.menuButton} 
                onMouseOver={() => {if(!menuHover) setMenuHover(true);}} 
                onMouseLeave={() => {if(menuHover) setMenuHover(false);}}
                >
                    {!menuHover ? 
                    <MenuIcon sx={{ color: 'rgb(155,155,152)', fontSize: "3rem" }} ></MenuIcon> : 
                    <ArrowForwardIcon sx={{ color: 'rgb(155,155,152)', fontSize: "3rem" }} ></ArrowForwardIcon>}
                    {menuHover && <>
                        <Link activeClass="active" className="main" to="main" spy={true} smooth={true} duration={500} >
                        <div className = {style.menu}>🏠 HOME</div>
                        </Link>
                        <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >
                        <div className = {style.menu}>👨 ABOUT ME</div>
                        </Link>
                        <Link activeClass="active" className="skill" to="skill" spy={true} smooth={true} duration={500} >
                        <div className = {style.menu}>📚 SKILL</div>
                        </Link>
                        <Link activeClass="active" className="project" to="project" spy={true} smooth={true} duration={500} >
                        <div className = {style.menu}>👨‍💻 PROJECTS</div>
                        </Link>
                    </>}

                </div>
                <h2 className={style.headerTitle}>SJ's Portfolio</h2>
                <div></div>
            </div>
        </header>
    )
}
