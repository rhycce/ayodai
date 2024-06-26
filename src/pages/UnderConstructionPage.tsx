import React from "react";
import {Image} from "react-bootstrap";
import AyodaiLogo from '../images/ayodai.png'

function UnderConstructionPage(){
    return (
        <div className={'container shadow p-3 m-auto bg-white rounded '}>
            <div className={'row-cols-3'}>
                <div className={'p-3 p-3 m-auto bg-white rounded'}>
                    <Image src={AyodaiLogo}></Image>
                </div>
                <div className={'TimerWrapper'}></div>
            </div>
            <div className={'row-cols-1'}>
                <label> Under construction</label>
            </div>
            <div className={'row-cols-1'}>
                <label> Under construction</label>
            </div>
        </div>
    )
}


export default UnderConstructionPage;