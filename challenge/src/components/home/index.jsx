import { useEffect, useState } from "react"
import { apiCall } from "../../services/apiCall"
import { Flex } from "../common/flex"
import { useDataContext } from "../../context/dataContext"
import Loading from "../common/loaging"
import { CardBox } from "../common/cardBox"
import { listCharact } from "../../services/dataTemp"
import SearchBar from "../common/searchBar"
import { useNavigate } from "react-router-dom"


export const HomeComp = () => {
    const [loading, setLoading] = useState(false);
    const { charactersList, setCharactersList, favoriteList, setFavoriteList, dataToShow, setDataToShow,
        seeFavorites, setSeeFavorites, handleFavorite } = useDataContext();
    const navigate = useNavigate();

    useEffect(() => {
        setSeeFavorites(false);
        
        if (charactersList.length == 0) {
            setLoading(true)
            apiCall({
                url: '/characters',
                method: 'GET',
            }).then((response) => {
                setLoading(false);
                //console.log("Response-->", response.data.data.results)
                const data = response.data.data.results;
                setDataToShow(data);
                setCharactersList(data)

            }).catch(err => {
                console.log("Error-LlamadaAPI", err)
            })
        }

        //const elements = listCharact.data.results;
        //setDataToShow(elements);
        //setCharactersList(elements)


    }, [])


    useEffect(() => {
        if (seeFavorites) {
            let newList = []
            charactersList.forEach(element => {
                if (favoriteList.includes(element.id)) {
                    newList.push(element)
                }
            });
            setDataToShow(newList);
        }
    }, [seeFavorites])

    const onFavorite = (event, id, add) => {
        event.stopPropagation();
        handleFavorite(id, add);
    }

    const handleSearch = (value) => {
        setSeeFavorites(false);
        setDataToShow(charactersList.filter(item => item.name.toUpperCase().includes(value.toUpperCase())))
    }

    const handleDetail = (id) => {
        navigate(`/detail/${id}`);
    }


    return (
        <Flex className="main-home" >

            {loading ? <Loading />
                :
                <Flex className="home-content" direction="column" >
                    {seeFavorites && <p className="favoriteTitle">FAVORITES</p>}
                    <Flex className="search-section" >
                        <SearchBar onSearch={handleSearch} />
                    </Flex>
                    <p className="resultText">{`${dataToShow.length} RESULTS`}</p>
                    <Flex className="card-section" >
                        {dataToShow.map((item, index) =>
                            <CardBox key={index}
                                id={item.id}
                                name={item.name}
                                image={`${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`}
                                isFavorite={favoriteList.includes(item.id)}
                                onCardClick={handleDetail}
                                onFavClick={onFavorite}

                            />)}

                    </Flex>
                </Flex>}
        </Flex>
    )
}