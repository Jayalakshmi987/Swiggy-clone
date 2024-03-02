const RestaurantCard=(props)=>{


    const {name,cloudinaryImageId,costForTwo,sla,avgRating,cuisines} = props.resData.info


    const img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    console.log(props)
    return (
        <div className="res-card">
        <img className="res-logo" src={img_url+cloudinaryImageId} />
        <h2>{name}</h2>
        <div>
            <span> {avgRating} Rating .</span>
            <span>{sla.deliveryTime} mnts</span>
        </div>
       
        <h4>{cuisines[0]}</h4>
        <h4>{costForTwo}</h4>
        </div>


    )
}


export default RestaurantCard
