import React from 'react';

class Home extends React.Component{
    render() {
        return(
            <div>
            <header>
                <div class="flex-container">
                    <div class="title">Kandid8<span class="symbol">♦</span>
                    </div>
                    <div class="options">
                        <select name="features" id="features">
                            <option value="features">Features</option>
                        </select>
                        <a href="#" target="_blank" id="a" >Pricing</a>
                        <a href="#" id="a">Contact Us</a>
                    </div>
                    <div>
                        <button class="signup">SIGN UP</button>
                        <button class="login">LOG IN</button>
                    </div>
                </div>
            </header><br/><br/><br/><br/><br/><br/>
        {/* <!-- title --> */}
            <div>
                <h1 class="contact">Contact Us</h1>
            </div>
        
            <div class="flex2">
                {/* <!-- image --> */}
                <div>
                    <img src="https://media.istockphoto.com/vectors/communication-flat-icon-vector-id1131290648?k=20&m=1131290648&s=612x612&w=0&h=25T0JBEBjp0pNN3cSjT06focgCIqfzzQZa4IkjVpzNY=" alt="img" />
                </div>
        
                {/* <!-- form --> */}
                <div class="form">
                    <form action="">
                        <label for="name">Name*</label>
                            <input type="text" name="name" id="name" placeholder="Name" required />
                        
                        <label for="email">Email Address*</label>
                            <input type="email" name="email" id="email" placeholder="Email Address" required />
                        
                        <label for="message">Message body</label>
                            <textarea name="message" id="message" cols="10" rows="7" placeholder="Send message..."></textarea>
                            <div class="send">
                                <button>SEND</button>
                            </div>   
                    </form>
                </div>
                {/* <!-- end of form --> */}
            </div>
        {/* <!-- footer --> */}
        <footer>
            <h2 class="title2">Kandid8<span class="symbol">♦</span>
            </h2>
            <div class="footer">
                {/* <!-- company --> */}
                <div class="company">
                    <p>Company</p><br />
                    <a href="#" class="a">About us</a>
                    <a href="#" class="a">Careers</a>
                    <a href="#" class="a">Contact us</a>
                </div>
        
                {/* <!-- legal --> */}
                <div class="legal">
                    <p>Legal</p><br />
                    <a href="#" class="a">Privacy Policy</a>
                    <a href="#" class="a">Cookie Policy</a>
                    <a href="#" class="a">Terms Of Service</a>
                </div>
        
                {/* <!-- support --> */}
                <div class="support">
                    <p>Support</p><br />
                    <a href="#" class="a">Help Centre</a>
                    <a href="#" class="a">Candidate FAQ</a>
                    <a href="#" class="a">Examiner FAQ</a>
        
                </div>
        
                {/* <!-- logos --> */}
                <div class="media">
                    <a href="#">
                        <i class="fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin fa-2x"></i>
                    </a><br /><br />
                    <a href="#"><i class="fa-brands fa-youtube fa-2x"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram fa-2x"></i></a>
                </div>
        
        
        
        
        
            </div>
        </footer>
        </div>
        );
    }
}

export default Home;
