import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { Row, SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string';
import './index.scss'

const TransactionData = () => {


    const columns = [
        {
            title: 'Transaction Id',
            dataIndex: 'block_hash',
            key: 'block_hash',
            align: "center",
            // width: 150,
            render: (hash) =>
                <>
                    <div className="hash_container">
                        {/* <div className="hash">{truncateString(hash.toString(), 6, 6)} </div> */}
                        <div className="hash">{hash} </div>
                        <div className="copy_icon"> <Copy text={hash} /> </div>
                    </div>
                </>

        },
        {
            title: 'Block',
            dataIndex: 'block',
            key: 'block',
            width: 150,
        },
        {
            title: 'Timestapm',
            dataIndex: 'timestamp',
            key: 'timestamp',
            width: 200,
        },
    ];

    const data = [
        {
            key: '1',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '2',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '3',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '4',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '4',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '4',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
        {
            key: '4',
            block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
            block: "10",
            timestamp: "2023/07/12 12:00:03",
        },
    ];

    return (
        <>
            <div className="block_TransactionData_wrapper">
                <h3 className='table_title'>Transactions</h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 820, y: 393 }} pagination={false} />
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

export default TransactionData;