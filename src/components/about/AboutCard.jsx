import React from 'react'
import style from './AboutCard.module.css'

export default function AboutCard({emoji, name, content}) {
    return (
        <div className={style.aboutCard}>
            <div className={style.cardEmoji}>{emoji}</div>
            <div>
                <b className={style.cardName}>{name}</b>
                <div className={style.cardContent}>{content}</div>
            </div>
        </div>
    )
}
