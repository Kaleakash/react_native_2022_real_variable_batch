

export const increment = (data:number)=> ({
    type:"INCREMENT",payload:data
})

export const decrement = (data:number)=> ({
    type:"DECREMENT",payload:data
})


// like that we can write more than action base upon our requirement. 