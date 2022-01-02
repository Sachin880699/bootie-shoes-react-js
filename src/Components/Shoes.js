import React, {useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

const Shoes = () => {
    const [shopingitem , setShopingitem] = useState([])
    const [shopingdiscountitem , setShopingdiscountitem] = useState([])

    const [filteredData,setFilteredData] = useState("");

    useEffect(()=>{
        fetch("http://192.168.43.102:8000/SellingItemList").then((result)=>
    result.json().then((resp)=>{
        console.warn(resp.special_discount_offer)
        setShopingitem(resp.user_list)
        setShopingdiscountitem(resp.special_discount_offer) 
    })
    )
    },[])

    const handleSearch = () =>{
        fetch("http://192.168.43.102:8000/SellingItemFilter",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({filteredData})
        }).then((result)=>{
            result.json().then((resp)=>{
                setShopingitem(resp.user_list)

            })
        })
    }


    return (
        <div>
            <section>
			<div class="shop-wrapper">
				<div class="shop-grid">
					<div class="shop-col-1">
						<div class="col-1-heading">
							<h5 class="uppercase">Search Here..</h5>
							<div class="product-search">
								<input type="text" value={filteredData} onChange={(e)=>setFilteredData(e.target.value)} name="product-name" placeholder="Product name..." />
                                    <button style={{height:"46px"}} onClick={handleSearch} ><a href="#"><span class="fas fa-search"></span></a></button>
							</div>
						</div>

						<div>
							<h5 class="uppercase">Occasion</h5>
							<ul class="collection-list">
								<li><input type="checkbox" /><p>Casuals</p></li>
								<li><input type="checkbox" /><p>Party</p></li>
								<li><input type="checkbox" /><p>Wedding</p></li>
								<li><input type="checkbox" /><p>Ethnic</p></li>
							</ul>
						</div>
						
						
						
						
	
						<div class="special-deals-container">
							<div class="deals-grid">
								<h5 class="uppercase">Special Deals</h5>
								{
                                    shopingdiscountitem.map((res , index)=>

                                    <div class="deal-row">
									<img src={res.sellingitem.image} alt="shoe_image" width="100" height="100" />
									<span class="deal-text">
										<p>{res.sellingitem.item_name}</p>
										<p><a href="#">&#8377; 180.00</a></p>
									</span>
								   </div>

                                    )
                                }
								
                                
							</div>
						</div>
					</div>
					
					<div class="arrival shop-col-2"> shopingitem
						{
                            shopingitem.map((res,index)=>
                            <Link to={`/home/`+res.id}>
                            <div class={`item item-${index+1}`} style={{height:"413px"}}>
							<img class="img-responsive" src={res.image} alt="shoes_image" />
							<button class="arrival-button uppercase">New</button>
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
                        }
						
						
					</div>
					
				</div>
				<div class="flat50">
						<img class="img-responsive" src="assets/media/single.jpg" alt="shoe-image" />
						<div class="flat50-text">
							<p>Flat 50% Off</p>
							<span class="uppercase"><a href="#">Shop Now</a></span>
						</div>
					</div>
			</div>
		</section>
        </div>
    );
}

export default Shoes;
