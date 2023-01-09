import { Button, Table } from 'antd';
import React from 'react'
import { Row } from '../../components/Common';
import Copy from '../../components/Copy';
import './index.scss';
import dollorIcon from '../../assets/images/icons8-us-dollar-circled.gif';

const Leaderboard = () => {


  const columns = [
    {
      title: 'Transaction Id',
      dataIndex: 'block_hash',
      key: 'block_hash',
      align: "center",
      width: 500,
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
      title: (
        <>
          Incentives (Since Block 130,888)
        </>
      ),
      dataIndex: 'incentives',
      key: 'incentives',
      width: 300,
      render: (data) =>
        <div>{data} credits</div>
    },
    {
      title: (
        <>
          Coinbase (Since Block 0)
        </>
      ),
      dataIndex: 'coinbase',
      key: 'coinbase',
      width: 300,
      render: (data) =>
        <div>{data} credits</div>
    },
  ];

  const data = [
    {
      key: '1',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: 10,
      coinbase: "10,546",
    },
    {
      key: '2',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
    {
      key: '3',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
    {
      key: '4',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
    {
      key: '4',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
    {
      key: '4',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
    {
      key: '4',
      block_hash: "xjhbiuedbhjbueibdejkdbeiudbjedmbeiubdkjemdewbdiubdkjbd",
      incentives: "10",
      coinbase: "10,546",
    },
  ];


  return (
    <>
      <div className="leaderboard_bg_container">
        <div className="leaderboard_main_container">
          <div className="leaderboard_top_container" data-aos="zoom-in" data-aos-delay={200}>
            <div className="box_container">
              <div className="table_title">
                Leaderboard Stats
              </div>
              <div className="stats_container" >
                <div className="stats">
                  <div className="key"> <span></span> Total Coinbase :</div>
                  <div className="value">12,34,56</div>
                </div>
                <div className="stats border_stats">
                  <div className="key">Total Incentives :</div>
                  <div className="value">12,34,56</div>
                </div>
                <div className="stats">
                  <div className="key">Number of Provers:</div>
                  <div className="value">12,349</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard_bottom_container" data-aos="zoom-in" data-aos-delay={200}>
            <div className="box_container">
              <div className="table_title">
                Leaderboard Ranking
              </div>
              <div className="leaderboard_ranking_table">
                <Table className='eutropia_table' columns={columns} dataSource={data} scroll={{ x: 950, y: 200 }} pagination={false} />
              </div>
              <div className="button_container">
                <Row>
                  <div className="button_container">
                    <Button type='primary' className='ant-btn-primary-secondary'>Back</Button>
                    <Button type='primary' className='ml-2'>Next</Button>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leaderboard;