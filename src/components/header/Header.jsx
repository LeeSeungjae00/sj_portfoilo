import React , {useState, useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import style from './Header.module.css'


export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(window.screenX)
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header className = {scrollPosition < 100 ? style.header : style.changeHeader}>
            <div className ={scrollPosition < 100 ? style.headerContent : style.changeHeaderContent}>
                <div className = {style.menuButton}>
                    <MenuIcon sx={{ color: 'rgb(155,155,152)', fontSize : "3rem"}} ></MenuIcon>
                </div>
                <h2 className = {style.headerTitle}>SJ's Portfolio</h2>
                <div></div>
            </div>
        </header>
    )
}
