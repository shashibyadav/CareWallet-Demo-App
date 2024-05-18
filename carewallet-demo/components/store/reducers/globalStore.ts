import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface GlobalStore {

};

const initialState: GlobalStore = {};

const globalStore = createSlice({
    name: "globalStore",
    initialState,
    reducers: {
        clearGlobalState: () => {
            return initialState;
        },
        setGlobalState: (
            state,
            action: PayloadAction<GlobalStore>
        ) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});

export const { clearGlobalState, setGlobalState } = globalStore.actions;

export const selectGlobalState = (state: RootState) => state.globalStore;

export default globalStore.reducer;