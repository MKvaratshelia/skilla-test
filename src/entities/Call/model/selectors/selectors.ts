import { RootState } from "../../../../app/store/store";

export const calls = (state:RootState) => state.calls.data;
export const isLoading = (state:RootState) => state.calls.isLoading;
export const isError = (state:RootState) => state.calls.error;
export const total_rows = (state:RootState) => state.calls.total_rows;