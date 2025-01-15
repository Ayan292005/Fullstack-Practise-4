import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:3030/people"

function People() {
    let [data, setData] = useState([])
    function getData() {

        axios.get(DBurl)
            .then(res => {
                setData(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    function handleSortByName() {
        let sortedProducts = data.sort((a, b) => a.name.localeCompare(b.name))
        setData([...sortedProducts])
        console.log(sortedProducts);
        
    
      }
    return (
        <>
            <div className='container'>
                <div className='w-1/2 mx-auto my-0 flex flex-col gap-5'>
                    <p className='text-center text-2xl prod-gray m-0'>Popular Products</p>
                    <h1 className='text-center text-5xl font-black'>Our Products</h1>
                    <p className='text-center prod-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                <button  onClick={handleSortByName} className='border border-black p-2 mr-1'>Sort by name</button>
                <button  onClick={getData} className='border border-black p-2'>Reset</button>
                <div className='flex flex-wrap justify-between'>
                    {data && data.map(product => (
                        <div key={product._id} className='relative my-4 h-100 card' style={{ width: "31%" }}>
                            <div className='flex flex-col items-center justify-center gap-3'>
                                <img src={product.image} />
                                <p className='font-medium'>{product.name}</p>
                                <div className='flex gap-3 items-center'>
                                <i class="fa-solid fa-star" style={{color:"#f89d13"}}></i><span>5.0</span>
                                <i class="fa-solid fa-heart" style={{color:"#f23a2e"}}></i>
                                </div>
                               
                                <p className='text-center prod-gray'>{product.description}</p>
                                <div className='flex gap-2'>
                                <div className='cart'>CART</div>
                                <div className='view'>VIEW</div>
                                </div>
                                

                            </div>
                            <div className='flex justify-center items-center gap-2 btn-holder'>
                                {/* 
<NavLink to={`/flowers/${product.id}`}><IconButton style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><SearchIcon style={{
    fontSize: '20px', color: "black", cursor: "pointer"
}} ></SearchIcon></IconButton></NavLink>

<IconButton onClick={() => handleAddBasket(product)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><LocalMallIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></LocalMallIcon></IconButton>

<IconButton onClick={() => handleAddFavorite(product)} style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%" }}><FavoriteBorderIcon style={{ fontSize: '20px', color: "black", cursor: "pointer" }}></FavoriteBorderIcon></IconButton> */}

                            </div>

                        </div>



                    ))
                    }
                </div>

            </div>
        </>
    )
}

export default People
