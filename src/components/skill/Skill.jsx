import React from 'react'
import style from './Skill.module.css'
import { Element } from 'react-scroll'
import SkillCard from './SkillCard'
import lang from './data/lang'
import framework from './data/framework'
import management from './data/management'
import qualification from './data/qualification'

export default function Skill() {
    
    return (
        <Element name="skill" className="element" >
            <div className={style.skill}>
                <div className={style.skillPage}>
                    <div className={style.skillContent}>
                        <div className={style.skillTitle}>📚MY SKILL</div>
                        <hr />
                        <div className={style.skillImgSet}>
                            <SkillCard icon = "📒" title = "Language" data ={lang}></SkillCard>
                            <SkillCard icon = "⚙️" title = "Framework" data ={framework}></SkillCard>
                            <SkillCard icon = "🐈" title = "Management" data ={management}></SkillCard>
                            <SkillCard icon = "🗒" title = "Qualification" data ={qualification}></SkillCard>
                        </div>
                    </div>
                </div>

            </div>
        </Element>
    )
}
