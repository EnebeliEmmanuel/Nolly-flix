import React from 'react'
import "./style.css"
import Movie from "./movieApi"
import MenuCard from "./menuCard"
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
            <MenuCard menuD={menuList}/>
        </div>
    )
}

export default Cinema
