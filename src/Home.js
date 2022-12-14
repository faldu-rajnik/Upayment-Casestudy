import './App.css';
import React, {useEffect,useState,useMemo } from 'react'
import {
  Link
} from "react-router-dom";


function Home() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [data,setData]=useState([])
  const [catdata,setcatData]=useState([])
  useEffect(()=>{
    getList()
    getCategory()
  },[])
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return data;
    }
    return data.filter((item) => item.category === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, data]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function getList()
  {
    fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/").then((result)=>{
      result.json().then((resp)=>
      {
        setData(resp)
      })
    })
  }
  function getCategory()
  {
    fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/").then((result)=>{
      result.json().then((resp)=>
      {
        setcatData(resp)
      })
    })
  }
 console.warn(data)
 function deleteProduct(id)
 {
   fetch(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,{
     method:'DELETE'
 }).then((result)=>{
   result.json().then((resp)=>{
     console.warn(resp)
     getList()
   })
   })
 }
  return (
    
    <div className="App max-w-5xl mx-auto">
      <div className="container">
        <select onChange={handleCategoryChange} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-5" aria-label="Default select example">
        <option value="">All</option>
        {
            catdata.map((item,i)=>
          <option value={item.name}>{item.name}</option>
            )}
        </select>
        <div className="row">
        <div className="max-w-5xl mx-auto">
          
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredList.map((element, index) => (
          <div className="group" key={element.id}>
             <div style={{minHeight:"200px"}} className=" p-4 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 text-center"><img alt="product" src={element.avatar} className="d-block mx-auto" style={{width:"100px"}}/></div>
             <Link 
             to={{
              pathname: `product/${element.id}`,
            }}
            state= {{id:element.id}}>
             {/* to={"/product/"+element.id} */}
             <div className="mt-4 text-gray-700 text-xl">{element.name}</div></Link>
            <div className="mt-1 text-lg font-medium text-gray-900 mb-3">{element.price}</div>
            <div><button onClick={()=>deleteProduct(element.id)} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button></div>
          </div>
        ))}
      </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
