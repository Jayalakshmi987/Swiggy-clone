import RestaurantCard from "./RestaurantCard"
import {useState,useEffect} from "react"
const Body=()=>{


    const [resList,setResList]= useState([])


    useEffect(()=>{


        const fetchData=async()=>{
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


            const res=  await data.json()


            setResList(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            //console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)


        }


        fetchData()


    },[])




   
    return (
        <div className="body">
        {
            resList.map(each=> <RestaurantCard key={each.info.id} resData={each}/>)
        }
        </div>
       


     
    )
}


export default Body
