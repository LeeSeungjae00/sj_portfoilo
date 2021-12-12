import React, { useState, useEffect } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from './Header.module.css'
import { Link } from 'react-scroll'


export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(window.screenX)
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        to: {
            size: open ? '50vw' : '3vw',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? 1 : [], {
        ref: transApi,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })

    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.6 : 0.1,
    ])

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header className={scrollPosition < 100 ? style.header : style.changeHeader}>
            <div className={scrollPosition < 100 ? style.headerContent : style.changeHeaderContent}>
                <animated.div
                    style={{ ...rest, width: size }}
                    className={style.menuButton}
                    onMouseOver={() => { if (!open) set(true); }}
                    onMouseLeave={() => { if (open) set(false); }}
                >
                    {!open ?
                        <MenuIcon sx={{ color: 'rgb(155,155,152)', fontSize: "3rem" }} ></MenuIcon> :
                        <ArrowForwardIcon sx={{ color: 'rgb(155,155,152)', fontSize: "3rem" }} ></ArrowForwardIcon>}
                    {transition((style) => (
                        <animated.div
                            style={{ ...style, display: 'flex', width: '100%', justifyContent: 'space-around' }}
                        >

                            <Link activeClass="active" className="main" to="main" spy={true} smooth={true} duration={500} >
                                <div className={style.menu}>🏠 HOME</div>
                            </Link>
                            <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500} >
                                <div className={style.menu}>👨 ABOUT ME</div>
                            </Link>
                            <Link activeClass="active" className="skill" to="skill" spy={true} smooth={true} duration={500} >
                                <div className={style.menu}>📚 SKILL</div>
                            </Link>
                            <Link activeClass="active" className="project" to="project" spy={true} smooth={true} duration={500} >
                                <div className={style.menu}>👨‍💻 PROJECTS</div>
                            </Link>
                        </animated.div>
                    ))}
                </animated.div>
                <h2 className={style.headerTitle}>SJ's Portfolio</h2>
                <div></div>
            </div>
        </header>
    )
}
