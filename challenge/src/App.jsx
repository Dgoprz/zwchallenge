import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "./assets/sass/styles.scss";
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './navigation';


function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )
}

export default App