// contains the information to be displayed for each bakery item
import * as React from 'react';
import {
    Button,

} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './StyleItem.css';

export default function ShopItem({item}){
    const [inCart, setIsInCart] = React.useState(true);
    const [buttonDisplayText, setButtonText] = React.useState("Add to Cart");

    const handleClick = () => {
        setIsInCart(!inCart);
        if (inCart == false){
            setButtonText("Add to Cart");
        } else {
            setButtonText("Remove from Cart")
        }
    }


    return (
        <div className="card-container">
            <div className="image">
                <img src={item.image}/>
            </div>
            <div className="content">
                <h3>{item.name}</h3>
                <category>Category: {item.category}</category>
                <br></br><br></br>
                <info><b>${item.price}</b> | {item.calories} kcal</info>
                
                {item.popularity}
            </div>
            <div className="buttons">
                <Button sx={{borderRadius: 2,
                        width: '80%'}} 
                    onClick={handleClick}
                    color={inCart ? "primary" : "secondary"}
                    variant={inCart ? "contained" : "outlined"}
                    startIcon={inCart? <ShoppingCartIcon/> : <RemoveCircleOutlineIcon/>}>
                    {buttonDisplayText}
                </Button>
            </div>
        </div>
    );
}