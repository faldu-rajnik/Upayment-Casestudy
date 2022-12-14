import React, {useState} from 'react'

function Addproduct({getList}) {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [description,setDescription]=useState("");
    const [avatar,setAvatar]=useState("");
    const [developerEmail,setDeveloperEmail]=useState("");

    function saveProduct()
    {
        console.warn({name,price,category,description,avatar,developerEmail});
        let data={name,price,category,description,avatar,developerEmail}
        fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            //getList();
            setName("");
            setPrice("");
            setCategory("");
            setDescription("");
            setAvatar("");
            setDeveloperEmail("");
        })
    }
  return (
    <div className="App max-w-5xl mx-auto">
      <div className="container">
        <div className="row">
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/><br/>
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="avatar url" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/><br/>
            <input type="text" className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="developer email" value={developerEmail} onChange={(e)=>{setDeveloperEmail(e.target.value)}}/><br/>
            <button type="button" onClick={saveProduct} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save Product</button>
        </div>        
      </div>       
    </div>
  );
}

export default Addproduct;
