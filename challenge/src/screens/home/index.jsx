import { Header } from "../../components/header";
import { Main } from "../../components/common/main";
import { HomeComp } from "../../components/home";
//import { useEffect, useContext } from "react";
//import AuthContext from "../../context/authProvider";

export const Home = () => {

   // const { setMainData } = useContext(AuthContext);
    
    
    
    return (
        <Main className="home">
            <Header />
            <HomeComp />
        </Main>
    );
}