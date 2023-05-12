 import { createAction, createReducer  } from "@reduxjs/toolkit";
//  import { Immer } from "immer";



//  actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const taskCompleted = createAction("TASK_COMPLETED");


//  export const addTask = (task)=>{
//     return {type : ADD_TASK, payload:{task:task} }
// }

// export const removeTask = (id)=>{
//     return {type : REMOVE_TASK, payload:{id:id}}
// }

// export const taskCompleted = (id)=>{
//     return {type : TASK_COMPLETED, payload:{id:id}}
// }


// reducer
let id = 0;

export default createReducer([],{
    "ADD_TASK" : (state ,action)=>{
        state.push({
            id : ++id,
            task: action.payload.task,
            completed : false
        })
    },

    "REMOVE_TASK" : (state, action)=>{
        const index = state.findIndex(task=> task.id === action.payload.id);
        state.splice(index, 1);
    },

    "TASK_COMPLETED" : (state, action)=>{
        const index = state.findIndex(task=> task.id === action.payload.id)
        state[index].completed = true;
    }
})

// function reducer(state = [], action) {

//     switch (action.type) {
//         case addTask.type:
//             return [
//                 ...state,
//                 {
//                     id: ++id,
//                     task: action.payload.task,
//                     completed: false
//                 },
//             ]
//         case removeTask.type:
//             return state.filter(task => task.id !== action.payload.id)

//         case taskCompleted.type :
//             return state.map(task => task.id === action.payload.id ? {
//                 ...task, completed: true
//             } : task) 

//         default:
//             return state;

//     }


// }

