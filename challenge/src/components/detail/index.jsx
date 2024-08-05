import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Flex } from '../common/flex';
import ReadHeart from "../../assets/img/icons/heart-red.svg"
import WhiteHeart from "../../assets/img/icons/heart-white.svg"
import { useDataContext } from '../../context/dataContext';
import Loading from '../common/loaging';
import { listComic } from '../../services/dataTemp';
import { ComicBox } from '../common/comicBox';
import { apiCall } from '../../services/apiCall';

export const DetailComp = () => {
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState([])
    const [comics, setComics] = useState([]);
    const { favoriteList, charactersList, handleFavorite } = useDataContext();
    const { id } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!id) {
            navigate('/');
        } else {
            if (charactersList) {
                const foundItem = charactersList.find((item) => item?.id === Number(id));
                foundItem ? setCharacter(foundItem) : navigate('/')
            } else { navigate('/') }
        }

    }, [id, navigate]);

    useEffect(() => {

        if(id){
            setLoading(true);
            apiCall({
                url: `/characters/${id}/comics`,
                method: 'GET',
            }).then((response) => {
                setLoading(false);
                const data = response.data.data.results;
                setComics(data)
            }).catch(err => {
                console.log("Error-LlamadaAPI", err)
            })

        }

        //setComics(listComic.data.results)

    }, []);

    



    return (
        <Flex className="main-detail" >

            <Flex className="detail-content" direction="column"  >
                <Flex className="detail-section" >
                    <img className="charactImg" src={`${character?.thumbnail?.path}/standard_fantastic.${character?.thumbnail?.extension}`} alt="img" />
                    <Flex className="description-side" direction='column' >
                        <Flex className="head" justifyContent="space-between" alignItems="center">
                            <p className='name'>{character?.name}</p>
                            <img className='favIcon' src={favoriteList.includes(Number(id)) ? ReadHeart : WhiteHeart} alt="fav img"
                                onClick={() => { handleFavorite(Number(id), !favoriteList.includes(Number(id))) }} />
                        </Flex>
                        <p className='description'>{character?.description}</p>
                    </Flex>
                </Flex>

                {id && 
                <Flex className="comics-section" direction="column">
                    <p className='comicsTitle'>COMICS</p>
                    {loading ? <Loading /> :
                        <Flex className="comics-content">
                            {comics.map((item, index) =>
                                <ComicBox key={index} image={`${item?.thumbnail?.path}/portrait_fantastic.${item?.thumbnail?.extension}`}
                                    title={item.title} />)}
                        </Flex>}


                </Flex>}
            </Flex>
        </Flex>
    )
}
