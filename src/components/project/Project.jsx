import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Project.module.css'
import Slider from "react-slick";
import ProjectCard from './ProjectCard';
import {Element} from 'react-scroll'

export default function Project() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className : "slide",
    };

    return (
        <Element name="project" className="element" >
            <div className={style.project}>
                <div className={style.projectPage}>
                    <div className={style.projectContent}>
                        <div className ={style.slideLap}>
                            <div className={style.title}>👨‍💻 PROJECTS</div>
                            <Slider {...settings}>
                                <div>
                                    <ProjectCard
                                        title="PLAN-B"
                                        imgSrc="plan-b.gif"
                                        imgAlt="plan-b"
                                        AccText={
                                            <>
                                                사용자들이 자신의 신체 정보를 통해서 B형 간염에 걸릴 확률을 알 수 있는 웹 사이트입니다. <br></br>
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
                                                궤양의 종류 3가지중 드래그나 파일 선택을 통해 받아온 이미지를 통하여 궤양의 종류가 무엇 인지 예측 할 수있는 웹 사이트 입니다.<br></br>
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
                                        title={<><div>B-35K</div><div style={{ fontSize: "1rem", color: 'gray' }}>전 회사 GSI 프로젝트</div></>}
                                        imgSrc="b-35k.png"
                                        imgAlt="b-35k"
                                        AccText={
                                            <>
                                                중계기의 온도, 오프셋 등의 각종 정보를 받아와 표출하고 각종 설정을 통해 중계기를 제어할 수 있는 웹 페이지 입니다.<br></br>
                                                <b>lazy loading, React-Router, TypeScript를 통한 React 사용법과 같은 좀더 심화적인 React.js 관련 기술, 상태관리 미들웨어 Redux의 동작과 사용법, Axios와 같은 통신 라이브러리를 통한 REST API 사용</b> 과 같은 가술을 익힐 수 있었습니다.
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
                                                중계기의 온도, 오프셋 등의 각종 정보를 받아와 표출하고 각종 설정을 통해 중계기를 제어할 수 있는 웹 페이지 입니다.<br></br>
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
