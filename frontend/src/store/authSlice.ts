import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
    isAuthenticated: boolean;
    role: string | null;
}

export interface AuthAction {
    type: string
    payload: string
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        role: null,
    },
    reducers: {
        login: (state: AuthState, action: AuthAction) => {
            state.isAuthenticated = true;
            state.role = action.payload;
        },
        logout: (state: AuthState) => {
            state.isAuthenticated = false;
            state.role = null;
        },
    },
});

export const {login, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authReducer;