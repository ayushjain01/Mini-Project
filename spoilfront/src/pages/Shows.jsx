import ShowLayout from "../layout/ShowsLayout";
import cardData from "./cardData";

const Shows = () => {
    return ( 
        <div>
            <ShowLayout
            heading='Shows'
            description="We believe that the small screen has some of the best stories to offer, whether you're looking for a heartwarming sitcom or an intense drama. We offers a vast collection of top-rated series that will keep you hooked from start to finish. With our spoiler scale, we help you avoid disappointing endings and make informed decisions about your next binge-worthy show. So whether you're in the mood for a comedy, a thriller, or a documentary, let WeSpoil be your guide to a personalized viewing experience."
            cardData={cardData}
            />
        </div>
     );
}
 
export default Shows;
