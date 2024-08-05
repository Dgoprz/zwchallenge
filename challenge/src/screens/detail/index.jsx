import { Header } from "../../components/header";
import { Main } from "../../components/common/main";
import { DetailComp } from "../../components/detail";


export const Detail = () => {
    
    return (
        <Main className="detail">
            <Header />
            <DetailComp />
        </Main>
    );
}