import React, { useState } from 'react';
import { SvgIcon } from '../../components/Common';
import './index.scss'
import LatestBlock from './LatestBlock';
import LatestTransaction from './LatestTransaction';
import LeaderBoard from './LeaderBoard';
import TransactionHistoryGraph from './TransactionHistoryGraph';

const Dashboard = () => {


    return (
        <>
            <div className="dashboard_cards_main_container">
                <div className="dashboard_cards_container">
                    <div className="darhboard_cards latest_blocks box_container" >
                        <LatestBlock />
                    </div>
                    <div className="darhboard_cards latest_transactions box_container" >
                        <LatestTransaction />
                    </div>
                    <div className="darhboard_cards transaction_history box_container" >
                        <TransactionHistoryGraph />
                    </div>
                    <div className="darhboard_cards leaderboard box_container" >
                        <LeaderBoard />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;