import React from 'react'
import BlockData from './Blocks Data';
import './index.scss'
import LatestBlock from './Latest Block';
import LatestTransaction from './Latest Transaction';

const Blocks = () => {
    return (
        <>
            <div className="block_main_bg">
                <div className="block_main_container">
                    <div className="block_container_layout">

                        <div className="box_container latest_block_container" data-aos="fade-down" data-aos-delay={50}>
                            <LatestBlock />
                        </div>

                        <div className="box_container latest_transaction_container">
                            <LatestTransaction />
                        </div>
                        <div className="box_container blocks_container" data-aos="fade-left" data-aos-delay={200}>
                            <BlockData />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Blocks;