import { Flex } from "./flex";
import WhiteHeart from "../../assets/img/icons/heart-white.svg"
import RedHeart from "../../assets/img/icons/heart-red.svg"

export const CardBox = ({id, image, name, isFavorite=false, onFavClick, onCardClick })=>{

    return(
        <Flex className="card-box" direction="column" onClick={()=>{onCardClick(id)}}>
            <img  className="card-image" src={image} alt="image" />
            <Flex className="divisor-red"></Flex>
            <Flex className="name-card-sect" justifyContent="space-between" alignItems="center">
                <p className="name">{name}</p>
                <img className="favIconCard" src={isFavorite? RedHeart : WhiteHeart} 
                    alt="fav icon"  onClick={(e)=>{onFavClick(e, id, isFavorite? false : true)}} />
            </Flex>
        </Flex>
    );
}