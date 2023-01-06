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
                        <div className="name"> 2345676</div>
                    </div>
                </>,
        },
        {
            title: 'Hash',
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
            title: 'Timestamp',
            dataIndex: 'timeStamp',
            key: 'timeStamp',
            width: 150,
        },
    ];

    const data = [
        {
            key: '1',
            block_height: 'John Brown',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            timeStamp: "6 sec ago",
        },
        {
            key: '2',
            block_height: 'Jim Green',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            timeStamp: "6 sec ago",
        },
        {
            key: '3',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            timeStamp: "6 sec ago",
        },
        {
            key: '4',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            timeStamp: "6 sec ago",
        },
        {
            key: '4',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            timeStamp: "6 sec ago",
        },
    ];

    return (
        <>
            <div className="dashboard_leaderboard_wrapper">
                <h3 className='table_title'>Leaderboard</h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 380, y: 210 }} pagination={false} />
            </div>
        </>
    )
}

export default LeaderBoard;