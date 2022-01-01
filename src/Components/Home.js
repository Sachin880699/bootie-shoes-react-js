import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Home = () => {
    const [shopingitem , setShopingitem] = useState([])
    
        useEffect(()=>{
            fetch("http://192.168.43.102:8000/SellingItemList").then((result)=>
        result.json().then((resp)=>{
            setShopingitem(resp.user_list) 
        })
        )
        },[])


    return (
        <div>
            <section>
			<div class="common-wrapper">
				<div class="arrival-heading uppercase"><h2>New Arrivals</h2></div>
				<div class="arrival">
					
					{
                        shopingitem.map((res, index)=>
                        
                        <div class="item item-1">
						<img class="img-responsive" src={res.image} alt="shoes_image" />
						<button class="arrival-button uppercase">Add To Card</button>
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
					
                        
                        )
                    }

					
					
				</div>
			</div>
		</section>
        </div>
    );
}

export default Home;
