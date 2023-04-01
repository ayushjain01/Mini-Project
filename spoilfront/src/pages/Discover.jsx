import DiscoverLayout from "../layout/DiscoverLayout";
import cardData from "./cardData";

const Discover = () => {
    return ( 
        <div>
            <DiscoverLayout
            heading='Discover'
            description=
"From hidden gems to cult classics, there's something for personally picked for you on our Discover page. So why not try something new and let WeSpoil take your viewing experience to the next level? "           
            cardData={cardData}
            
            />
        </div>
     );
}
 
export default Discover;
