export function WelcomeGreetingComponent(){
    const hours: number = new Date().getHours();
    let greeting: string ;
    if(hours >= 18){
        greeting = 'evening, Snickerbums.';
    }else if(hours >= 12){
        greeting = 'afternoon, Go-Getter!'
    }else if(hours <= 4){
        greeting = 'Wow, burning the midnight oil!'
    }else{
        greeting = 'morning, Sunshine!';
    }
    return (<div className={'p-3'}>Good {greeting}</div>);
}