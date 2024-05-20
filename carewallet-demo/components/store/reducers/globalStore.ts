import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import exp from "node:constants";
import {useAppDispatch} from "@/components/store/hooks";

interface GlobalStore {
    showConfetti: boolean;
};

const initialState: GlobalStore = {
    showConfetti: false,
};

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
        },
        setGShowConfetti: (state) => {
          return {
              ...state,
              showConfetti: true
          }
        },
        setGHideConfetti: (state) => {
            return {
                ...state,
                showConfetti: false
            }
        },
    }
});

export const { clearGlobalState, setGlobalState, setGShowConfetti, setGHideConfetti } = globalStore.actions;

export const selectGlobalState = (state: RootState) => state.globalStore;

export const selectGConfetti = (state: RootState) => state.globalStore.showConfetti

export default globalStore.reducer;