import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';
import List from '@material-ui/core/List';
import ItemCard from './ItemCard';
import './ItemList.css';

function ItemList(props) {
    const { itemList } = props;

    const getImage = (url) => {
        const baseUrl = process.env.PUBLIC_URL + '/images/';
        //const baseUrl = '%PUBLIC_URL%/images/';
    return baseUrl + url;
    };

    return (
        
        <List>
            {itemList && itemList.map((item, index) => {
                return (
                    <ItemCard
                        key={index}
                        id={item.id}
                        rank={item.rank}
                        title={item.title}
                        singer={item.singer}
                        imgUrl={getImage(item.imageUrl)}
                    />
                );
            })}
        </List>
        
    );

} export default ItemList;