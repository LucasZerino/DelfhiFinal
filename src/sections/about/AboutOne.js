import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import RevealContent from '../../components/reveal-content/index'
import Unimed from './imgs/unimed.png'
import Amil from './imgs/amil.png'
import Bradesco from './imgs/bradesco.png'
import Delfhi from './imgs/delfhi.png'
import Hapvida from './imgs/hapvida.png'
import Humana from './imgs/humana.png'
import Sulamerica from './imgs/sulamerica.png'
import ReactDOM from 'react-dom'
import Carousel from 'react-elastic-carousel'
import Item from './item'

class AboutOne extends React.Component {

    shouldComponentUpdate() {
      return false
    }
    
      render() {
          const Section = styled.section`
              position: relative;
              overflow: hidden;
              background-color: #FFF;
              .particles {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
  
          `
  
          const AboutContainer = styled(Container)`
              padding: 250px 0 100px 0;
              .cardContainer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                max-width: 1200px;
                flex-wrap: wrap;
            }
            .cardContainer .card{
                position: relative;
                min-width: 320px;
                height: 440px;
                box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5),
                            inset 5px 5px 5px rgba(0,0,0,0.05),
                            inset -5px -5px 5px rgba(255,255,255,0.5);
                border-radius: 15px;
                margin: 30px;
            }
            
            .cardContainer .card .box{
                position: absolute;
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: #fff;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s;
            }
            
            
            .cardContainer .card:hover .box {
                transform: translateY(-50px);
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                background: linear-gradient(45deg, #fff,#e85a0c );
            }
            
            .cardContainer .card .box .content{
                padding: 20px;
                text-align: center;
            }
            
            .cardContainer .card .box .content h2{
                position: absolute;
                font-family: 'Teko';
                font-weight: 500;
                top: -10px;
                right: 30px;
                font-size: 4em;
                color: rgba(232, 89, 12, 0.021);
                transition: 0.5s;
                pointer-events: none;
            }
            .cardContainer .card:hover .box .content h2{
                color: rgba(255, 255, 255, 0.082);
            }
            
            .cardContainer .card .box .content h3{
                font-family: 'Teko';
                font-size: 2.4em;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card:hover .box .content h3{
                color: #fff;
            }
            
            .cardContainer .card .box .content p{
                font-family: 'Teko';
                font-size: 3em;
                font-weight: 300;
                color: #777;
                z-index: 1;
                transition: 0.5s;
            }
            
            .cardContainer .card .box .content a{
                position: relative;
                display: inline-block;
                padding: 8px 20px;
                background: #fff;
                margin-top: 15px;
                border-radius: 20px;
                color: #e85a0c;
                text-decoration: none;
                font-weight: 400;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                transition: 2s;
            }

            .cardContainer .card:hover .box .content a{
                color: #fff;
                background: #e85a0c;
            }
            
              @media (max-width: 800px){
                .cardContainer{
                    display: flex;
                    position: relative;
                    margin-top: 100px;
                    width: 100%;
                    justify-content: center;
                }   
                .card{
                    position: relative;
                }
                .content{
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
          `
          const Heading = styled.h1`
              font-size: 40px;
              font-family: Teko;
              color: black;
              text-transform: uppercase;
              @media (max-width:1399px) {
                  font-size: 70px;
                  line-height: 70px;
              }
              @media (max-width:900px) {
                  font-size: 37px;
                  line-height: 30px;
                  text-align: center;
              }
          `
          const Color = styled.span`
              color: #e85a0c;
              font-size: 50px;
              font-family: Teko;
              text-transform: uppercase;
              letter-spacing: 2px;
              @media (max-width:1399px) {
                  font-size: 80px;
                  line-height: 80px;
              }
              @media (max-width:900px) {
                  font-size: 40px;
                  line-height: 40px;
              }
          `
  
          const LeftCol = styled(Col)`
              display: flex;
              align-items: center;
              .cardContainer{
                  position: relative;
                  top: 50%;
              }
          `

          const BottomContent = styled.div`
          position: relative;
          display: flex;
          width: 100%;
          justify-content: center;
          top: -200px;
          z-index: 2;
      `
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];


  
          return(
       
              <Section id="PLANOS">
              <div className='particles'>  </div>
                  <AboutContainer>
                      <Row>
                          <LeftCol md={12}>
                          <BottomContent>
                          <Carousel breakPoints={breakPoints}>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">DelfhiOdonto</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                            Nosso plano odontol??gico te oferece o que h?? de mais tecnol??gico e inovador em tratamento dent??rio!

                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Delfhi} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Humana</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                A vida ?? feita de escolhas: A melhor ?? ter sa??de!
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Humana} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Hapvida</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                            Cuidamos da sa??de de toda sua fam??lia! 
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Hapvida} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Unimed</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                            Com hospitais e laborat??rios pr??prios, entregamos o melhor pra voc??! 
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Unimed} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Bradesco</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Planos completos para sua fam??lia ou para sua empresa! 
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Bradesco} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Sulam??rica</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Planos sob medida pra cuidar da sua Sa??de integral! 
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Sulamerica} alt='Logo'/>
                                    </div> 
                                    </Item>
                                    <Item>
                                    <div className="card">
                                        <div className="info">
                                            <div className="name">Amil</div>
                                            <div className="divider"></div>
                                            <div className="bio">
                                                Cuidando do seu bem mais precioso, sua Sa??de! 
                                            </div>
                                            <a href='#SIMULAR' className="button">SIMULAR</a>
                                        </div>
                                        <img className='photo' src={Amil} alt='Logo'/>
                                    </div> 
                                    </Item>
                
                                </Carousel>      
                    </BottomContent>
                          </LeftCol>
                          <LeftCol md={6}>
                              <RevealContent>
                                  <Heading>
                                      Desde 2001 <Color>Ajudamos pessoas </Color> 
                                       que buscam mais qualidade de vida com 
                                      <Color> o pre??o que cabe no bolso.</Color>
                                  </Heading>
                              </RevealContent>
                          </LeftCol>
                          <Col md={6}>
                              <Row>
                              <RevealContent>
                                
                                <div class="cardContainer">
                                    <div class="card">
                                        <div class="box">
                                            <div class="content">
                                                <h2>DELFHI</h2>
                                                <h3>PLANOS COMPLETOS A PARTIR DE</h3>
                                                <p>
                                                    R$139,90
                                                </p>
                                                <a href="#SIMULAR">SIMULAR AGORA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </RevealContent>
                              </Row>
                          </Col>
                      </Row>
                  </AboutContainer>
              </Section>
          )
      }
  
  }

  export default AboutOne