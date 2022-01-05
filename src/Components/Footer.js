import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
				<div class="footer">
					<div class="remark">
						<h3><i class="fas fa-bold"></i>ootie</h3>
						<p>Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<div class="social">
						<h6 class="uppercase">catch on social</h6>
							<a href="#"><i class="fab fa-facebook-f fb"></i></a>
							<a href="#"><i class="fab fa-twitter twit"></i></a>
							<a href="#"><i class="fab fa-dribbble drib"></i></a>
							<a href="#"><i class="fab fa-google-plus-g goo"></i></a>
						</div>
					</div>

				
					<div class="news-wrapper">
						<div class="news">
							<h5 class="uppercase">newsletter</h5>
							<p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
							<div class="email">
								<input type="email" placeholder="Enter Your Email.." name="" />
                                    <a href=""><button class="btn1"><i class="fas fa-paper-plane"></i></button></a>
							</div>
						</div>
							<div class="links-container">
								<ul class="links uppercase">
									<h5>information</h5>
									<a href="#"><li>HOME</li></a>
									<a href="#"><li>ABOUT US</li></a>
									<a href="#"><li>GALLERY</li></a>
									<a href="#"><li>SERVICES</li></a>
									<a href="#"><li>CONTACT US</li></a>
								</ul>
								<ul class="links uppercase">
									<h5>customer service</h5>
									<a href="#"><li>about us</li></a>
									<a href="#"><li>delivery &amp; returns</li></a>
									<a href="#"><li>warranty</li></a>
									<a href="#"><li>terms and conditions</li></a>
									<a href="#"><li>privacy policy</li></a>
								</ul>
								<ul class="links">
									<h5>contact info</h5>
									<h4>phone</h4>
									<p>+121 098 8907 9987</p>
									<h4>email</h4>
									<p>info@example.com</p>
									<h4>location</h4>
									<p class="capitalize">Honey Avenue, New York City</p>
								</ul>
							</div>
					
								
								<div class="copy-container">
									<small class="copyright">© 2019 Bootie. All rights reserved | Design by W3layouts.</small>
									<small class="arrow"><a href="#"><i class="fas fa-long-arrow-alt-up"></i></a></small>
								</div>
					</div>
				</div>
			</footer>
        </div>
    );
}

export default Footer;
