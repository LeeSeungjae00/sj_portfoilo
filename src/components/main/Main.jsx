import React, { useState } from 'react'
import style from './Main.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';
import { useSpring, animated } from 'react-spring'
import { Element } from 'react-scroll'


const iconOption = { color: 'white', fontSize: "2rem", paddingBottom: "1rem" };

const springOption = {
    to: { opacity: 1 },
    from: { opacity: 0 },
}

export default function Main() {
    const props1 = useSpring({
        ...springOption,
        delay: 600,
    })
    const props2 = useSpring({
        ...springOption,
        delay: 1300,
    })
    const props3 = useSpring({
        ...springOption,
        delay: 2000,
    })

    return (
        <Element name="main" className="element" >
            <div className={style.mainPage}>
                <div className={style.mainContent}>
                    <div className={style.contect}>
                        <div className={style.phone}>TEL. 010 9142 8662</div>
                        <div style={{ borderLeft: "1px solid white", height: "18vh", marginBottom: "7vh" }}></div>
                        <div className={style.icons}>
                            <a style={{ textAlign: 'start' }} href="https://www.instagram.com/seung__00_/">
                                <InstagramIcon sx={iconOption}></InstagramIcon>
                            </a>
                            <a style={{ textAlign: 'start' }} href="https://www.facebook.com/profile.php?id=100007292509132">
                                <Facebook sx={iconOption}></Facebook>
                            </a>
                            <a style={{ textAlign: 'start' }} href="https://github.com/LeeSeungjae00">
                                <GitHub sx={iconOption}></GitHub>
                            </a>
                            <div className={style.reserved}>© 2021.<br /> Lee Seung Jae.<br /> All rights reserved.</div>
                        </div>
                    </div>
                    <div className={style.introduce}>
                        <animated.div style={props1}><div className={style.hello}>🙇‍♂️ 안녕하세요.</div></animated.div>
                        <animated.div style={props2}><div className={style.hello}>💻 웹 개발자</div></animated.div>
                        <animated.div style={props3}><div className={style.hello}><b>이승재</b> 입니다.</div></animated.div>
                        <hr></hr>
                        <div className={style.subText}>새로운 기술을 도입하는 것을 좋아하며</div>
                        <div className={style.subText}>성장에 목마른 웹 프론트 앤드 개발자 입니다.</div>
                    </div>
                    <div style = {{width : "45%"}}>
                        <img className={style.myPicture} src="IMG_0117.JPG" alt="my_picture" />
                    </div>
                    
                </div>

            </div>
        </Element>
    )
}
