import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}; 

export const userdataSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        setUserData: (state, action) =>{
            if(action.payload){
                state.data = action.payload;
            }
        }
    }
});

export const {setUserData} = userdataSlice.actions;

export default userdataSlice.reducer;