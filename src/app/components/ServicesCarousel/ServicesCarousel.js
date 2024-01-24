'use client'

import { useEffect, useState } from "react"
import { Row, Col, Carousel, Container } from "react-bootstrap"
import { Airplane, ArrowRight, ChevronLeft, ChevronRight, TaxiFrontFill } from "react-bootstrap-icons"
import Image from "next/image"

import styles from './styles.module.css'

import map from "./../../../../public/assets/svg/map.svg"
import chapadao from "./../../../../public/assets/chapadao.png"

const SERVICES_LIST = [
    <>
        <h1 className={styles.serviceTypeHeader}>Fazemos <span>transfer</span> de diversos aeroportos</h1>
        <Row className="mb-5">
            <Col xs={12} md={{span: 2, offset: 1}} className={"text-center d-flex align-items-center justify-content-center"} >
                <div >
                    <Airplane size={60} color={"#00B0D5"} className={styles.planeIcon}/>
                    <p className={styles.iconLabelText}>Aeroporto</p>
                </div>
            </Col>
            <Col xs={12} md="1" className={"text-center"}>
                <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
            </Col>
            <Col xs={12} md="2" className={"text-center d-flex align-items-center justify-content-center"}>
                <div>
                    <TaxiFrontFill size={60} color={"#00B0D5"}/>
                    <p className={styles.iconLabelText}><span>Central de Taxi Pipa</span></p>
                </div>
            </Col>
            <Col xs={12} md="1" className={"text-center "}>
                <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
            </Col>
            <Col xs={12} md="4" className={"text-center"}>
                <Image
                    src={map}
                    alt="mapa de parte do nordeste com suas respectivas capitais"
                    quality={100}
                    className={styles.mapImage}
                />
                <p className={styles.iconLabelText}>Sua cidade de destino</p>
            </Col>
        </Row>
    </>,
    <>
        <Container className={`${styles.serviceWithBackgroundImage}`}>
            <Image
              alt="chapadão"
              src={chapadao}
              placeholder="blur"
              priority 
              quality={100}
              sizes="100vw"
              layout="fill"
              style={{
                objectFit: 'cover',
              }}
              className={styles.imageFilter}
            />

            <Row><Col xs={{span: '8', offset: '2'}} className={`${styles.serviceWithBackgroundImageHeader} text-center`}><h1 className={`${styles.serviceTypeHeader} ${styles.serviceTypeHeaderWhite}`}>Levamos você para <span>todos</span> os cantos de Pipa</h1></Col></Row>
            <Row ><Col xs={{span: '8', offset: '2'}} className="text-center"><p>Viagens para o <span>centro de Pipa</span>, a <span>Praia do Amor</span>, o <span>Chapadão</span> e arredores.</p></Col></Row>
            <Row className="flex-fill"></Row>
        </Container>
    </>,
]

export default function ServicesCarousel(){
    const SIZE = 3;

    const [index, setIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        console.log(selectedIndex)
        setIndex(selectedIndex);
    }

    return(
        <>
            <Carousel variant="dark" className={styles.myCarousel} interval={null} activeIndex={index} onSelect={handleSelect} indicators={false} touch={true} prevIcon={<ChevronLeft size={50} color={"#00B0D5"}/>} nextIcon={<ChevronRight size={50} color={"#00B0D5"}/>}>
                {SERVICES_LIST.map((item, key) => 
                    <Carousel.Item key={key}>
                        {item}
                    </Carousel.Item>
                )}
            </Carousel>
            <div className={`${styles.carousel_indicators} d-flex justify-content-center`}>
                <div className="d-flex justify-content-between">
                    {SERVICES_LIST.map((item, key) => 
                        <div key={key} className={index === key ? `${styles.circle} ${styles.active}` : styles.circle} onClick={(e) => handleSelect(key, e)}></div>
                    )}
                </div>
            </div>
        </>
    )
}