import React from 'react'
import style from './Skill.module.css'

export default function Skill() {
    return (
        <div className={style.skill}>
            <div className={style.skillPage}>
                <div className={style.skillContent}>
                    <div className={style.skillTitle}>📚MY SKILL</div>
                    <hr />
                    <div className={style.skillImgSet}>
                        <img src="html_css_js.png" alt="html,js,css" className = {style.skillImg}/>
                        <img src="react.png" alt="react" className = {style.skillImg}/>
                        <img src="redux.png" alt="redux" className = {style.skillImg}/>
                        <img src="typescript.png" alt="typescript" className = {style.skillImg}/>
                        <img src="git.png" alt="git" className = {style.skillImg}/>
                        <img src="jquery.png" alt="jquery" className = {style.skillImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
