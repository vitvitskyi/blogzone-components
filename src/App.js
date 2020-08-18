import React from 'react';
import {Tabs} from './components/Tabs';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Tabs tabs={[1,2,3,4,5]}/>
            </header>
        </div>
    );
}

export default App;