import React, {useState} from "react"
import {Image} from "react-bootstrap"
import AyodaiLogo from '../images/ayodai.png'
import GithubLogo from '../images/github..png'
import {getTimeRemaining} from "./UnderConstructionPageUtil"
const PLACEHOLDER_FORMATTING = 'rounded row justify-content-md-center h1'
const PLACEHOLDER_LABEL_FORMATTING = 'rounded row justify-content-md-center h4'

function UnderConstructionPage(){
    const [timeDiffObject, setTimeDiffObject] = useState(getTimeRemaining())
    setInterval(() => {
        setTimeDiffObject(getTimeRemaining())
    }, 1000)
    return (
        <div className={'container shadow p-3 m-auto bg-white rounded '}>
            <div className={'row justify-content-md-center h-40'}>
                <div className={'col-md-auto bg-white rounded'}>
                    <Image src={AyodaiLogo} alt={'Ayodai logo'}></Image>
                </div>
            </div>
            <div className={'row p-3 m-auto bg-white'}>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'daysPlaceholder'} className={PLACEHOLDER_FORMATTING}>{timeDiffObject.days}</div>
                        <div className={PLACEHOLDER_LABEL_FORMATTING}>Days</div>
                    </div>
                </div>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'hoursPlaceholder'} className={PLACEHOLDER_FORMATTING}>{timeDiffObject.hours}</div>
                        <div className={PLACEHOLDER_LABEL_FORMATTING}>Hours</div>
                    </div>
                </div>
                <div className={'col border-end justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'minutesPlaceholder'} className={PLACEHOLDER_FORMATTING}>{timeDiffObject.minutes}</div>
                        <div className={PLACEHOLDER_LABEL_FORMATTING}>Minutes</div>
                    </div>
                </div>
                <div className={'col justify-content-md-center'}>
                    <div className={'container'}>
                        <div id={'secondsPlaceholder'} className={PLACEHOLDER_FORMATTING}>{timeDiffObject.seconds}</div>
                        <div className={PLACEHOLDER_LABEL_FORMATTING}>Seconds</div>
                    </div>
                </div>
            </div>
            <div className={'row justify-content-md-center'}>
                <div className={'container p-3 bg-white rounded'}>
                    <div className={'row'}>
                        <span className={'text-center text-dark-emphasis'}>A NEW START IS COMING!</span>
                    </div>
                    <div className={'row p-3'}>
                        <span className={'text-lg-center'}>Our website is under construction but the little chu-chu trains are hard at work. We are preparing something amazing and exciting as we explore the world of <b>Node + React + Github</b> web hosting pipeline.</span>
                    </div>
                    <div className={'row d-inline-block p-3'}>
                        <div className={'text-center text-light-emphasis '}>Follow our progress here! <a
                            href={'https://github.com/rhycce/ayodai'}>
                            <Image id={'ImgIcon'} src={GithubLogo} alt={'Github Repo'} roundedCircle/>
                        </a></div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default UnderConstructionPage