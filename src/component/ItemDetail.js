import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import './ItemDetail.css';

function ItemDetail () {

    const location = useLocation();
    const [detail, setDetail] = useState();
    const [genre, setGenre] = useState('');
    const [lyricist, setLyricist] = useState('');
    const [melodizer, setMelodizer] = useState('');
    const [singer, setSinger] = useState('');
    const [title, setTitle] = useState('');
    const history = useHistory();

    const loadItem = async() => {
        const props = location.state;
        const add = 'http://localhost:3300/v1/chart/detail/' + props.id;

        if(detail == null || detail == undefined){
            await axios.get(add).then((response) => {
                let res = response.data.chart;
                
                setDetail(res);
                setTitle(res.title);
                setSinger(res.singer);
                setGenre(res.genre);
                setLyricist(res.lyricist);
                setMelodizer(res.melodizer);
            });
        }
    }

    const handleArrowClick = () => {    
        history.push("/");
    }

    useEffect(() => {
        loadItem();
    })

    return(
        <Card variant="outlined">
            <IconButton onClick={handleArrowClick}>
                <ArrowBackIcon fontSize="large" color="primary"/>
            </IconButton>
            <CardContent className={'detail'}>
                <Typography variant="h3" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    {singer}
                </Typography>
                <tbody>
                    <tr>
                        <td><Typography variant="h6" className={'subtitle'}> 장르 </Typography></td>
                        <td><Typography className={'text'}> {genre} </Typography></td>
                    </tr>
                    <tr>
                        <td><Typography variant="h6" className={'subtitle'}> 작사 </Typography></td>
                        <td><Typography className={'text'}> {lyricist} </Typography></td>
                    </tr>
                    <tr>
                        <td><Typography variant="h6" className={'subtitle'}> 작곡 </Typography></td>
                        <td><Typography className={'text'}> {melodizer} </Typography></td>
                    </tr>
                </tbody>
            </CardContent>
        </Card>
    )
    
}

export default ItemDetail;