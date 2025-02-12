import { RootState } from "../../../../app/store/store";

export const getCalls = (state:RootState) => state.calls.data;
export const getIsLoading = (state:RootState) => state.calls.isLoading;
export const getError = (state:RootState) => state.calls.error;
export const getTotal_rows = (state:RootState) => state.calls.total_rows;