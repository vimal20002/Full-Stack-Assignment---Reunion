import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import * as api from '../api'
export const login=createAsyncThunk( "/login", async({formData,toast,history})=>{
  try {
      const response=await api.login(formData);
        toast.success("You're Logged In !")

        history.push('/');
        return response?.data?.user || response.data;
     

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message)
  }

})
export const googleLogin=createAsyncThunk( "/googlelogin", async({formData,toast,history})=>{
  try {
      const response=await api.googlelogin(formData);
        toast.success("You're Logged In !")
        history.push('/');
        return response?.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message)
  }

})
export const register=createAsyncThunk( "/register", async({formData,toast,history})=>{
  try {
    const response=await api.register(formData);
        toast.success(response?.data?.message)
        history.push('/login');
        return response?.data?.message

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message)
  }

})
export const addproperty=createAsyncThunk("addproperty", async({formData,history,toast})=>{
  try {
    const response=await api.addproperty(formData);
    toast.success(response?.data?.message);
    history.push('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
})
export const updateproperty=createAsyncThunk("updateproperty", async({formData,history,toast})=>{
  try {
    const response=await api.updateproperty(formData);
    toast.success(response?.data?.message);
    history.push('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
})
export const deleteproperty=createAsyncThunk("deleteproperty", async({formData,toast})=>{
  try {
    const response=await api.deleteproperty(formData);
    toast.success("Property Deleted !");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
})
export const getproperty=createAsyncThunk("/getproperty",async()=>{
  try {
    const response=await api.getproperty();
    return response?.data;
  } catch (error) {
    console.log(error);
  }
})
export const addtocart=createAsyncThunk("addtocart", async({formData,toast})=>{
  try {
    const response=await api.addtocart(formData);
    toast.success(response?.data?.message);
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
})
export const getfromcart=createAsyncThunk("getfromcart", async({formData,toast})=>{
  try {
    const response=await api.getformcart(formData);
    return response.data;
    
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
})
const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        cart:null,
        property:null,
        error:null,
        isLogin:false,
        admin:null,
        loading:false
    },
    extraReducers:{
        [login.pending]:(state, action)=>{
        state.loading=true;
    },
    [login.fulfilled]:(state, action)=>{
        state.loading=false;
        state.isLogin=true;
        console.log(action.payload);
        if(action.payload?.token)
        {
          sessionStorage.setItem("token",JSON.stringify(action.payload?.token));
        }
        else{
        sessionStorage.setItem("user",JSON.stringify(action.payload))
        state.user=action.payload;
        }
    },
    [login.rejected]:(state, action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    [googleLogin.pending]:(state, action)=>{
      state.loading=true;
  },
  [googleLogin.fulfilled]:(state, action)=>{
      state.loading=false;
      state.isLogin=true;
      console.log(action.payload);
      sessionStorage.setItem("user",JSON.stringify(action.payload))
      state.user=action.payload;
  
  },
  [googleLogin.rejected]:(state, action)=>{
      state.loading=false;
      state.error=action.payload;
  },
    [deleteproperty.pending]:(state, action)=>{
      state.loading=true;
  },
  [deleteproperty.fulfilled]:(state, action)=>{
      state.loading=false;
      console.log(action.payload);
      sessionStorage.setItem("property",JSON.stringify(action.payload))
      state.property=action.payload;
  },
  [deleteproperty.rejected]:(state, action)=>{
      state.loading=false;
      state.error=action.payload;
  },
  [getfromcart.pending]:(state, action)=>{
    state.loading=true;
},
[getproperty.fulfilled]:(state, action)=>{
  state.loading=false;
  console.log(action.payload);
  sessionStorage.setItem("property",JSON.stringify(action.payload))
  state.property=action.payload;
},
[getproperty.rejected]:(state, action)=>{
  state.loading=false;
  state.error=action.payload;
},
[getfromcart.pending]:(state, action)=>{
state.loading=true;
},
[getfromcart.fulfilled]:(state, action)=>{
    state.loading=false;
    console.log(action.payload);
    state.cart=action.payload;
},
[getfromcart.rejected]:(state, action)=>{
    state.loading=false;
    state.error=action.payload;
},
    }    
})

export default userSlice.reducer;