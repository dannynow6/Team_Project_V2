import React, { useState, useEffect } from 'react'
// import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import {FaCaretUp, FaCaretDown} from 'react-icons/fa'
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
            <Container >
                <Row >
                    <Col>
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
                
                <tr> {/* API DATA FOR COINGECKO RANK #1 - BITCOIN */}
                    <th scope="row">1</th>
                    <td><img src={data[0].image} alt={data[0].name} width="25" height="25" /> {data[0].name}{" "}<span className='grey'>{data[0].symbol.toUpperCase()}</span></td>
                    <td>${data[0].current_price.toLocaleString()}</td>
                    <td>
                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[0].market_cap.toLocaleString()}</td>
                    <td>${data[0].total_volume.toLocaleString()}</td>
                    <td>{data[0].circulating_supply.toLocaleString()}{" "}{data[0].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #2 - ETHEREUM */}
                    <th scope="row">2</th>
                    <td><img src={data[1].image} alt={data[1].name} width="25" height="25" /> {data[1].name}{" "}<span className='grey'>{data[1].symbol.toUpperCase()}</span></td>
                    <td>${data[1].current_price.toLocaleString()}</td>
                    <td>
                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[1].market_cap.toLocaleString()}</td>
                    <td>${data[1].total_volume.toLocaleString()}</td>
                    <td>{data[1].circulating_supply.toLocaleString()}{" "}{data[1].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #3 */}
                    <th scope="row">3</th>
                    <td><img src={data[2].image} alt={data[2].name} width="25" height="25" /> {data[2].name}{" "}<span className='grey'>{data[2].symbol.toUpperCase()}</span></td>
                    <td>${data[2].current_price.toLocaleString()}</td>
                    <td>
                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[2].market_cap.toLocaleString()}</td>
                    <td>${data[2].total_volume.toLocaleString()}</td>
                    <td>{data[2].circulating_supply.toLocaleString()}{" "}{data[2].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #4 */}
                    <th scope="row">4</th>
                    <td><img src={data[3].image} alt={data[3].name} width="25" height="25" /> {data[3].name}{" "}<span className='grey'>{data[3].symbol.toUpperCase()}</span></td>
                    <td>${data[3].current_price.toLocaleString()}</td>
                    <td>
                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[3].market_cap.toLocaleString()}</td>
                    <td>${data[3].total_volume.toLocaleString()}</td>
                    <td>{data[3].circulating_supply.toLocaleString()}{" "}{data[3].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #5 */}
                    <th scope="row">5</th>
                    <td><img src={data[4].image} alt={data[4].name} width="25" height="25" /> {data[4].name}{" "}<span className='grey'>{data[4].symbol.toUpperCase()}</span></td>
                    <td>${data[4].current_price.toLocaleString()}</td>
                    <td>
                        {data[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[4].market_cap.toLocaleString()}</td>
                    <td>${data[4].total_volume.toLocaleString()}</td>
                    <td>{data[4].circulating_supply.toLocaleString()}{" "}{data[4].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #6 */}
                    <th scope="row">6</th>
                    <td><img src={data[5].image} alt={data[5].name} width="25" height="25" /> {data[5].name}{" "}<span className='grey'>{data[5].symbol.toUpperCase()}</span></td>
                    <td>${data[5].current_price.toLocaleString()}</td>
                    <td>
                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[5].market_cap.toLocaleString()}</td>
                    <td>${data[5].total_volume.toLocaleString()}</td>
                    <td>{data[5].circulating_supply.toLocaleString()}{" "}{data[5].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #7 */}
                    <th scope="row">7</th>
                    <td><img src={data[6].image} alt={data[6].name} width="25" height="25" /> {data[6].name}{" "}<span className='grey'>{data[6].symbol.toUpperCase()}</span></td>
                    <td>${data[6].current_price.toLocaleString()}</td>
                    <td>
                        {data[6].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[6].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[6].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[6].market_cap.toLocaleString()}</td>
                    <td>${data[6].total_volume.toLocaleString()}</td>
                    <td>{data[6].circulating_supply.toLocaleString()}{" "}{data[6].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #8 */}
                    <th scope="row">8</th>
                    <td><img src={data[7].image} alt={data[7].name} width="25" height="25" /> {data[7].name}{" "}<span className='grey'>{data[7].symbol.toUpperCase()}</span></td>
                    <td>${data[7].current_price.toLocaleString()}</td>
                    <td>
                        {data[7].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[7].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[7].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[7].market_cap.toLocaleString()}</td>
                    <td>${data[7].total_volume.toLocaleString()}</td>
                    <td>{data[7].circulating_supply.toLocaleString()}{" "}{data[7].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #9 */}
                    <th scope="row">9</th>
                    <td><img src={data[8].image} alt={data[8].name} width="25" height="25" /> {data[8].name}{" "}<span className='grey'>{data[8].symbol.toUpperCase()}</span></td>
                    <td>${data[8].current_price.toLocaleString()}</td>
                    <td>
                        {data[8].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[8].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[8].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[8].market_cap.toLocaleString()}</td>
                    <td>${data[8].total_volume.toLocaleString()}</td>
                    <td>{data[8].circulating_supply.toLocaleString()}{" "}{data[8].symbol.toUpperCase()}</td>
                </tr>

                <tr> {/* API DATA FOR COINGECKO RANK #10 */}
                    <th scope="row">10</th>
                    <td><img src={data[9].image} alt={data[9].name} width="25" height="25" /> {data[9].name}{" "}<span className='grey'>{data[9].symbol.toUpperCase()}</span></td>
                    <td>${data[9].current_price.toLocaleString()}</td>
                    <td>
                        {data[9].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FaCaretDown />
                                {data[9].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FaCaretUp />
                                {data[9].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </td>
                    <td>{data[9].market_cap.toLocaleString()}</td>
                    <td>${data[9].total_volume.toLocaleString()}</td>
                    <td>{data[9].circulating_supply.toLocaleString()}{" "}{data[9].symbol.toUpperCase()}</td>
                </tr>

            </tbody>
            </Table>
                    </Col>
                </Row>
            </Container>

    );
}

export default CryptoList;