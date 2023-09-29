import axios from 'axios';
const Api = axios.create({baseURL : 'http://localhost:8000'})

export const login=(formData)=>{
    console.log(formData);
    return Api.post("/login",formData);
}
export const register=(formData)=>{
    console.log(formData);
    return Api.post("/register",formData);
}
export const addproperty=(formData)=>{
    console.log(formData);
    return Api.post("/addproperty",formData);
}
export const updateproperty=(formData)=>{
    console.log(formData);
    return Api.post("/updateproperty",formData);
}
export const deleteproperty=(formData)=>{
    console.log(formData);
    return Api.post("/deleteproperty",formData);
}
export const addtocart=(formData)=>{
    console.log(formData);
    return Api.post("/addtocart",formData);
}
export const getproperty=()=>{
    return Api.get("/getproperty");
}
export const getformcart=(formData)=>{
    return Api.post("/getcart",formData);
}
export const googlelogin=(formData)=>{
    return Api.post("/googlelogin",formData);
}