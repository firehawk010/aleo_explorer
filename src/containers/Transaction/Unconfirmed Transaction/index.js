import React from 'react'
import Copy from '../../../components/Copy';
import './index.scss';

const UnconfirmedTransaction = () => {
    return (
        <>
            <div className="unconfirmedTx_bg">
                <div className="unconfirmedTx_main_container">
                    <div className="unconfirmedTx_main">
                        <div className="box_container">
                            <div className="title">Transaction Detail</div>
                            <div className="data_container_main_box" >
                                <div className="data_box_container_box" data-aos="fade-down" data-aos-offset="0">

                                    <div className="data_box" >
                                        <div className="key">Transaction ID :</div>
                                        <div className="value"> aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu <span><Copy text={"aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu"} /></span> </div>
                                    </div>
                                  
                                    <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                        <div className="key"> Block :</div>
                                        <div className="value"> 2321 </div>
                                    </div>
                                    <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                        <div className="key">Network :</div>
                                        <div className="value"> Testnet 3 </div>
                                    </div>
                                    <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                        <div className="key">Timestamp :</div>
                                        <div className="value"> 2022/09/27 15:45:14 </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnconfirmedTransaction