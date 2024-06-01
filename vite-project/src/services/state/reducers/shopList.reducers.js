import {ADD_PLANT, DELETE_PLANT, INCREASE_PLANT, DECREASE_PLANT} from '../actions/actions.js';

const initState={
    orders:[]
}


function ordersReducer(state=initState, action){
    switch (action.type) {
        case ADD_PLANT:
            console.log('in addplant');
           return {...state , orders:[...state.orders,{...action.payload, quantity:1}] }
        case INCREASE_PLANT:
            // console.log('in increase', state.orders);
            return {
                ...state,
                orders: state.orders.map((obj)=>{
                    // console.log(action.payload);
                    if(obj.name===action.payload.name){
                        // console.log('hastam vali kar nemidam');
                        // console.log(++obj.quantity);
                        return {...obj, quantity:++obj.quantity}
                    }else{
                       return obj
                    }
                 })
            }
                
        case DELETE_PLANT:
            console.log(state.orders);
            return{
                ...state,
                orders:state.orders.filter((obj)=>obj.name!==action.payload.name)
            }
        case DECREASE_PLANT:
            console.log('in decrease plant');
            return{
                ...state,
                orders:state.orders.map((obj)=>{
                    if(obj.name===action.payload.name){
                        console.log('in if statement');
                        
                        

                            return {...obj, quantity:--obj.quantity}
                        
                    }else{
                        return obj
                    }
                })
            }    
        default:
            return state
    }
}

export  default ordersReducer