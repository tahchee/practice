import React, { Component, Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ItemList from './ItemList';
import './MusicChart.css';
import moment from 'moment';

function MusicChart() {
//export const MusicChart = () => {
    const [chartType, setChartType] = useState('domestic');
    const [itemList, setItemList] = useState([]);
    
    //state = {
    //    itemList: [],
    //};
    
    const getChartList = async () => {
        const add = 'http://localhost:3300/v1/chart/' + chartType;
        const response = await axios.request(add);

        //alert(response.data.chartList[0].title);
        setItemList(response.data.chartList);
    }

    const handleToggle = (event, selectedChartType) => {
        setChartType(selectedChartType);
    }

    useEffect(() => {
        getChartList();
    }, [chartType]);

 
    
    //render(){
        //const nowTime = moment().format('YYYY년 MM월 DD일 HH:mm');

        return (
            <Fragment>
                <div className={'title'}> 음악 차트 </div>
                <div className={'date'}> {moment().format('YYYY년 MM월 DD일 HH:mm')} </div>
                <ToggleButtonGroup
                    className={'togglebutton'}
                    onChange={handleToggle}
                    exclusive
                >
                    <ToggleButton value='domestic'>
                        국내
                    </ToggleButton>
                    <ToggleButton value='overseas'>
                        해외
                    </ToggleButton>
                </ToggleButtonGroup>
                <div>
                    <ItemList itemList={itemList} />
                </div>
            </Fragment>
        )
    //};
}

export default MusicChart;