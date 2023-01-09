import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { Row, SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string';
import './index.scss'

const BlockData = () => {


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
            title: 'Solutions',
            dataIndex: 'solutions',
            key: 'solutions',
            // width: 100,
        },
        {
            title: 'Coin Base Target',
            dataIndex: 'coinbase',
            key: 'coinbase',
            // width: 150,
        },
        {
            title: (
                <>
                    Proof Of Target
                </>
            ),
            dataIndex: 'proof',
            key: 'proof',
            // width: 150,
        },
        {
            title: 'Delta',
            dataIndex: 'delta',
            key: 'delta',
            // width: 100,
        },
        {
            title: 'Timestapm',
            dataIndex: 'timestamp',
            key: 'timestamp',
            // width: 150,
        },
    ];

    const data = [
        {
            key: '1',
            block_height: 'John Brown',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '2',
            block_height: 'Jim Green',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '3',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '4',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '5',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '6',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '7',
            block_height: 'Joe Black',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            solutions: "334",
            coinbase: "12345",
            proof: "5678",
            delta: "15s",
            timestamp: "2023/07/12 12:00:03",
        },
    ];

    return (
        <>
            <div className="block_blockData_wrapper">
                <h3 className='table_title'>Block</h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 780, y: 393 }} pagination={false} />
                <Row>
                    <div className="button_container">
                        <Button type='primary' className='ant-btn-primary-secondary'>Back</Button>
                        <Button type='primary' className='ml-2'>Next</Button>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default BlockData;