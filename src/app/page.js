import { Container, Row, Col } from "react-bootstrap"
import { ChevronDoubleDown } from "react-bootstrap-icons"
import Image from "next/image"

import styles from './page.module.css'

import logo from "./../../public/assets/logo.svg"
import pipa_beach from "./../../public/assets/pipa_beach.png"
import carro from "./../../public/assets/carro.png"

import ServicesCarousel from "./components/ServicesCarousel/ServicesCarousel"

export default function teste(){
  

    return(
        <>
          <section className={styles.wellcomeSection}>
            <Image
              alt="beach"
              src={pipa_beach}
              placeholder="blur"
              priority 
              quality={100}
              sizes="100vw"
              layout="fill"
              style={{
                objectFit: 'cover',
              }}
              className={styles.backgroundImage}
            />

            <Container className={"mt-5 d-flex flex-column justify-content-between flex-wrap " + styles.wellcomeContainer}>
                <Row className={"justify-content-center align-items-end"}>
                  <Col md="4">
                      <Image
                        src={logo}
                        alt="logo da Central taxi pipa"
                        quality={100}
                        className={styles.logo}
                      />
                </Col>
                <Col md={{span: 3, offset: 4}}>
                  <button className={styles.getInTouchButton}>Agendar viagem</button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="12" className="d-flex text-center">
                  <h1 className={styles.headerText}>Realizamos <span>transfers</span> da Praia de Pipa para <span>cidades</span> e <span>aeroportos</span> do <span>nordeste</span></h1>
                </Col>
              </Row>
              <Row>
                <a href="#scroll-down" className={styles.scrollBtn}> <ChevronDoubleDown size={30}/> Conheça nossos serviços </a> 
              </Row>
            </Container>

          </section>

          <section className={styles.servicesSection}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionHeaderText}>Nossos serviços</h2>
            </header>
            <Container className="carousel slide p-0" fluid>
              <ServicesCarousel/>
            </Container>
            
          </section>

          <section >
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionHeaderText}>Nossos veículos</h2>
            </header>
            <Container className={styles.vehiclesContainer}>
              <Row>
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Container fluid className={styles.vehicleCard}>
                    <Row>
                      <Image
                        alt="carro"
                        src={carro}
                        priority 
                        quality={100}
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                        className={styles.vehicleImage}
                      />
                    </Row>
                    <Row className={styles.vehicleInfo}>
                      <h5><strong>Nome do Carro</strong></h5>
                      <p>Utilizado para viagens <em>locais</em> e para <em>transfers</em></p>
                      <div>asdasd Passageiros</div>
                    </Row>
                  </Container>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Container fluid className={styles.vehicleCard}>
                    <Row>
                      <Image
                        alt="carro"
                        src={carro}
                        priority 
                        quality={100}
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                        className={styles.vehicleImage}
                      />
                    </Row>
                    <Row className={styles.vehicleInfo}>
                      <h5><strong>Nome do Carro</strong></h5>
                      <p>Utilizado para viagens <em>locais</em> e para <em>transfers</em></p>
                      <div>asdasd Passageiros</div>
                    </Row>
                  </Container>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Container fluid className={styles.vehicleCard}>
                    <Row>
                      <Image
                        alt="carro"
                        src={carro}
                        priority 
                        quality={100}
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                        className={styles.vehicleImage}
                      />
                    </Row>
                    <Row className={styles.vehicleInfo}>
                      <h5><strong>Nome do Carro</strong></h5>
                      <p>Utilizado para viagens <em>locais</em> e para <em>transfers</em></p>
                      <div>asdasd Passageiros</div>
                    </Row>
                  </Container>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Container fluid className={styles.vehicleCard}>
                    <Row>
                      <Image
                        alt="carro"
                        src={carro}
                        priority 
                        quality={100}
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                        className={styles.vehicleImage}
                      />
                    </Row>
                    <Row className={styles.vehicleInfo}>
                      <h5><strong>Nome do Carro</strong></h5>
                      <p>Utilizado para viagens <em>locais</em> e para <em>transfers</em></p>
                      <div>asdasd Passageiros</div>
                    </Row>
                  </Container>
                </Col>
                <Col xs={12} sm={6} md={4} xl={3}>
                  <Container fluid className={styles.vehicleCard}>
                    <Row>
                      <Image
                        alt="carro"
                        src={carro}
                        priority 
                        quality={100}
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                        className={styles.vehicleImage}
                      />
                    </Row>
                    <Row className={styles.vehicleInfo}>
                      <h5><strong>Nome do Carro</strong></h5>
                      <p>Utilizado para viagens <em>locais</em> e para <em>transfers</em></p>
                      <div>asdasd Passageiros</div>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>

            
          </section>

        </>
    )
}