import coverImage from '../../ui/assets/additional.jpg'
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

function Cover (){
    return(
        <div className="z-0 relative w-full h-64">
            <Link to="/" className="absolute top-0 left-0 m-2 z-10 text-white text-3xl"><IoArrowBackCircleOutline/> </Link>
            <img
                className="z-0 mt-6 w-full h-full rounded-xl shadow-xl object-cover brightness-110"
                src={coverImage}
                alt="coverImage"
            />
        </div>
    );
}
export default Cover;