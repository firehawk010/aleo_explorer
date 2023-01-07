import React from 'react'
import { Row } from '../../../components/Common';
import './index.scss'
import { blockData, transactionData } from './data';

const SingleBlockData = () => {
    return (
        <>
            <div className="singleblock_main_bg">
                <div className="singleblock_main_container">
                    <div className="block_container">
                        <div className="box_container">
                            <div className="block_title">
                                Block #23245
                            </div>
                            <div className="data_container" >
                                <div className="data_container_main_box" data-aos="fade-down">
                                    {
                                        blockData?.map((item,index) => {
                                            return (
                                                <React.Fragment key={item.key}>
                                                    <div className="data_box"  data-aos="fade-down" data-aos-delay={index * 300}>
                                                        <div className="key">{item.key} :</div>
                                                        <div className="value"> {item.value} </div>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transaction_container">
                        <div className="box_container">
                            <div className="transaction_title">
                                Transaction (2)
                            </div>
                            <div className="data_container">
                                <div className='data_container_main_box'>
                                    {
                                        transactionData?.map((singleItem, index) => {
                                            return (
                                                <div className="single_box_container" data-aos="fade-up" data-aos-delay={index * 300}>
                                                    {singleItem?.map((item) => {
                                                        return (
                                                            <React.Fragment key={item.key}>
                                                                <div className="data_box">
                                                                    <div className="key">{item.key} :</div>
                                                                    <div className="value"> {item.value} </div>
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlockData;