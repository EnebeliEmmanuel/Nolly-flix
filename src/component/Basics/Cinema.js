import React from 'react'
import "./style.css"
import Movie from "./movieApi"
import MovieCard from "./movieCard"
import Navbar from "./Navbar"
const uniqueList = [...new Set(Movie.map((currEle)=>{
    return currEle
}))
]

const Cinema = () => {
    const [menuList,setMenuList] = React.useState(uniqueList)
    
    return (
        <div>
            <Navbar />
            <MovieCard menuD={menuList}/>
        </div>
    )
}

export default Cinema
