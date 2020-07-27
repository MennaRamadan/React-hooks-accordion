import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';


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

const options = [
    {
        label: "The color red",
        value: 'red'
    },
    {
        label: "The color blue",
        value: 'blue'
    },
    {
        label: "The color green",
        value: "green"
    }
];

const App = ()=> {
    return (<div>
                {/* <Accordion items={items}/> */}
                {/* <Search /> */}
                <Dropdown options={options}/>
            </div>) 
}

export default App;