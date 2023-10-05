import React from "react";
import herosection from './Homeimg/herosection1.webp';
import Homecard from './../../components/Homecard/Homecard';
import delivery from './Homeimg/delivery-pickup.png';
import excusive from './Homeimg/exclusive-perks.png';
import local from './Homeimg/local-driver.png';
import Homecardtwo from "../../components/Homecardtwo/Homecardtwo";
import customer from './Homecard/customer-trust.png';
import fresh from './Homecard/fresh-ingredients.png';
import home from './Homecard/home-delivery.png';
import hunger from './Homecard/hunger.png';
import tiffin from './Homecard/tiffin-service.png';
import whatsapp from './Homecard/whatapp.png';
import healthy from './Homeimg/healthy.png';
import './Home.css';
const Home = () => {
    return (<>
        <div >
            <div className="herosection">
                <img src={herosection} className="herosecton-img"></img>
                <span className="herosection-text">Get food delivery and more</span>
                <div className="d-flex container flex-wrap  justify-content-around ">
                    <Homecard img={local} heading="Local favorites" text="Satisfy any craving with delivery from popular neighborhood restaurants and chains. Reorder go-tos or find something new." />
                    <Homecard img={delivery} heading="Delivery or pickup" text="Sit back and relax, have us deliver to you or skip the line with pickup." />
                    <Homecard img={excusive} heading="Exclusive Perks" text="
Discover more deals and restaurant rewards near you. Cash in on Perks and get $100s in savings."  />
                </div>
            </div>

            {/* home page second cards component */}
            <div className="container ">
                <h2 className=" heading-card">WHY TIFFIN DELIGHT</h2>
                <div className="d-flex container  justify-content-around  flex-wrap">
                    < Homecardtwo text="Order on
Call / Whatsapp" img={whatsapp} />
                    < Homecardtwo text="20000+ Happy &
trusted Customers" img={customer} />
                    < Homecardtwo text="Best tiffin services
In Pune" img={tiffin} />
                    < Homecardtwo text="Fresh & Quality
Ingredients" img={fresh} />
                    < Homecardtwo text="Free home delivery
around pune" img={home} />
                    < Homecardtwo text="Home like food for
every kind of Hunger" img={hunger} />
                </div>

            </div>
            {/* home page second cards component */}
            <div className="container mt-5">
                <h2 className=" heading-card mt-2">100 ℅ Fresh Heathy and Delicious Food
                </h2>
                <h4 className="text-align-center mt-2">Food like home, Away from home..

                </h4>
                <span className="text-halthy">Green Souls Kitchens has been serving 100% Fresh and Authentic Indian Food for over a decade in the city of Pune. Unlike other tiffin and catering services we  give you multiple options to choose your own meals as we have  got a wide range of menu selection. You can order according to your needs and desires as there is a choice between Jain food, Vegetarian food and Non vegetarian food. Moreover you can customise your own meal according to your cravings and get rid of the same old boring food .</span>
                <br></br>

                <img src={healthy} className="img-healthy"></img>

            </div>

        </div>
      
    
    </>

    )
}

export default Home