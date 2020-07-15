// input debounce it waits delay of ms to excute func as a return 
const debounce = (func, delay = 1000 ) => {
    let timeoutId;
    return (...args)=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func.apply(null, args);
        }, delay)
    } 
}

