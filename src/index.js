// import { compose, pipe } from 'lodash/fp'
// import { produce } from 'immer';

// // let username = "   Harley   "
// // let message = "Hello " + username.trim() +" Good Morning! ";

// // const trim = (name) => name.trim();

// // const generatemessage =  message=> name => `Hello ${name}, ${message}!`;
// // const convertToUpper = (name) => name.toUpperCase();

// // // const result = generatemessage(convertToUpper(trim(username)));

// // const newFunc = pipe(trim, convertToUpper, generatemessage("Good Morning"));
// // const result = newFunc(username);
// // console.log(result);


// const employee ={name:"Harley", age:22, company:{country:"Canada", city:"Toronto"}};

// // const newEmployee = Object.assign({},employee, {name:"Martin"});

// // const newEmployee = {
// //     ...employee, name:"martin",
// //     company:{...employee.company, city:"Calgary"}
// // }

// const newEmployee = produce(employee, (draftState)=>{
//     (draftState.name = "Martin"),
//     (draftState.company.city = "Calgary");
// });
// console.log(employee);
// console.log(newEmployee);

import store from "./store/configurestore";
import { addTask, removeTask,taskCompleted } from "./store/tasks";

// const unsubscribe = store.subscribe(()=>{
//     console.log("Updated", store.getState() );
// })

console.log(addTask());

store.dispatch(addTask({task:"Task 1"}));
console.log(store.getState());

store.dispatch(addTask({task:"Task 2"}));
console.log(store.getState());

store.dispatch(addTask({task:"Task 3"}));
console.log(store.getState())

// unsubscribe();
store.dispatch(removeTask({id:2}));
console.log(store.getState());

store.dispatch(taskCompleted({id:1}));
console.log(store.getState());



