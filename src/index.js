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

import store from "./store";
import { addTask, removeTask } from "./actions";

const unsubscribe = store.subscribe(()=>{
    console.log("Updated", store.getState() );
})

store.dispatch(addTask("Task 1"));
console.log(store.getState());

unsubscribe();
store.dispatch(removeTask(1));
// console.log(store.getState());;


