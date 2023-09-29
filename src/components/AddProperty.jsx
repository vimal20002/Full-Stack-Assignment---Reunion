import { MDBBtn } from 'mdb-react-ui-kit';
import './addproperty.css'
import { Formik, useFormik } from "formik";
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify"
import { addproperty, updateproperty } from '../redux/userSlice/userSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const initObj = {
  name: "",
  price: "",
  town: "",
  type: "",
  date: "",

}
const formSchema = Yup.object({
  name: Yup.string().max(20, "Max 50 chars").min(3, "Min 3 chars required").required("Name is a required feild"),
  price: Yup.string().required("Price is a required feild"),
  town: Yup.string().max(100, "Max 100 chars").required("Town is a required feild"),
  type: Yup.string().max(100, "Max 100 chars").required("type is a required feild"),
  date: Yup.string().max(100, "Max 100 chars").required("date is a required feild"),
})

const AddProperty = () => {
  const [data, setData] = useState({});
  const id = useParams().id?.slice(1);
  const [fn,setFn]=useState("");
  const [images,setImages]=useState([]);
  const [index,setIndex]=useState(0);
  const handleImage=()=>{
   
      // document.getElementById("ad").style.border="2px blue solid";
      console.log(document.getElementsByClassName('fileinput')[0].file);
      const file = document.querySelector('input[type=file]').files[0]  ;
      console.log(file);
      // setIndex(index+1);
      setFn(file.name)
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload=()=>{
          const res = reader.result;
          console.log(res)
          setImages([...images,res])
      }
  }
  useEffect(() => {
    if (id) {
      setData(JSON.parse(sessionStorage.getItem("property"))?.filter((e) => {
        return e._id === id;
      })[0]
      )
    }
  }, [id])
  const dispatch = useDispatch();
  const history = useHistory();
  const { values, setValues, errors, handleChange, handleSubmit, touched, handleBlur } = useFormik({
    initialValues: initObj,
    enableReinitialze: true,
    validationSchema: formSchema,
    onSubmit: (values) => {
      const formData = { ...values, token: JSON.parse(sessionStorage.getItem("token")),imageUrls:images };
      console.log(formData);
      if (id) {
        console.log("yha")
        dispatch(updateproperty({ formData, history, toast }))
      }
      else {

        dispatch(addproperty({ formData, history, toast }));
      }
    }
  })
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      console.log(data)
      setValues({ ...data });
    }
  }, [data])
  return (
    <div className="mn">
      
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label>Name</label>
            <input name="name" value={values.name} onBlur={handleBlur} onChange={handleChange} placeholder='Name of the Property' />
            <p className='err'>  {errors.name && touched.name ? errors.name : null}</p>

          </div>   <div className="row">
            <label>Price</label>
            <input name="price" value={values.price} onBlur={handleBlur} onChange={handleChange} placeholder='Price of the Property' />
            <p className='err'>  {errors.price && touched.price ? errors.price : null}</p>

         

        

          </div>   <div className="row">
            <label>Location</label>
            <input name="town" value={values.town} onBlur={handleBlur} onChange={handleChange} placeholder='Located In' />
            <p className='err'>  {errors.town && touched.town ? errors.town : null}</p>

          </div>   <div className="row">
            <label>Property Type</label>
            <input name="type" value={values.type} onBlur={handleBlur} onChange={handleChange} placeholder='Type A/B/C' />
            <p className='err'>  {errors.type && touched.type ? errors.type : null}</p>

          </div>
          <div className="row">
            <label>Available From</label>
            <input name="date" type='date' value={values.date} onBlur={handleBlur} onChange={handleChange} placeholder='Date in dd/mm/yyyy' />
            <p className='err'>  {errors.date && touched.date ? errors.date : null}</p>

          </div>
          <div className="row">
            <input type='file' className='fileinput' accept='image/jpeg,image/png,image/jpg,image/avif,image/webp' onChange={handleImage}/> 
            {/* <input type='file'  className='fileinput' accept='image/jpeg,image/png,image/jpg,image/avif,image/webp'onChange={handleImage}/>  */}
            {/* <input type='file'  className='fileinput' accept='image/jpeg,image/png,image/jpg,image/avif,image/webp'onChange={handleImage}/>  */}
          </div>
          <MDBBtn className='my-3' color='primary' type='submit' rounded>Submit</MDBBtn>
        </form>
      </div>
    </div>
  )
}

export default AddProperty