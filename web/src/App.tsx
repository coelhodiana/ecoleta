import React, { useState } from 'react';
import Header from './Header';

import './App.css';

function App(){
    const [ counter, setCounter ] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        setCounter(counter - 1);
    }

    return ( 
        <div>
            <Header title={ `Contador: ${ counter }`}/>
            <button type='button' onClick={handleIncrement}> + </button>
            <button type='button' onClick={handleDecrement}> - </button>
        </div>
     );
}
 
export default App;
