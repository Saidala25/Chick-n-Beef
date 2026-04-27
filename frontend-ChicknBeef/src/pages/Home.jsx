import { images } from "../assets/home/images.js";
import HomeCard from "../components/Card/HomeCard/HomeCard.jsx";
import "./Home.css"

function Home(){
    return(
        <>
            <section className="section-burger">
                <div className="leftHome">
                    <div className="Text-home">
                        <h2>CHICK'N BEEF AGADIR BAY</h2>
                        <h3>QUALITY IS LIFE</h3>
                    </div>

                    <div className="HomeCard-style">
                        <HomeCard 
                            category="CHICKEN" 
                            name="CHICK'N SPECIAL" 
                            price="55" 
                            rating={4}
                            image={images.burgerCard}
                        />
                        <HomeCard 
                            category="Beef" 
                            name="CHICK'N Beef" 
                            price="50" 
                            rating={3}
                            image={images.burgerCard}
                        />
                    </div>
                </div>

                <div className="burger-container">
                    <img className="burger" src={images.burger} alt="Burger"/>
                    <img className="tomate1" src={images.tomate1} alt="tomate"/>
                    <img className="tomate2" src={images.tomate2} alt="tomate"/>
                    <img className="onion" src={images.onion} alt="onion"/>
                    <img className="ombre" src={images.Ellipse} alt="ombre"/>
                </div>

            </section>
        </>
    );
}

export default Home