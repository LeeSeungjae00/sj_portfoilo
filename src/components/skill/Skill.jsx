import React from 'react'
import style from './Skill.module.css'
import { Element } from 'react-scroll'
import SkillCard from './SkillCard'
import lang from './lang'
import framework from './framework'
import management from './management'
import qualification from './qualification'

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
                            <SkillCard icon = "🐈" title = "management" data ={management}></SkillCard>
                            <SkillCard icon = "🗒" title = "qualification" data ={qualification}></SkillCard>
                        </div>
                    </div>
                </div>

            </div>
        </Element>
    )
}
