import React from 'react';
import { Space, Table, Tag } from 'antd';
import { SvgIcon } from '../../../components/Common';
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string';
import './index.scss'

const LatestBlock = () => {


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
            block_hash: "at16342vkp07at8us05pfe68h079ra2yhly4ejpzx6n4e992tpvpuqs8zpd09",
            timeStamp: "6 sec ago",
        },
        {
            key: '2',
            block_height: '368426',
            block_hash: "at23546vkp07at8us05pfe68h079ra2yhly4ejpzx6n4e992tpvpuqs8zgh54",
            timeStamp: "12 sec ago",
        },
        {
            key: '3',
            block_height: '368425',
            block_hash: "at23142vkp07at8us05pfe68h079ra2yhly4ejpzx6n4e992tpvpuqs8dd341",
            timeStamp: "18 sec ago",
        },
        {
            key: '4',
            block_height: '368424',
            block_hash: "at87342vkp07at8us05pfe68h079ra2yhly4ejpzx6n4e992tpvpuqs8zxs88",
            timeStamp: "24 sec ago",
        },
        {
            key: '4',
            block_height: '368423',
            block_hash: "at09242vkp07at8us05pfe68h079ra2yhly4ejpzx6n4e992tpvpuqs8zp67d",
            timeStamp: "30 sec ago",
        },
    ];

    return (
        <>
            <div className="dashboard_latestblock_wrapper">
                <h3 className='table_title'>  Latest <span>Block</span> </h3>
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 380, y: 210 }} pagination={false} />
            </div>
        </>
    )
}

export default LatestBlock;