import React, { useState } from 'react'
import "./searchbox.css"
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'


const Searchbox = ({setData,dt,data}) => {
const [priceVal, setPriceVal] = useState("");
const [city, setCity] = useState(false);
const [date, setDate] = useState(false);
const [price, setPrice] = useState(false);
const [propr, setPropr] = useState(false);



const [location,setLocation]=useState("")
const [type,setType]=useState("")
const [available,setAvailable]=useState("")


const handleApply=(str)=>{
  let obj=dt;
  if(location.length !== 0){
    obj=obj.filter((e)=>{
      return e.town===location 
    })
    console.log(obj)
    setData(obj);
  }
  if(available.length !== 0){
    obj=obj.filter((e)=>{
      return e.date===available 
    })
    console.log(obj)

    setData(obj);
  }
  if(priceVal){
    obj=obj.filter((e)=>{
      return e.price===priceVal; 
    })
    console.log(obj)

    setData(obj);
  }
  if(type.length !== 0){
    obj=obj.filter((e)=>{
      return e.type===type 
    })
    console.log(obj)

    setData(obj);
  }
  

}

// const handleSearch = (ev)=>{
//   let obj=[];
//   if(obj.length===0){
//   obj= dt.filter((e)=>{
//       return e?.name?.toLowerCase().includes(ev?.target?.value.toLowerCase());
//     })
//     setData(obj);
//   }  
//     if(obj.length===0){
//       console.log(data)
//       obj= dt.filter((e)=>{
//         return e?.district?.toLowerCase().includes(ev?.target?.value.toLowerCase());
//       })
//         setData(obj);
//     }
//     if(obj.length===0){
//        obj= dt.filter((e)=>{
//         return e?.town?.toLowerCase().includes(ev?.target?.value.toLowerCase());
//       })
//       setData(obj);
//     }
//     if(obj.length===0){
//       obj= dt.filter((e)=>{
//        return e?.state?.toLowerCase().includes(ev?.target?.value.toLowerCase());
//      })
     
//      setData(obj);
//    }
//     setVal(ev.target.val)
// }
  return (
    <div className="mainn">
    <div className='search-main'>
    <div className="filter-op" >
      <span className="filterType" onClick={()=>setCity(!city)}>City</span>
     { !city && <span className="filterTitle">Select Location</span>}
      {
        city &&
        <div className="city-list">
          <select name="city-list" value={location}  onChange={(e)=>{setLocation(e.target.value)
          console.log(location)
        }}
          id="city">
            <option>Prayagraj</option>
            <option >Kanpur</option>
            <option>Mumbai</option>
          </select>
        </div>
      }
    </div>
    <div className="filter-op">
    <span className="filterType" onClick={()=>setDate(!date)}>Availble From</span>
      {!date?<span className="filterTitle">Select Move-in Date</span>:
      <input type="date" name="select-date" onChange={(e)=>{setAvailable(e.target.value)}}   className="select-date" /> 
    }
    </div>
    <div className="filter-op">
    <span className="filterType" onClick={()=>setPrice(!price)}>Price</span>
    
    <span className="filterTitle">{!price ?"Select Price": priceVal}</span>
    {price &&
      <input type="range" name="range" id="range" value={priceVal} onChange={()=>{
        setPriceVal(document.getElementById('range').value)
      }}/>
    }
    </div>
    <div className="filter-op">
    <span className="filterType" onClick={()=>setPropr(!propr)}>Property Type</span>
      { !propr && <span className="filterTitle">Select Property Type</span>}
      {
        propr &&
        <div className="propr-list">
          <select name="propr-list" value={type} onChange={(e)=>{setType(e.target.value)
          console.log(e.target.value)
          
        }
        } id="propr">
            <option >A</option>
            <option >B</option>
            <option >C</option>
          </select>
        </div>
      }
    </div>
    <div className="btnnn" onClick={handleApply}>Apply</div>
    </div>
    </div>
  )
}

export default Searchbox