import React from "react";

export function PageBannerComponent({text, subText}: Readonly<{
    text: string,
    subText: string|null
}>){
    return (<div className={'place-content-center'}>
        <h1>{text}</h1>
        {subText && <h3>{subText}</h3>}
    </div>)
}