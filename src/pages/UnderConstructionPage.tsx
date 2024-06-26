import React from "react";
import {Image} from "react-bootstrap";
import AyodaiLogo from '../images/ayodai.png'

function UnderConstructionPage(){
    return (
        <div className={'container shadow p-3 m-auto bg-white rounded '}>
            <div className={'row justify-content-md-center'}>
                <div className={'col-md-auto p-3 bg-white rounded'}>
                    <Image src={AyodaiLogo} alt={'Ayodai logo'}></Image>
                </div>
            </div>
            <div className={'row p-3 m-auto bg-white'}>
                <div className={'col'}>1 Day</div>
                <div className={'col'}>2 Hours</div>
                <div className={'col'}>3 Minutes</div>
                <div className={'col'}>4 Seconds</div>
            </div>
            <div className={'row justify-content-md-center'}>
                <div className={'col-md-auto p-3 bg-white rounded'}>
                    <label> Under construction</label>
                </div>

            </div>
        </div>

    )
}


export default UnderConstructionPage;