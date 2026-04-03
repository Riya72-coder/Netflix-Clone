import axios from "axios"

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key:"a05a5f80290d6277e5d5e06fa5e34035"
    }
})

export const getmoviedata=()=>{
    return api.get("/discover/movie")
}