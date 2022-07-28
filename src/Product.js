import {useLocation} from 'react-router-dom'
import React, {useEffect,useState } from 'react'
function Product()
{
    let location = useLocation();
    const [data,setData]=useState([])
    useEffect(()=>{
      //getsingleList()
      fetch(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${location.state.id}`,{
        method:'GET'
    }).then((result)=>{
      result.json().then((resp)=>{
        //console.warn(resp)
        setData(resp)
      })
      })
    },[])
    return(
          <div className="container max-w-5xl mx-auto">
            <div className="row">    
              <div className="col-md-3" key={(data.id)}>
                <div style={{minHeight:"200px"}} className=" p-4 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-center"><img src={data.avatar} className="d-block" style={{width:"300px"}} alt="product"/></div>
                <div className="mt-4 text-gray-700 text-base font-semibold text-gray-900 text-xl">{data.name}</div>
                <div className="mt-1 text-lg font-medium text-gray-900 mb-3">{data.price}</div>
                <div className="mt-4 text-sm text-gray-700">{data.description}</div>
                <div></div>
              </div>
            </div>
          </div>
    )
}
export default Product