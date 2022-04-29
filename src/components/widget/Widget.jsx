import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React from 'react'
import { types } from '../../dummy';
import './widget.scss'

const Widget = ({ type }) => {
    const amount = 200;
    const diff = 20;
    let data;

    switch (type) {
        case "user":
            data = types.find(t => t.key === "user");
            break;
        case "order":
            data = types.find(t => t.key === "order");
            break;
        case "earning":
            data = types.find(t => t.key === "earning");
            break;
        case "balance":
            data = types.find(t => t.key === "balance");
            break;
        default:
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp />
                {diff}%
            </div>
            {data.key === "user" && <PersonOutlineOutlined className="icon" style={data.style}/>}
            {data.key === "order" && <ShoppingCartCheckoutOutlined className="icon" style={data.style}/>}
            {data.key === "earning" && <MonetizationOnOutlined className="icon" style={data.style}/>}
            {data.key === "balance" && <AccountBalanceWalletOutlined className="icon" style={data.style}/>}
        </div>
    </div>
  )
}

export default Widget