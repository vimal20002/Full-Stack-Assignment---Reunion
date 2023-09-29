import React, { useEffect } from 'react'
import './login.css'
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify"
import { googleLogin, login } from '../redux/userSlice/userSlice';

const clientId ="812307903370-3abejn0mjs6636nd2o435sb1mauu0uj4.apps.googleusercontent.com"
const Login = () => {
  const dispatch=useDispatch();
  const history=useHistory();
useEffect(() => {
  const initClient = () => {
    gapi.client.init({
      clientId: clientId,
      scope: ''
    });
  };
  gapi.load('client:auth2', initClient);
});
const init={
  email:"",
  password:""
}
const loginSchema=Yup.object({
  email:Yup.string().email().required("Email is a required feild"),
  password:Yup.string().min(6,"Min 6 characters in password").required("Password is required feild")
})
const {values,touched,errors,handleBlur,handleChange,handleSubmit} = useFormik({initialValues:init,
validationSchema:loginSchema,
onSubmit:(values)=>{
  const formData=values
  dispatch(login({formData,toast,history}));
}
})
  return (
    <div>
         <div id="loginform">
        <FormHeader title="Login" />
        <div>
    <div class="row">
    <label>Email</label>
    <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
   <p className='err'>  {errors.email&&touched.email?errors.email:null}</p>
  </div>
  <div class="row">
    <label>Password</label>
    <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
   <p className='err'>  {errors.password&&touched.password?errors.password:null}</p>
  </div>
  <div id="button" class="row">
    <button onClick={handleSubmit}>Login</button>
  </div>
   </div>        
   <OtherMethods />
      </div>
    </div>
  )
}

export default Login

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);








const OtherMethods = (props) =>{
  const dispatch=useDispatch();
const history=useHistory();
const onSuccess = (resp) => {

  const formData = {
    ...resp.profileObj
  }
dispatch(googleLogin({formData,toast, history}))
  console.log(resp)
  }
  const onFailure = (err) => {
    console.log(err)
  }
return (
  <div id="alternativeLogin">
  <label>Or</label>
  <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        redirectUri=''
      />
          <label>Or</label>
          <Link to="/signup">
            <h5>SignUp</h5>
          </Link>
  
</div>
)
} 
 




