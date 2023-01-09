import React from 'react';
import { Space, Table, Tag } from 'antd';
import Copy from '../../../components/Copy';
import { truncateString } from '../../../utils/string';
import { SvgIcon } from '../../../components/Common';
import './index.scss';

const LatestTransaction = () => {


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
            block_height: '368427',
            block_hash: "at21156whazwpc22ytqg8c8cfu0crhrmurxvqurqvurkqsp3y67a99urq6995ym",
            timeStamp: "6 sec ago",
        },
        {
            key: '2',
            block_height: '368426',
            block_hash: "at871twlwh99h8wey9ms2jfkw6twtfl7ch5ldlgcd7tnwrvctjlvyuu8sryd3j9",
            timeStamp: "12 sec ago",
        },
        {
            key: '3',
            block_height: '368425',
            block_hash: "at231aa7rdx7mtvys2mjcqsuc02ja3l6gv8set78vcyhmsgpcmkg9e58qc74fzg",
            timeStamp: "18 sec ago",
        },
        {
            key: '4',
            block_height: '368424',
            block_hash: "at211r88tx77jjmlrfccxdyt29hfd0lhvhgk4pf7sn8r9wgayej4pdsysz8rf6t",
            timeStamp: "24 sec ago",
        },
        {
            key: '5',
            block_height: '368423',
            block_hash: "at091mrlnmue8fjj5s39345e9t32d8lj807syt4dln3rwdewep380jcyszcxjt6",
            timeStamp: "30 sec ago",
        },
    ];

    return (
        <>
            <div className="dashboard_latest_transaction_wrapper">
                <h3 className='table_title'>Latest <span>Transaction</span> </h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 380, y: 210 }} pagination={false} />
            </div>
        </>
    )
}

export default LatestTransaction;