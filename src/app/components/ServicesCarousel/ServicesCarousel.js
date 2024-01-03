'use client'

import { useState } from "react"
import { Row, Col, Carousel } from "react-bootstrap"
import { Airplane, ArrowRight, TaxiFrontFill } from "react-bootstrap-icons"
import Image from "next/image"

import styles from './styles.module.css'

import map from "./../../../../public/assets/svg/map.svg"

export default function ServicesCarousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex);
    }

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <h2 className={styles.serviceTypeHeader}>Fazemos <span>transfer</span> de diversos aeroportos</h2>
                <Row>
                    <Col xs={12} md={2} className={"text-center d-flex align-items-center justify-content-center"} >
                    <div >
                        <Airplane size={60} color={"#00B0D5"} className={styles.planeIcon}/>
                        <p className={styles.iconLabelText}>Aeroporto</p>
                    </div>
                    </Col>
                    <Col xs={12} md="2" className={"text-center"}>
                    <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
                    </Col>
                    <Col xs={12} md="2" className={"text-center d-flex align-items-center justify-content-center"}>
                    <div>
                        <TaxiFrontFill size={60} color={"#00B0D5"}/>
                        <p className={styles.iconLabelText}><span>Central de Taxi Pipa</span></p>
                    </div>
                    </Col>
                    <Col xs={12} md="2" className={"text-center "}>
                    <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
                    </Col>
                    <Col xs={12} md="4" className={"text-center"}>
                    <Image
                        src={map}
                        alt="logo da Central taxi pipa"
                        quality={100}
                        className={styles.mapImage}
                    />
                    <p className={styles.iconLabelText}>Sua cidade de destino</p>
                    </Col>
                </Row>
                </Carousel.Item>

                <Carousel.Item >
                <h2 className={styles.serviceTypeHeader}>Fazemos <span>transfer</span> de diversos aeroportos</h2>
                <Row>
                    <Col xs={12} md={2} className={"text-center d-flex align-items-center justify-content-center"} >
                    <div >
                        <Airplane size={60} color={"#00B0D5"} className={styles.planeIcon}/>
                        <p className={styles.iconLabelText}>Aeroporto</p>
                    </div>
                    </Col>
                    <Col xs={12} md="2" className={"text-center"}>
                    <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
                    </Col>
                    <Col xs={12} md="2" className={"text-center d-flex align-items-center justify-content-center"}>
                    <div>
                        <TaxiFrontFill size={60} color={"#00B0D5"}/>
                        <p className={styles.iconLabelText}><span>Central de Taxi Pipasdasdasda</span></p>
                    </div>
                    </Col>
                    <Col xs={12} md="2" className={"text-center "}>
                    <ArrowRight size={60} color={"#00B0D5"} className={"h-100"}/>
                    </Col>
                    <Col xs={12} md="4" className={"text-center"}>
                    <Image
                        src={map}
                        alt="logo da Central taxi pipa"
                        quality={100}
                        className={styles.mapImage}
                    />
                    <p className={styles.iconLabelText}>Sua cidade de destino</p>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}