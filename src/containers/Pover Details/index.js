import React from 'react'
import { Row } from '../../components/Common';
import './index.scss'
import { blockData, latestTransaction, latestBlock } from './data';
import Copy from '../../components/Copy';
import { Table } from 'antd';

const Poverdetail = () => {


    const columns = [
        {
            title: 'Incentives',
            dataIndex: 'incentives',
            key: 'incentives',
            // align: "center",
            // width: 150,
            render: (hash) =>
                <>
                    <div className="hash_container">
                        <div className="hash">{hash} </div>
                    </div>
                </>

        },
        {
            title: 'Coinbase',
            dataIndex: 'coinbase',
            key: 'coinbase',
            // width: 150,
        },
        {
            title: 'Number of Blocks',
            dataIndex: 'noOfBlocks',
            key: 'noOfBlocks',
            // width: 200,
        },
        {
            title: 'Number of Solutions',
            dataIndex: 'noOfSolutions',
            key: 'noOfSolutions',
            // width: 200,
        },
        {
            title: 'Percentage of Solutions',
            dataIndex: 'percentageOfSolutions',
            key: 'percentageOfSolutions',
            // width: 200,
        },
    ];

    const data = [
        {
            key: '1',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '2',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '3',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '4',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '4',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '4',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
        {
            key: '4',
            incentives: "119,362 credits",
            coinbase: "136909 credits",
            noOfBlocks: "2023/07/12 12:00:03",
            noOfSolutions: 248006,
            percentageOfSolutions: 3.40
        },
    ];

    return (
        <>
            <div className="singleblock_main_bg">
                <div className="singleTransaction_main_container">
                    <div className="block_container">
                        <div className="box_container">
                            <div className="block_title">
                                Prover <span>Detail</span> 
                            </div>
                            <div className="data_container" >
                                <div className="data_container_main_box" >
                                    <div className="data_box_container_box" data-aos="fade-down" data-aos-offset="0">

                                        <div className="data_box" >
                                            <div className="key">Address:</div>
                                            <div className="value"> aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu <span><Copy text={"aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu"} /></span> </div>
                                        </div>
                                        <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                            <div className="key">Rank:</div>
                                            <div className="value"> 7 </div>
                                        </div>
                                        <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                            <div className="key">First Block:</div>
                                            <div className="value"> 2321 </div>
                                        </div>
                                        <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                            <div className="key">Last Block:</div>
                                            <div className="value"> 4532 </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="poverDetail_transaction_table" data-aos="fade-right" data-aos-offset="0">
                                    <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 820, y: 410 }} pagination={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest_block_container">
                        <div className="box_container">
                            <div className="transaction_title">
                                Latest Block
                            </div>
                            <div className="data_container">
                                <div className='data_container_main_box'>
                                    {
                                        latestBlock?.map((item, index) => {
                                            return (
                                                <div className="single_box_container" data-aos="fade-up" data-aos-delay={index * 300} data-aos-offset="0" >

                                                    <React.Fragment key={item.key}>
                                                        <div className="data_box">
                                                            <div className="key">{item.key} :</div>
                                                            <div className="value"> {item.value} </div>
                                                        </div>
                                                    </React.Fragment>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="transaction_container">
                        <div className="box_container">
                            <div className="transaction_title">
                                Latest Transaction
                            </div>
                            <div className="data_container">
                                <div className='data_container_main_box'>
                                    {
                                        latestTransaction?.map((item, index) => {
                                            return (
                                                <div className="single_box_container" data-aos="fade-up" data-aos-delay={(index + 1) * 300} data-aos-offset="0" >

                                                    <React.Fragment key={item.key}>
                                                        <div className="data_box">
                                                            <div className="key">{item.key} :</div>
                                                            <div className="value"> {item.value} </div>
                                                        </div>
                                                    </React.Fragment>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poverdetail;