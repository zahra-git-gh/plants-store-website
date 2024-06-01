import {ADD_PLANT, DELETE_PLANT, INCREASE_PLANT, DECREASE_PLANT} from "./actions.js"
function addOrderItem(data){
    return {
        type: ADD_PLANT,
        payload: data
    }
}

function deleteOrderItem(data){
    return {
        type: DELETE_PLANT,
        payload: data
    }
}

function increaseItem(data){
    return{
        type:INCREASE_PLANT,
        payload:data
    }
}

function decreaseItem(data){
    return{
        type: DECREASE_PLANT,
        payload: data
    }
}

export {deleteOrderItem, addOrderItem, increaseItem, decreaseItem}