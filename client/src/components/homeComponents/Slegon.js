import {useEffect,useState} from 'react';
import FunfactItem from "./funfactItem";
import axios from 'axios'

import funfactbg from './k.homeimages/fanfact2.png'


function Funfact() {
  



    return (
        <div className="fun-fact-area sm-top parallax" style={{backgroundImage: `url(${funfactbg})`}} >
            <div className="container">
                <div className="row mtn-40">
               
                           
                        <div className="slegon">Tu en as marre d'être piétons ? Rejoins-nous à l'auto école iDrive Gears ! </div>
                      
                    
                </div>
            </div>
        </div>
    );
}

export default Funfact;