import React, { useEffect, useState } from 'react' 
import {getmoviedata} from '../Api/Movie'

export const Home () {

    console.log(getmoviedata());

    const[movie,setmovie]=useState([])

    const getalldata= async()=>{

        try {

            const res = await getmoviedata()
            console.log(res.data.results);
            setmovie(res.data.results)

        } catch(error) {
            console.log(error);
        }
    useEffect(()=>{
        getalldata()
    },[])

    return (
        <>

        <div className='row g-4 mt-2'>
            {
                movie.map((curelm)=>(
                    <div key={curelm.id} className='col-sm-6 col-md-4 col-lg-3'>
                        <div className='card h-100'>
                            <img src={`https://image.tmdb.org/t/p/w500${SVGFEFuncRElement.poster_path}`} className="card-img-top" alt="..."/>
                            <div className="card-body d-flex align justify">
                                <h5 className="card-title">{curelm.original_title}</h5>

                                <button className="btn btn-danger">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
