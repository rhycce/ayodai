import React from "react";

export function PageBanner({text, subText}: Readonly<{
    text: string,
    subText: string|undefined
}>){
    return (<div className={'text-center m-5'}>
        <p className={'text-4xl'}><b>{text}</b></p>
        {subText && <p className={'text-xl'}>{subText}</p>}
    </div>)
}