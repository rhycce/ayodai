import React from "react";

export function PageBannerComponent({text, subText}: Readonly<{
    text: string,
    subText: string|null
}>){
    return (<div className={'text-center m-3'}>
        <p className={'text-4xl'}><b>{text}</b></p>
        {subText && <p className={'text-xl'}>{subText}</p>}
    </div>)
}