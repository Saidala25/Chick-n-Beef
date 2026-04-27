import "./HomeCard.css";

const HomeCard = ({ name, category, price, rating, image }) => {
  return (
    <div className="home-card">

            <div className="homecard-image">
                <img src={image} alt={name} />
            </div>

            <div className="homecard-content">
                    <div className="stars">
                        {/* On crée un tableau de 5 pour afficher les étoiles pleines ou vides */}
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
                            ★
                            </span>
                        ))}
                    </div>
                    <h3 className="TextCard">{category}</h3>
                    <h2 className="TextCard">{name}</h2>
                    <p className="price TextCard">{price}DH</p>
            </div>

            <div className="decor-yellow"></div>    

    </div>
  );
};

export default HomeCard