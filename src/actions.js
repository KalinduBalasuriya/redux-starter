import store from "./store";

export const addTask = (task)=>{
    return {type : "addTask", payload:{task:task} }
}

export const removeTask = (id)=>{
    return {type : "removeTask", payload:{id:id}}
}

export const taskCompleted = (id)=>{
    return {type : "taskCompleted", payload:{id:id}}
}



