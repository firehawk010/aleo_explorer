import React from 'react'
import { Select } from 'antd';
import { Button, Space } from 'antd';
import './index.scss'

const Navigationbar = () => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div className="navbar_main_container ">
                <div className="navbar_flex_container">
                    <div className="navbar_logo">Aleo <span>Explorer</span> </div>
                    <div className="navbar_container">
                        <div className="select_chain">
                            <Select
                                defaultValue="testnet"
                                style={{ width: 120, }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'testnet',
                                        label: 'Testnet',
                                    },
                                    {
                                        value: 'mainnet',
                                        disabled: true,
                                        label: 'Mainnet',
                                    },
                                ]}
                            />
                        </div>
                        <div className="connect_wallet_button">
                            <Button type="primary" className='ant-btn-primary-secondary'>Connect Wallet</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigationbar;