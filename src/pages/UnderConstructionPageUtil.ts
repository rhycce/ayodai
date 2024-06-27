const DEADLINE = 1722398400000;

export interface TimeDifferenceObject{
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

export function getTimeRemaining():TimeDifferenceObject{
    const currentDate = Date.now();
    const diff = DEADLINE - currentDate ;
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return{
        days,
        hours,
        minutes,
        seconds
    }
}