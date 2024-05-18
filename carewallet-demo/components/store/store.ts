import { configureStore } from '@reduxjs/toolkit'
import globalStore from "@/components/store/reducers/globalStore";

const store = configureStore({
    reducer: {
        globalStore
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export const Store = store;