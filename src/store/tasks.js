 
//  action types
 const ADD_TASK = "ADD_TASK";
 const REMOVE_TASK = "REMOVE_TASK";
 const TASK_COMPLETED = "TASK_COMPLETED";

//  actions
 export const addTask = (task)=>{
    return {type : ADD_TASK, payload:{task:task} }
}

export const removeTask = (id)=>{
    return {type : REMOVE_TASK, payload:{id:id}}
}

export const taskCompleted = (id)=>{
    return {type : TASK_COMPLETED, payload:{id:id}}
}


// reducer
let id = 0;

function reducer(state = [], action) {

    switch (action.type) {
        case addTask:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                },
            ]
        case removeTask:
            return state.filter(task => task.id !== action.payload.id)

        case taskCompled :
            return state.map(task => task.id === action.payload.id ? {
                ...task, completed: true
            } : task) 

        default:
            return state;

    }


}
export default reducer;
