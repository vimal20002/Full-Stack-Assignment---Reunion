import React,{useEffect, useState}from 'react'
import {
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import './property.css'
import Map from './Map';
import {BsArrowRight,BsArrowLeft} from  "react-icons/bs";
 import {useParams} from 'react-router-dom'; 

const Property = () => {
    
    // const loader = new Loader({
    //     apiKey: "AIzaSyBv55p_Zji7NXaan0KR_yAQ-HO8PE0KIBI",
    //     version: "weekly",
    //   });
    //   loader.load().then(async () => {
    //     const { Map } = await google.maps.importLibrary("maps");
      
    //     map = new Map(document.getElementById("map"), {
    //       center: { lat: -34.397, lng: 150.644 },
    //       zoom: 8,
    //     });
    //   });
    //   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
      const [data,setData]=useState({});
      const id =useParams().id.slice(1);
      console.log(id);
      
      const [uri,setUri]=useState("");
      
    useEffect(()=>{
      const obj= JSON.parse(sessionStorage.getItem("property"))?.filter((e)=>{
        return e._id===id;
     })[0]   
    setData(obj);
    setUri(obj?.imageUrls[0]);

     console.log(data);
    },[id])
const [index,setIndex]=useState(0);

useEffect(()=>{
 console.log(data);
},[uri,data])
console.log(uri);
const handlenext=()=>{
  if(index<2){
    setUri(data?.imageUrls[index+1]);
    setIndex(index+1);
  }
  else if(index===2){
    setUri(data?.imageUrls[0]);
    setIndex(0);
  }
  console.log(index);
}
const handleprev=()=>{
  if(index>0){
    setUri(data?.imageUrls[index-1]);
    setIndex(index-1);
  }
  else if(index===0){
    setUri(data?.imageUrls[2]);
    setIndex(2);
  }
  console.log(index);

}




  return (
    <div className='mn'>
        <div className="main-p">
        <div className="crs">
        <BsArrowLeft onClick={handleprev}/>
        <img src={uri} alt="" />
        <BsArrowRight onClick={handlenext}/>
      </div>

    <h3 className='name'>{data?.name}</h3>
    <div className="pricing">
        <div className="pr"><span><h4>₹ {data?.price}</h4></span>
        </div>
        <div className="pr">
        <span><h4>{data?.area} Sq Ft.</h4></span>

        </div>
        <div className="pr">
        <span>
       <h4>{data?.town}</h4>
       </span>
        </div>
        <div className="pr">
        <span>
       <h4>{data?.district}</h4>
       </span>
        </div>
        <div className="pr">
        <span>
       <h4>{data?.state}</h4>
       </span>
        </div>
       
        

    </div>
    
    <p>{data?.description}</p>
   <a href={`tel:${data?.number}`}>
   <MDBBtn color='info' outline rounded

>Contact Owner</MDBBtn></a> 
    {/* <a href="http://www.google.com/maps/place/25.4567199,81.8663148" target='_blank'>
    <MDBBtn color='danger' outline rounded>Get Directions</MDBBtn>
    </a> */}

    <div className="mp">

    {/* <Map/> */}
    </div>
    </div>
    </div>
  )
}

export default Property
