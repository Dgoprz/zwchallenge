import { useEffect, useState } from "react";
import { Flex } from "../common/flex";
import Logo from "../../assets/img/icons/logo.svg"
import Heart from "../../assets/img/icons/heart-red.svg"
import { Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";


export const Header = () => {
    const [ countFav, setCountFav] = useState(0)
    const { favoriteList,charactersList , setDataToShow, seeFavorites, setSeeFavorites } = useDataContext();
    const navigate = useNavigate();

    useEffect(()=>{
        setCountFav(favoriteList.length);
    },[favoriteList]);

    
    const seeAll = () =>{
        setSeeFavorites(false);
        setDataToShow(charactersList);
    }
    
    const showFavorites=()=>{
        setSeeFavorites(true);
        navigate("/")
    } 

    return (
        <header>
            <Flex className="header" alignItems="center" >
                <Flex className="top-header-area" alignItems="center" justifyContent="space-between">
                    <Flex className="logoImg">
                        <Link to="/home"><img src={Logo} alt="Logo" onClick={seeAll} /></Link>
                    </Flex>
                    <Flex className="fav-section" alignItems="center">
                        <img src={Heart} alt="heart icon" onClick={(showFavorites)} />
                        <p className="fav-count">{countFav}</p>
                    </Flex>
                </Flex>
            </Flex>
        </header>
    );
};