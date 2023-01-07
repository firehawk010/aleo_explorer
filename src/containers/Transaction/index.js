import React from 'react'
import TransactionData from './Transactions Data';
import './index.scss'
import LatestBlock from './Latest Block';
import LatestTransaction from './Latest Transaction';

const Transaction = () => {
    return (
        <>
            <div className="block_main_bg">
                <div className="block_main_container">
                    <div className="block_container_layout">

                        <div className="box_container latest_block_container" data-aos="fade-down" data-aos-delay={50}>
                            <LatestBlock />
                        </div>

                        <div className="box_container latest_transaction_container" data-aos="fade-up" data-aos-delay={100}>
                            <LatestTransaction />
                        </div>
                        <div className="box_container blocks_container" data-aos="fade-left" data-aos-delay={200}>
                            <TransactionData />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction;