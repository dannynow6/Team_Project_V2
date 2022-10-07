import React, { useState, useEffect } from 'react'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import './CryptoList.css'
import axios from 'axios'
import { Table, Row, Col, Container } from 'reactstrap'


const CryptoList = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!data) return null;

    return (

            <Table hover responsive >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h %</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Volume(24h)</th>
                    <th scope="col">Circulating Supply</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <th scope="row">1</th>
                    <td><img src={data[0].image} alt="Bitcoin" width="25" height="25" /> {data[0].name}{" "}{data[0].symbol.toUpperCase()}</td>
                    <td>${data[0].current_price.toLocaleString()}</td>
                    <td>
                        {data[0].price_change_percentage_24h > 0 ? (
                            <span className='red'>
                                <FiArrowDown />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[0].market_cap.toLocaleString()}</td>
                    <td>${data[0].total_volume.toLocaleString()}</td>
                    <td>{data[0].circulating_supply.toLocaleString()}{" "}{data[0].symbol.toUpperCase()}</td>
                </tr>
                
            </tbody>
            </Table>
    );
}

export default CryptoList;