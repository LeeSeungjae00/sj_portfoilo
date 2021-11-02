import React from 'react'
import style from './Skill.module.css'
import {Element} from 'react-scroll'

export default function Skill() {
    return (
        <Element name="skill" className="element" >
        <div className={style.skill}>
            <div className={style.skillPage}>
                <div className={style.skillContent}>
                    <div className={style.skillTitle}>📚MY SKILL</div>
                    <hr />
                    <div className={style.skillImgSet}>
                        <div className = {style.imgLap}><img src="html_css_js.png" alt="html,js,css" className = {style.skillImg}/></div>
                        <div className = {style.imgLap}><img src="react.png" alt="react" className = {style.skillImg}/></div>
                        <div className = {style.imgLap}><img src="redux.png" alt="redux" className = {style.skillImg}/></div>
                        <div className = {style.imgLap}><img src="typescript.png" alt="typescript" className = {style.skillImg}/></div>
                        <div className = {style.imgLap}><img src="git.png" alt="git" className = {style.skillImg}/></div>
                        <div className = {style.imgLap}><img src="jquery.png" alt="jquery" className = {style.skillImg}/></div>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
}
