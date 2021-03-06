import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

/*
Only a functional component is required because we are only listing tasks and no
state management is being done.
*/
function ListItems(props){
    const items = props.items;
    console.log(items);
    const listItems = items.map(item => {
        return(
            <div className = "list" key = {item.key}>
                <p>
                    {
                    //item.text
                    }
                    <input type = "text"
                    id = {item.key}
                    value = {item.text}
                    onChange = {(e)=>{
                        props.setUpdate(e.target.value, item.key);
                    }}
                    />
                <span>
                    <FontAwesomeIcon className='faicon' 
                    icon='trash' 
                    onClick={ () => props.deleteItem(item.key)}>

                    </FontAwesomeIcon>
                </span>
                </p> 
            </div>
        );
    })
    return(
        <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    );
}
export default ListItems;