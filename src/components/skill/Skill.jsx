import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import style from './Skill.module.css'
import { Element } from 'react-scroll'
import data from './lang'
import SkillCard from './SkillCard'

export default function Skill() {
    
    return (
        <Element name="skill" className="element" >
            <div className={style.skill}>
                <div className={style.skillPage}>
                    <div className={style.skillContent}>
                        <div className={style.skillTitle}>📚MY SKILL</div>
                        <hr />
                        <div className={style.skillImgSet}>
                            {/* <div className={style.imgLap}><img src="html_css_js.png" alt="html,js,css" className={style.skillImg} /></div>
                            <div className={style.imgLap}><img src="react.png" alt="react" className={style.skillImg} /></div>
                            <div className={style.imgLap}><img src="redux.png" alt="redux" className={style.skillImg} /></div>
                            <div className={style.imgLap}><img src="typescript.png" alt="typescript" className={style.skillImg} /></div>
                            <div className={style.imgLap}><img src="git.png" alt="git" className={style.skillImg} /></div>
                            <div className={style.imgLap}><img src="jquery.png" alt="jquery" className={style.skillImg} /></div> */}
                            <SkillCard icon = "📒" title = "Language"></SkillCard>
                            <SkillCard icon = "⚙️" title = "Framework"></SkillCard>
                            <SkillCard icon = "🐈" title = "management"></SkillCard>
                            <SkillCard icon = "🗒" title = "qualification"></SkillCard>
                        </div>
                    </div>
                </div>

            </div>
        </Element>
    )
}
