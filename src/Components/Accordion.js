import React , {useState} from 'react';

const Accordion = ({items})=> {

    //THIS NOT MEANS CREATING ARRAY, BUT ACCESS FIRST ELEMENT IN useSate IN ACTIVEINDEX AND SECOND ONE IN SETACTIVEINDEX
    //FIRST ONEIS PIEACE OF STATE AND SECOND ONE IS FUNCTION TO UPDATE THIS PIEACE
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        
        return(
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={ () => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        )
    })

    return(
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;