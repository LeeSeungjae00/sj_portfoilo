import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Project.module.css'
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll'

export default function Project() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slide",
    };

    return (
        <Element name="project" className="element" >
            <div className={style.project}>
                <div className={style.projectPage}>
                    <div className={style.projectContent}>
                        <div className={style.slideLap}>
                            <div className={style.title}>👨‍💻 PROJECTS</div>
                            <Slider {...settings}>
                                <div>
                                    <ProjectCard
                                        title="Muscle hub"
                                        imgSrc="muscle_hub.gif"
                                        imgAlt="muscle_hub"
                                        AccText={
                                            <>
                                                일,년마다 사용자가 얼마나 운동했는지 기록하고 알 수 있는 웹 사이트 입니다. 운동과 개발은 비슷한 맥락이다라고 느꼈고 github의 잔디밭 채우는 것에 영감을 받아
                                                그것을 운동 볼륨 수에 도입하여 웹을 구상하고 설계하였습니다. <br></br><br></br>
                                                <b>React.js 에서 Redux를 통한 상태관리, redux-thunk등 미들웨어를 사용한 비동기 처리, firebase를 통한 OAuth, real time datebase</b>와 같은 기술을 익혔습니다.
                                            </>
                                        }
                                        mainFuc={<>운동량을 기록하며 자신이 얼마나 운동했고 몇키로 들었는지에 대한 성취감을 느끼게 하는 웹사이트 입니다.</>}
                                        domain="https://muscle-hub.netlify.app/"
                                        github="https://github.com/LeeSeungjae00/muscle_memory"
                                        stack="React.js,React-router , redux, redux-thunk, firebase, post-css, netlify"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="PLAN-B"
                                        imgSrc="plan-b.gif"
                                        imgAlt="plan-b"
                                        AccText={
                                            <>
                                                사용자들이 자신의 신체 정보를 통해서 B형 간염에 걸릴 확률을 알 수 있는 웹 사이트입니다. <br></br><br></br>
                                                <b>React.js 관련 기술 습득, Chart.js를 통한 차트 표출, Axios와 같은 통신 라이브러리를 통한 REST API 사용</b>을 익혔습니다.
                                            </>
                                        }
                                        mainFuc={<>사용자의 신체 정보를 넣어 년수마다 B형간염에 걸릴 년수마다 확률을 측정</>}
                                        domain="https://planbhcc.com/"
                                        github="https://github.com/LeeSeungjae00/plan-b"
                                        stack="React.js, Chart.js, Material UI"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="AI-SCOPE"
                                        imgSrc="ai-scope.gif"
                                        imgAlt="ai-scope"
                                        AccText={
                                            <>
                                                궤양의 종류 3가지중 드래그나 파일 선택을 통해 받아온 이미지를 통하여 궤양의 종류가 무엇 인지 예측 할 수있는 웹 사이트 입니다.<br></br><br></br>
                                                <b>React.js 관련 기술 습득, 이미지 처리에 대한 기술, Axios와 같은 통신 라이브러리를 통한 REST API 사용</b>을 익혔습니다.
                                            </>
                                        }
                                        mainFuc={<>궤양의 종류를 예측 할 수 있는 웹 사이트</>}
                                        domain="https://aiscopeseoul.com/"
                                        github="https://github.com/LeeSeungjae00/ai-scope"
                                        stack="React.js, Material UI"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title="lsj's portfolio"
                                        imgSrc="lsj_portfolio.gif"
                                        imgAlt="lsj portfolio"
                                        AccText={
                                            <>
                                                나 이승재를 소개하는 간단한 웹 사이트<br></br><br></br>
                                                <b>React.js의 웹 제작 방법에 대해 다시한번 복습하며, 반응형 웹에 대한 기술, react-animation, react-slider 과 같은 각종 에니메이션 라이브러리사용 기법, netlify 통한 배포 방식</b> 과 같은 기술을 익힐 수 있었습니다.
                                            </>
                                        }
                                        mainFuc={<>웹 프론트엔드 개발자 이승재를 소개하는 웹 사이트</>}
                                        domain="https://lsjportfolio.netlify.app/"
                                        github="https://github.com/LeeSeungjae00/sj_portfolio"
                                        stack="React.js, css"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title={<><div>B-35K</div><div style={{ fontSize: "1rem", color: 'gray' }}>전 회사 GSI 프로젝트</div></>}
                                        imgSrc="b-35k.png"
                                        imgAlt="b-35k"
                                        AccText={
                                            <>
                                                중계기의 온도, 오프셋 등의 각종 정보를 받아와 표출하고 각종 설정을 통해 중계기를 제어할 수 있는 웹 페이지 입니다.<br></br><br></br>
                                                <b>lazy loading, React-Router, TypeScript를 통한 React 사용법과 같은 좀더 심화적인 React.js 관련 기술, 상태관리 미들웨어 Redux의 동작과 사용법, Axios와 같은 통신 라이브러리를 통한 REST API 사용</b> 과 같은 기술을 익힐 수 있었습니다.
                                            </>
                                        }
                                        mainFuc={<>중계기의 각종 상태 값들을 조회하고 제어할 수 있는 웹 페이지</>}
                                        domain="-"
                                        github="-"
                                        stack="React.js, Redux, Typescript"
                                    ></ProjectCard>
                                </div>
                                <div>
                                    <ProjectCard
                                        title={<><div>IR1</div><div style={{ fontSize: "1rem", color: 'gray' }}>전 회사 GSI 프로젝트</div></>}
                                        imgSrc="ir1.gif"
                                        imgAlt="ir1"
                                        AccText={
                                            <>
                                                중계기의 온도, 오프셋 등의 각종 정보를 받아와 표출하고 각종 설정을 통해 중계기를 제어할 수 있는 웹 페이지 입니다.<br></br><br></br>
                                                기초를 다지게 된 프로젝트 이며 <b>기본적인 javascript, html, css의 사용법과 웹의 구동 방식, jquery를 통한 비동기 통신</b>을 익혔습니다.
                                            </>
                                        }
                                        mainFuc={<>중계기의 각종 상태 값들을 조회하고 제어할 수 있는 웹 페이지</>}
                                        domain="-"
                                        github="-"
                                        stack="javascript, css, html, jquery"
                                    ></ProjectCard>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
