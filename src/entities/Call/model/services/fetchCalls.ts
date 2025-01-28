import { AppDispatch } from "../../../../app/store/store";
import axios, { AxiosError } from "axios";
import { callsFetching, callsFetchingError, callsFetchingSuccess, } from "../slice/CallSlice";
import { IResponse } from "../types/types";
const testToken = "testtoken";
const BASE_URL = 'https://api.skilla.ru/mango/getList';

const HEADERS = {
    Authorization: `Bearer ${testToken}`,
};


export const fetchCalls = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(callsFetching());
        const { data } = await axios.post<IResponse>(
            `${BASE_URL}`,
            {},
            {
                headers: HEADERS
            }
        );
        dispatch(callsFetchingSuccess(data))
    } catch (error) {
        if(error instanceof AxiosError) {
           dispatch(callsFetchingError(error.response?.data.message)) 
        }
        
    }

}
export const fetchCallsWithDates = (dateStart: string, dateEnd:string) => async (dispatch:AppDispatch) => {
    try {
        dispatch(callsFetching());
        const { data } = await axios.post(
            `${BASE_URL}?date_start=${dateStart}&date_end=${dateEnd}`,
            {},
            {
                headers: HEADERS
            }
        );
        dispatch(callsFetchingSuccess(data))
    } catch (error) {
        if(error instanceof AxiosError) {
           dispatch(callsFetchingError(error.response?.data.message)) 
        }
        
    }

}