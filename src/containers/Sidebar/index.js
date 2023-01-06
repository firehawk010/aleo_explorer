import React from 'react';
import {
    TransactionOutlined,
    PieChartOutlined,
    FlagOutlined,
    BlockOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { SvgIcon } from '../../components/Common';

const Sidebar = () => {

    const location = useLocation();
    const route = location.pathname && location.pathname.split("/")[1];
    console.log(route, "route");

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem(<Link to="dashboard">Dashboard</Link>, 'dashboard', <PieChartOutlined />,),
        getItem(<Link to="blocks">Blocks</Link>, 'blocks', <BlockOutlined />,),
        getItem(<Link to="transactions">Transactions</Link>, 'transactions', <TransactionOutlined />,),
        getItem(<Link to="leaderboard">Leaderboard</Link>, 'leaderboard', <FlagOutlined />,),
    ];

    return (
        <>
            <div style={{ height: 32, margin: 16, }}>
                <SvgIcon name="block-icon" />
            </div>
            <Menu theme="dark" defaultSelectedKeys={[route ? route : "dashboard"]} mode="inline" items={items} />
        </>
    )
}

export default Sidebar;