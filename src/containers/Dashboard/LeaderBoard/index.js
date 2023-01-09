import React from 'react';
import { Space, Table, Tag } from 'antd';
import { SvgIcon } from '../../../components/Common';
import { truncateString } from '../../../utils/string';
import Copy from '../../../components/Copy';
import './index.scss'

const LeaderBoard = () => {

    const columns = [
        {
            title: 'Height',
            dataIndex: 'block_height',
            key: 'block_height',
            width: 150,
            render: (text) =>
                <>
                    <div className="asset_with_icon">
                        <div className="asset_icon">
                            <SvgIcon name="block-icon" />
                        </div>
                        <div className="name"> {text}</div>
                    </div>
                </>,
        },
        {
            title: 'Prover address',
            dataIndex: 'block_hash',
            key: 'block_hash',
            align: "center",
            width: 150,
            render: (hash) =>
                <>
                    <div className="hash_container">
                        <div className="hash">{truncateString(hash.toString(), 6, 6)} </div>
                        <div className="copy_icon"> <Copy text={hash} /> </div>
                    </div>
                </>

        },
        {
            title: 'Incentives',
            dataIndex: 'timeStamp',
            key: 'timeStamp',
            width: 150,
        },
    ];

    const data = [
        {
            key: '1',
            block_height: '368427',
            block_hash: "aleo1548889twyay7cl50cnk6x6hjlsv6hzs603ylcqhswf5kt5pvzvxqk8xexu",
            timeStamp: "94,114 credits",
        },
        {
            key: '2',
            block_height: '368426',
            block_hash: "aleo1qeyuw2vq3lmukd3z6ryevq75lvkfutxj3743693m5dadghczqsqsrshe0r",
            timeStamp: "96,011 credits",
        },
        {
            key: '3',
            block_height: '368425',
            block_hash: "aleo1666y6x0qcxa7syyahys6tzalp3aqppqwj7tdf6purwtlyjkpwsxs3wtxlp",
            timeStamp: "34,992 credits",
        },
        {
            key: '4',
            block_height: '368424',
            block_hash: "aleo1222yvwq896crn68n9csu7mc0endday26wey5ff8kxzzeddqztq8sxvchcj",
            timeStamp: "12,517 credits",
        },
        {
            key: '4',
            block_height: '368423',
            block_hash: "aleo1t0team9fw85wn992jz5c9u0j9lfgksmd7luayxrqa6h4xmewqgysvlv329",
            timeStamp: "33,912 credits",
        },
    ];

    return (
        <>
            <div className="dashboard_leaderboard_wrapper">
                <h3 className='table_title'>Latest <span>Leaderboard</span> </h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 380, y: 210 }} pagination={false} />
            </div>
        </>
    )
}

export default LeaderBoard;