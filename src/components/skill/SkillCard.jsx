import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import data from './lang'
import styles from './SkillCard.module.css'


export default function SkillCard({title, icon}) {
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { size, titleDirection, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: '30%' },
        to: {
            size: open ? '100%' : '30%',
            titleDirection: open ? 'row' : 'column'
        },
    })

    const transApi = useSpringRef()

    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })
    const transTitleApi = useSpringRef()
    const transitionTitle = useTransition(!open ? 1 : [], {
        ref: transTitleApi,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 1, scale: 1 },
    })

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [transTitleApi, springApi, transApi] : [transApi, springApi, transTitleApi], [
        0,
        open ? 0.1 : 1,
    ])
    return (
        <>
            <animated.div
                style={{ ...rest, width: size, height: size }}
                className={styles.box}
                onClick={() => set(open => !open)}>
                {transitionTitle((style) => (
                    <animated.div
                        style={{ ...style }}
                        className={styles.boxTitle}>
                        <p className={styles.boxIcon}>{icon}</p>
                        <p className={styles.boxText}>{title}</p>
                    </animated.div>))}

                {transition((style, item) => (
                    <animated.div
                        className={styles.skill}
                        style={{ ...style, background: item.css}}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        
                        {item.name}
                        
                    </animated.div>
                ))}
                
            </animated.div>
        </>
    )
}
