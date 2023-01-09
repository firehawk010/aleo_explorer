import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { Col, Row, SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString, unixToGMTTime, unixToGMTTimeWithTime } from '../../../utils/string';
import './index.scss'
import axios from "axios";

const LatestTransaction = () => {
    const [blockTx, setBlockTx] = useState()
    const [blockNewTx, setNewBlockTx] = useState()

    async function getTx() {
        try {
            const response = await axios.get('https://vm.aleo.org/api/testnet3/latest/height');
            setBlockTx(response?.data)
        } catch (error) {
            console.error(error);
        }
    }

    async function getNewTx() {
        try {
            const newResponse = await axios.get(`https://vm.aleo.org/api/testnet3/block/${blockTx}`);
            setNewBlockTx(newResponse?.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTx();
    }, [])

    useEffect(() => {
        if (blockTx) {
            getNewTx();
        }
    }, [blockTx])

    return (
        <>
            <div className="block_latestransaction_wrapper">
                <h3 className='table_title'>Latest Transaction</h3>
                <div className="transaction_data_container">
                    {/*  Transaction Id   */}
                    <Row>
                        <Col>
                            <div className="transaction_data_key">
                                Transaction Id :
                            </div>
                        </Col>
                        <Col>
                            <div className="transaction_data_value">
                                {blockNewTx?.transactions[0]?.id && truncateString(blockNewTx?.transactions[0]?.id, 6, 6)} <span>{blockNewTx?.transactions[0]?.id && <Copy text={blockNewTx?.transactions[0]?.id} />}</span>
                            </div>
                        </Col>
                    </Row>
                    {/* Network  */}
                    <Row>
                        <Col>
                            <div className="transaction_data_key">
                                Network :
                            </div>
                        </Col>
                        <Col>
                            <div className="transaction_data_value">
                                Testnet3
                            </div>
                        </Col>
                    </Row>
                    {/* TimeStamp  */}
                    <Row>
                        <Col>
                            <div className="transaction_data_key">
                                TimeStamp :
                            </div>
                        </Col>
                        <Col>
                            <div className="transaction_data_value">
                                {blockNewTx?.header?.metadata?.height}
                                {/* {blockNewTx?.header?.metadata?.height && unixToGMTTimeWithTime(blockNewTx?.header?.metadata?.height)} */}
                            </div>
                        </Col>
                    </Row>
                    {/* Complete Proof  */}
                    <Row>
                        <Col>
                            <div className="transaction_data_key">
                                Complete Proof :
                            </div>
                        </Col>
                        <Col>
                            <div className="transaction_data_value">
                                &rarr;
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default LatestTransaction;