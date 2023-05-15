import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: ++id,
                empName: action.payload.empName

            })
        },
        


    }
});

console.log(employeeSlice);

export const { addEmployee,removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;