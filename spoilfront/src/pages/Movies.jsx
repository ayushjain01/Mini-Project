import Layout from "../layout/MovieLayout";
import cardData from "./cardData";

const Movies = () => {
    return ( 
        <div>
            <Layout
            heading='Movies'
            description="We've got you covered with a vast collection of movies that will move you like never before, from heartwarming dramas to spine-tingling thrillers. Our mission is to make sure you don't waste your time on disappointing endings, and our spoiler scale helps you make informed decisions about what to watch next. So sit back, relax, and let WeSpoil guide you to a personalized viewing experience."
            cardData={cardData}
            />
        </div>
     );
}
 
export default Movies;
