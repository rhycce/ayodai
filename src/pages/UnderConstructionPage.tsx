import React, {useState} from "react";
import {Image} from "react-bootstrap";
import AyodaiLogo from '../images/ayodai.png'
import {getTimeRemaining} from "./UnderConstructionPageUtil";

function UnderConstructionPage(){
    const [timeDiffObject, setTimeDiffObject] = useState(getTimeRemaining())
    setInterval(() => {
        setTimeDiffObject(getTimeRemaining())
    }, 1000)
    return (
        <div className={'container shadow p-3 m-auto bg-white rounded '}>
            <div className={'row justify-content-md-center'}>
                <div className={'col-md-auto p-3 bg-white rounded'}>
                    <Image src={AyodaiLogo} alt={'Ayodai logo'}></Image>
                </div>
            </div>
            <div className={'row p-3 m-auto bg-white'}>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'daysPlaceholder'} className={'rounded row justify-content-md-center'}>{timeDiffObject.days}</div>
                        <div className={'rounded row justify-content-md-center h4'}>Days</div>
                    </div>
                </div>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'hoursPlaceholder'} className={'rounded row justify-content-md-center'}>{timeDiffObject.hours}</div>
                        <div className={'rounded row justify-content-md-center h4'}>Hours</div>
                    </div>
                </div>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'minutesPlaceholder'} className={'rounded row justify-content-md-center'}>{timeDiffObject.minutes}</div>
                        <div className={'rounded row justify-content-md-center h4'}>Minutes</div>
                    </div>
                </div>
                <div className={'col justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'secondsPlaceholder'} className={'rounded row justify-content-md-center '}>{timeDiffObject.seconds}</div>
                        <div className={'rounded row justify-content-md-center h4'}>Seconds</div>
                    </div>
                </div>
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