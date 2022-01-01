import React, { useEffect, useState } from "react";

const Contact = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const[phone_number , setPhoneNumber] = useState("")
    const[message , setMessage] = useState("")

    function saveContact()
    {
        console.warn(name , email , phone_number , message)
        fetch("http://192.168.43.102:8000/ContactUsView",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name , email , phone_number , message})
        }).then((result)=>{
            // console.warn(result)
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
        setName("")
        setEmail("")
        setPhoneNumber("")
        setMessage("")
        
    }

    return (
        <div>
            <div class="contact-wrapper">
					<h2 class="uppercase text-center">contact us</h2>
					<div class="contact-container">
						<form class="form-contact">
							<input type="text" required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" class="name" name="" />
							<input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" class="email" name="" />
							<input type="text" required value={phone_number} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone" class="number" name="" />
							<textarea type="text" required placeholder="Message" onChange={(e)=>setMessage(e.target.value)} class="message" rows="10">{message}</textarea>
						</form>
						<ul class="links">
							<h4><i class="fas fa-phone-square"></i> phone</h4>
							<div class="phone">
								<small>+91 76 208 600 53</small><br/>
								<small>+91 76 208 600 53</small>
							</div>
							<h4><i class="far fa-envelope"></i> email</h4>
							<div class="mail">
								<small>sachin.pawar7802@gmail.com</small><br />
								<small>sachinnihcas373@gmail.com</small>
							</div>
							<h4><i class="fas fa-fax"></i> Fax</h4>
							<p>(800) 123-80088</p>
							<h4><i class="fas fa-map-marker-alt"></i> location</h4>
							<p class="capitalize">Ahmednagar Maharashtra 414002</p>
						</ul>
					</div>
					<button onClick={saveContact} class="uppercase submit">Submit</button>
				</div>
        </div>
    );
}

export default Contact;
