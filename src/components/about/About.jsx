import React from 'react'
import style from './About.module.css'
import AboutCard from './AboutCard'
import {Element} from 'react-scroll'

export default function About() {
    return (
        <Element name="about" className="element" >
            <div className={style.about}>
                <div className={style.aboutPage}>
                    <div className={style.aboutTitle}>
                        <div>ABOUT</div>
                        <div>ME</div>
                    </div>
                    <div className={style.aboutContent}>
                        <AboutCard emoji="👨‍💻" name="이름" content="이승재"></AboutCard>
                        <AboutCard emoji="📅" name="생년월일" content="2000/04/29"></AboutCard>
                        <AboutCard emoji="🗺" name="주소지" content="인천광역시 부평구"></AboutCard>
                        <AboutCard emoji="📞" name="연락처" content="010-9142-8662"></AboutCard>
                        <AboutCard emoji="📧" name="이메일" content="seungjae2668@naver.com"></AboutCard>
                        <AboutCard emoji="🎓" name="학력" content={
                            <>
                                <div>한국산업기술대학교 재학</div>
                                <div>인천전자마이스터고등학교 졸업</div>
                            </>
                        }></AboutCard>
                    </div>
                </div>
            </div>
        </Element>

    )
}
