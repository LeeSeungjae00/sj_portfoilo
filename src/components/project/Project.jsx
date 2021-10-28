import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Project.module.css'
import Slider from "react-slick";
import ProjectCard from './ProjectCard';

export default function Project() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={style.project}>
            <div className={style.projectPage}>
                <div className={style.projectContent}>
                    <div style={{ width: "100%" }}>
                        <div>PROJECTS</div>
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
                                    mainFuc={<>사용자의 신채 정보를 넣어 년수마다 B형간염에 걸릴 년수마다 확률을 측정</>}
                                    domain="https://planbhcc.com/"
                                    github="https://github.com/LeeSeungjae00"
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
                                    github="https://github.com/LeeSeungjae00"
                                    stack="React.js, Material UI"
                                ></ProjectCard>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
