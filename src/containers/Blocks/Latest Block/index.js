import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { Col, Row, SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string';
import './index.scss'
import axios from "axios";
import { Link } from 'react-router-dom';

const LatestBlock = () => {
    const [blockData, setBlockData] = useState()
    async function getUser() {
        try {
            const response = await axios.get('https://vm.aleo.org/api/testnet3/latest/block');
            setBlockData(response?.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
    }, [])

    setInterval(() => {
        getUser();
    }, 6000);

    return (
        <>
            <div className="block_latestblock_wrapper">
                <h3 className='table_title'>Latest <span>Block</span> </h3>
                <div className="block_data_container">
                    {/* Block  */}
                    <Row>
                        <Col>
                            <div className="block_data_key">
                                Block :
                            </div>
                        </Col>
                        <Col>
                            <div className="block_data_value">
                                {blockData?.header?.metadata?.height}
                            </div>
                        </Col>
                    </Row>
                    {/* Network  */}
                    <Row>
                        <Col>
                            <div className="block_data_key">
                                Network :
                            </div>
                        </Col>
                        <Col>
                            <div className="block_data_value">
                                Testnet3
                            </div>
                        </Col>
                    </Row>
                    {/* TimeStamp  */}
                    <Row>
                        <Col>
                            <div className="block_data_key">
                                TimeStamp :
                            </div>
                        </Col>
                        <Col>
                            <div className="block_data_value">
                                {blockData?.header?.metadata?.timestamp}
                            </div>
                        </Col>
                    </Row>
                    {/* Complete Proof  */}
                    <Row>
                        <Col>
                            <div className="block_data_key">
                                Complete Proof :
                            </div>
                        </Col>
                        <Col>
                            <div className="block_data_value">
                                <Link to="/blocks/blockDetails">&rarr;</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default LatestBlock;