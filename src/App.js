import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';


const items= [
    {
        title: "What is React?",
        content: "It is a front end javascript library"
    },
    {
        title: "Why use React?",
        content: "React is a favorit JS library"
    },
    {
        title: "How do you use React",
        content: "By creating components"
    }
];

const App = ()=> {
    return (<div>
                {/* <Accordion items={items}/> */}
                <Search />
            </div>) 
}

export default App;