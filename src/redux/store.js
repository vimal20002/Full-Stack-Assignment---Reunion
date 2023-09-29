import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";


export default configureStore(
    {
        reducer :{
            user:userSlice
        }
    }
)