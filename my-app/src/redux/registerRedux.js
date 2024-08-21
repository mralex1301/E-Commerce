import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: 'registration',
    initialState:{
        isRegistering: false, 
        registerEror: false, 
    },
    reducers: {
        registerStart: (state) =>{
            state.isRegistering = true;
        },
        registerSuccess: (state) =>{
            state.isRegistering = false;
            state.registerError = false; 
        },
        registerFailure: (state) =>{
            state.isRegistering = false;
            state.registerError = true; 
        },
        removeRegisterError: (state) =>{
            state.registerError = false; 
        },
    },
});

export const {registerStart,registerSuccess,registerFailure,removeRegisterError} = registrationSlice.actions; 

export default registrationSlice.reducer;
