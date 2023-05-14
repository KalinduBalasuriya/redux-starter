import { createSlice, createReducer, createAction} from "@reduxjs/toolkit";
//  import { Immer } from "immer";



//  actions
// export const addTask = createAction("ADD_TASK");
// export const removeTask = createAction("REMOVE_TASK");
// export const taskCompleted = createAction("TASK_COMPLETED");
const hey = createAction('name');
console.log(hey());



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
const test = createReducer([], {});
console.log(test);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false
            })
        },

        removeTask: (state, action)=>{
            const index = state.findIndex(task => task.id === action.payload.id);
            state.splice(index, 1);  
        },
        taskCompleted: (state, action)=>{
            const index = state.findIndex(task => task.id === action.payload.id)
        state[index].completed = true;
        }
    }
});
console.log(taskSlice)

export const {addTask, removeTask, taskCompleted} = taskSlice.actions
export default taskSlice.reducer;

// export default createReducer([], {
//     "ADD_TASK": (state, action) => {
//         state.push({
//             id: ++id,
//             task: action.payload.task,
//             completed: false
//         })
//     },

//     "REMOVE_TASK": (state, action) => {
//         const index = state.findIndex(task => task.id === action.payload.id);
//         state.splice(index, 1);
//     },

//     "TASK_COMPLETED": (state, action) => {
//         const index = state.findIndex(task => task.id === action.payload.id)
//         state[index].completed = true;
//     }
// })

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

