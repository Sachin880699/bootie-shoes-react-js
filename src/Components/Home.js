import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { BaseUrl } from "./http-common";

const Home = () => {
    const [shopingitem , setShopingitem] = useState([])
	const [cardid , setCardId] = useState("")
	const [loader, setLoader] = useState();
	
    
        useEffect(()=>{
            fetch(BaseUrl+"/SellingItemList").then((result)=>
        result.json().then((resp)=>{
			setLoader(true)
            setShopingitem(resp.user_list) 
        })
        )
        },[])
		


    return (
        <div>
            <section>
			<div class="common-wrapper">
				<div class="arrival-heading uppercase"><h2>Top Brandh</h2></div>
				<div class="arrival">
					
					{
						loader === true?
                        shopingitem.map((res, index)=>
                        
						<Link to={`/home/`+res.id}>
							

                        <div onClick={() => setCardId(res.id)}  class="item item-1">
						<img class="img-responsive" src={res.image} alt="shoes_image" />
						<button class="arrival-button uppercase">View</button>
						<p class="arrival-item-name uppercase">{res.item_name}</p>
						<hr class="ruler-arrival" />
						<p class="arrival-price">&#8377; {res.price}</p>
						<ul class="stars">
							<li><a href="#"><span class="fa fa-star"></span></a></li>
							<li><a href="#"><span class="fa fa-star"></span></a></li>
							<li><a href="#"><span class="fas fa-star-half-alt"></span></a></li>
							<li><a href="#"><span class="fas fa-star-half-alt"></span></a></li>
							<li><a href="#"><span class="far fa-star"></span></a></li>
						</ul>
					</div>
					</Link>
                        )
						:<div><img src="https://i.pinimg.com/originals/97/73/19/9773191809c1d62b43596308438a2a9f.gif"/> </div>
                    }

					
					
				</div>
			</div>
		</section>
        </div>
    );
}

export default Home;
