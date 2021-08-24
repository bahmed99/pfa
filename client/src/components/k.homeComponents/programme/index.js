import React, { useState } from 'react'
import { Col} from 'react-bootstrap'
import TimelineWrap from '../Timeline'
import Timeline from '../Timeline/TimelineItem'
import SectionTitle from '../SectionTitle'
import { Reveal,Fade } from 'react-reveal';

export default function Programme() {
    const [visible, setVisible] = useState();
    React.useEffect(() => {
        if(window.screen.width<600){
            setVisible(true)
        }
        else{
            setVisible(false)
        } 
        window.onresize = function(){
            if(window.screen.width<600){
                setVisible(true)
            }
            else{
                setVisible(false)
            } 
        }
        

      });
    return (
        <>
            <div className="member-details-bottom" style={{paddingTop:'3%',paddingBottom:'7%'}} id='programme'>
                
                    <div className="col-xl-6 m-auto text-center" >
                        <div className="member-education mem-achieve-item">
                        <Fade big>
                            <h1 className="title">Programme </h1>
                        </Fade>
                    </div>
                
                    <div className="col-12" style={{overflowX: visible? 'auto':'visible',paddingTop:'35px' , marginTop:"200px"}}>
                        <div className="education-content-wrap mt-60 test" style={{display:"flex",alignItems: 'center',justifyContent: !visible?'center':''}}>
                            <Col xs='8'sm="4"xl="8" lg="4"  >
                            <Reveal left>
                            <TimelineWrap icon={'food-stand.png'} title={'Code'} >
                            
                            <Timeline
                                degree={'educationItem.degree'}
                                institute={'Inscrivez-vous par le chatbot'}
                                duration={'Etape 01'}
                            />
                            <Timeline
                                degree={'educationItem.degree'}
                                institute={'Apprenez le code avec iDrive Gears'}
                                duration={'Etape 02'}
                            />
                             <Timeline
                                degree={'educationItem.degree'}
                                institute={'Passez votre examen du code'}
                                duration={'Etape 03'}
                            />
                           
                           
                        </TimelineWrap>
                            </Reveal>
                            </Col>
                            
                            <Col xs='8'sm="4"xl="8" lg="4">
                            <Reveal right>
                            <TimelineWrap icon={'workshop.png'} style={{display:window.screen.width<440? "none":""}} title={'Conduite'}>
                                
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Apprenez la conduite'}
                                    duration={'Etape 04'}
                                />
                                <Timeline
                                    degree={'educationItem.degree'}
                                    institute={'Apprenez les créneaux'}
                                    duration={'Etape 05'}
                                />
                                <Timeline
                                degree={'educationItem.degree'}
                                institute={'Passez votre examen de conduite'}
                                duration={'Etape 06'}
                                />
                            </TimelineWrap>
                            </Reveal>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}