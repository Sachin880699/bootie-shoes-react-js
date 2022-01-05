import React, { useEffect, useState } from "react";
import { BaseUrl } from './http-common';

const Shop = () => {
	const [shoplist, setShopList] = useState();

	useEffect(()=>{
		fetch(BaseUrl+"/ShopList").then((result)=>
	result.json().then((resp)=>{
		console.log(resp.shop_list)
		setShopList(resp.shop_list)
	})
	)
	},[])


    return (
        <div>
            <section>
			<div class="blog">
				<div class="blog-wrapper">
					<h2 class="uppercase">Local Shop</h2>
					<div class="blog-container">
						
					
						
						
					</div>
					
				</div>
			</div>
			

		</section>
        </div>
    );
}

export default Shop;
