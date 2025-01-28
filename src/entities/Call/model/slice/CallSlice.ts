import { createSlice, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { groupByDate } from '../../../../shared/lib/groupByDate/groupByDate';
import { Call, IResponse} from '../types/types';


export interface CallsState {
  data: Record<string, Call[]>;
  allData: IResponse
  total_rows: string,
  isLoading: boolean,
  error: string
}

const initialState: CallsState = {
  data: {},
  allData: {total_rows: '', results:[]},
  total_rows: '',
  isLoading: false,
  error: '',
}

export const callsSlice = createSlice({
  name: 'Calls',
  initialState,
  reducers: {
    callsFetching: (state) => {
     state.isLoading = true;
    },
    callsFetchingSuccess: (state, action: PayloadAction<IResponse>) => {
      state.isLoading = false;
      state.error = ''
      state.data = groupByDate(action.payload.results);
      state.allData = action.payload
    },
    callsFetchingError: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    },
    fillterByType: (state, action:PayloadAction<string>) => {
      if(action.payload === '2') {
        state.data = groupByDate(state.allData.results);
        return
      }
      const filteredData = state.allData.results.filter(i => {
        return i.in_out === Number(action.payload)
      })

      state.data = groupByDate(filteredData);
    }
    
  },
})

export const { callsFetching, callsFetchingSuccess, callsFetchingError, fillterByType} = callsSlice.actions

export default callsSlice.reducer