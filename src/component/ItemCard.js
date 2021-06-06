import React, { useState } from 'react';
import { ListItem, ListItemText, Image } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './ItemCard.css';

const titleStyle = {
    textAlign : "left",
    marginLeft: "20px",
    marginRight: "20px",
    width: "150px",
}
const imageStyle = {
    width: "100px",
    height: "100px",
}

const rankStyle = {
    width: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    textAlign : "left"
}

const singerStyle = {
    textAlign: "right",
    width: "30px",
}

function ItemCard(props) {
    //const [musicId, setMusicId] = useState(0);
    const history = useHistory();
    const handleListClick = (id) => {      
        //setMusicId(id);

        //alert(musicId);
        history.push({
            pathname : "/detail",
            state : {
                id : id,
            },
        });
    }

    return (
        <ListItem button onClick={() => handleListClick(props.id)}>
            <ListItemText style={rankStyle} primary={props.rank}/>
            <img style={imageStyle} src={props.imgUrl} />
            <ListItemText className={'ellipsis'} style={titleStyle} primary={props.title}/>
            <ListItemText className={'ellipsis'} style={singerStyle} primary={props.singer}/>
        </ListItem>
    )
}
export default ItemCard;