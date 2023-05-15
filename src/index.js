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
import { addEmployee, removeEmployee,  } from "./store/employee";

// const unsubscribe = store.subscribe(()=>{
//     console.log("Updated", store.getState() );
// })


store.dispatch(addEmployee({empName:"Harley"}));

store.dispatch(addEmployee({empName:"John"}));

store.dispatch(addEmployee({empName:"John"}));
store.dispatch({type:"SHOW-ERROR", payload:{error:"User not found!"}})

//tasks
store.dispatch(addTask({task:"Task 1"}));
store.dispatch(addTask({task:"Task 2"}));
store.dispatch(addTask({task:"Task 3"}));
store.dispatch(removeTask({id:2}));
store.dispatch(taskCompleted({id:1}));


console.log(store.getState());







