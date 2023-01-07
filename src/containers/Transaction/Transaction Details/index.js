import React from 'react'
import Copy from '../../../components/Copy'
import { truncateString } from '../../../utils/string'
import './index.scss'

const TransactionDetails = () => {
    return (
        <>
            <div className="transactiondetail_bg_container">
                <div className="transactiondetail_main_container">
                    <div className="transactionDetail_up_container">
                        <div className="box_container">
                            <div className="title">Transaction Detail</div>
                            <div className="data_container_main_box" >
                                <div className="data_box_container_box" data-aos="fade-down" data-aos-offset="0">

                                    <div className="data_box" >
                                        <div className="key">Transaction ID :</div>
                                        <div className="value"> aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu <span><Copy text={"aleo1548889twys603ylcqhswf5kt5pvzvxqk8xexu"} /></span> </div>
                                    </div>
                                    <div className="data_box" data-aos="fade-down" data-aos-offset="0">
                                        <div className="key">Status :</div>
                                        <div className="value"> Confirmed </div>
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
                    <div className="transactionDetail_bottom_container ">
                        <div className="transactionDetail_bottom_main">
                            <div className="transactionDetail_bottom_wrapper">
                                <div className="transactionDetail_bottom_single_container box_container">
                                    <div className="title">
                                        Transactions
                                    </div>

                                    <div className="data_box">
                                        <div className="key"> Transition ID</div>
                                        <div className="value">
                                            {truncateString("as1wc8m5juuvlgsnk35yhy9djmg64yplkhetmfjl7k6sxz6ynla6y8smn3h", 6, 6)} <span><Copy text="as1wc8m5juuvlgsnk35yhy9djmg64yplkhetmfjl7k6sxz6ynla6y8smn3h" /></span>
                                        </div>
                                    </div>
                                    <div className="data_box">
                                        <div className="key"> Fee</div>
                                        <div className="value">
                                            0
                                        </div>
                                    </div>
                                    <div className="data_box">
                                        <div className="key"> Program</div>
                                        <div className="value">
                                            credits.aleo
                                        </div>
                                    </div>
                                    <div className="data_box">
                                        <div className="key"> Proof</div>
                                        <div className="value">
                                            proof1qqqqzqqqqqqqqqqqa34fthfajz4f54
                                            9fdmyq3fqvx008lgd5yckk96z5ttjax4qd5c
                                            xuftsyv50vvq69z3hletgcxp9sp00pzwrz0z
                                            30lv3z7x6rsly6du7798szx6cfdgvwldws79t
                                            w0rreuuyc9hq8f93kww7nmytrkf5asx7swz
                                        </div>
                                    </div>

                                </div>
                                <div className="transactionDetail_bottom_single_container">
                                    <div className="transactionDetail_bottom_single_container box_container">
                                        <div className="title">
                                            Input Records
                                        </div>

                                        <div className="data_box">
                                            <div className="key">  ID</div>
                                            <div className="value">
                                                3593817655345989
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Checksum</div>
                                            <div className="value">
                                                18688789487323963field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Value</div>
                                            <div className="value">
                                                record1qyqspe8prevuxyr8ravlphf2xk4kesz
                                                ank5fkdmwd4kmrhykz7yghzus6rdhgdu
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Id</div>
                                            <div className="value">
                                                25962123245234282049138field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Checksum</div>
                                            <div className="value">
                                                740701908146609324495162129972field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Value</div>
                                            <div className="value">
                                                record1qyglllky5nswsq4sugjqts0
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="transactionDetail_bottom_single_container">
                                    <div className="transactionDetail_bottom_single_container box_container">
                                        <div className="title">
                                            Output Records
                                        </div>

                                        <div className="data_box">
                                            <div className="key">  ID</div>
                                            <div className="value">
                                                3593817655345989
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Checksum</div>
                                            <div className="value">
                                                18688789487323963field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Value</div>
                                            <div className="value">
                                                record1qyqspe8prevuxyr8ravlphf2xk4kesz
                                                ank5fkdmwd4kmrhykz7yghzus6rdhgdu
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Id</div>
                                            <div className="value">
                                                25962123245234282049138field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Checksum</div>
                                            <div className="value">
                                                740701908146609324495162129972field
                                            </div>
                                        </div>
                                        <div className="data_box">
                                            <div className="key"> Value</div>
                                            <div className="value">
                                                record1qyglllky5nswsq4sugjqts0
                                            </div>
                                        </div>

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

export default TransactionDetails