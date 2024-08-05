import React, { createContext, useContext, useState } from 'react';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [charactersList, setCharactersList] = useState([])
    const [favoriteList, setFavoriteList] = useState([])
    const [dataToShow, setDataToShow] = useState([])
    const [seeFavorites, setSeeFavorites] = useState(false);
    
    const handleFavorite = (id, add) => {
        add ? setFavoriteList([...favoriteList, id]) :
            setFavoriteList(favoriteList.filter(item => item !== id))
    }


    return (
        <DataContext.Provider value={{ charactersList, setCharactersList, favoriteList, setFavoriteList,
            dataToShow, setDataToShow, seeFavorites, setSeeFavorites, handleFavorite
         }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);