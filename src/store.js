import {configureStore} from '@reduxjs/toolkit'
import { countReducer } from './Reducer/incDec'
const store= configureStore(
    {
        reducer:countReducer
    }
)

export default store