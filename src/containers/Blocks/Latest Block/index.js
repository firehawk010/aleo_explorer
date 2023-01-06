import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Col, Row, SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string';
import './index.scss'

const LatestBlock = () => {


    return (
        <>
            <div className="block_latestblock_wrapper">
                <h3 className='table_title'>Latest Block</h3>
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
                                10
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
                                2019/07/14 15:45:15
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
                               &rarr;
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default LatestBlock;