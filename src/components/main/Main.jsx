import React from 'react'
import style from './Main.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import GitHub from '@mui/icons-material/GitHub';


const iconOption = { color: 'white', fontSize: "2rem", paddingBottom: "1rem" };

export default function Main() {
    

    return (
        <div className={style.mainPage}>
            <div className={style.mainContent}>
                <div className={style.contect}>
                    <div className={style.phone}>TEL. 010 9142 8662</div>
                    <div style={{ borderLeft: "1px solid white", height: "18vh", marginBottom: "7vh" }}></div>
                    <div className={style.icons}>
                        <InstagramIcon sx={iconOption}></InstagramIcon>
                        <Facebook sx={iconOption}></Facebook>
                        <GitHub sx={iconOption}></GitHub>
                    </div>
                </div>
                <div className={style.introduce}>
                    <div className={style.hello}>🙇‍♂️ 안녕하세요.</div>
                    <div className={style.hello}>💻 웹 개발자</div>
                    <div className={style.hello}><b>이승재</b> 입니다.</div>
                    <hr></hr>
                    <div className={style.subText}>새로운 기술을 도입하는 것을 좋아하며</div>
                    <div className={style.subText}>성장에 목마른 웹 프론트 앤드 개발자 입니다.</div>
                </div>
                <div >
                    <img className={style.myPicture} src="IMG_0117.JPG" alt="my_picture" />
                </div>
                <div className={style.reserved}>© 2021.<br/> Lee Seung Jae.<br/> All rights reserved.</div>
            </div>
            
        </div>
    )
}
