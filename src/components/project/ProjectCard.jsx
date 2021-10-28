import React from 'react'
import style from './Project.module.css'

export default function ProjectCard({title, imgSrc, imgAlt, AccText, mainFuc, domain, github, stack}) {
    return (
        <div className={style.projectSlide}>
            <div className={style.projectCard}>
                <div className={style.projectCardTitle}>
                    {title}
                </div>
                <div className={style.projectCardContent}>
                    <div className={style.projectImgLab}>
                        <img className={style.projectImg} src={imgSrc} alt={imgAlt}/>
                    </div>
                    <div className={style.projectAcc}>
                        <div className={style.projectAccText}>
                            {AccText}
                            
                        </div>
                        <div className={style.projectAccStack}>
                            <div className={style.projectStackBox}>
                                <div><b>➰ 주요 기능</b></div>
                                <div>{mainFuc}</div>
                            </div>
                            <div className={style.projectStackBox}>
                                <div><b>➰ 도메인</b></div>
                                <a href={domain}>{domain}</a>
                            </div>
                            <div className={style.projectStackBox}>
                                <div><b>➰ github</b></div>
                                <a href={github}>{github}</a>
                            </div>
                            <div className={style.projectStackBox}>
                                <div><b>➰ Tech stack</b></div>
                                <div>{stack}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
