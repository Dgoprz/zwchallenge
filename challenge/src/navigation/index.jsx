import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { DataProvider } from '../context/dataContext';

export const Navigation = () => (
    <DataProvider>
        <Routes >
            {
                routes.map(({ path, name, component }) =>
                    <Route
                        key={path + name}
                        name={name}
                        path={path}
                        element={component}
                    />
                )
            }
        </Routes>
    </DataProvider>

);
