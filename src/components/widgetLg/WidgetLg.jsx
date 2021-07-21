import React from 'react';
import './widgetLg.css';


export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span> 
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4065242/pexels-photo-4065242.jpeg?cs=srgb&dl=pexels-etan-4065242.jpg&fm=jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">15 Jul 2021</td>
                    <td className="widgetLgAmount">$162.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/785435/pexels-photo-785435.jpeg?cs=srgb&dl=pexels-daniel-spase-785435.jpg&fm=jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Jane Smith</span>
                    </td>
                    <td className="widgetLgDate">21 Jun 2021</td>
                    <td className="widgetLgAmount">$82.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/1123752/pexels-photo-1123752.jpeg?cs=srgb&dl=pexels-min-an-1123752.jpg&fm=jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Katrina Keller</span>
                    </td>
                    <td className="widgetLgDate">7 May 2021</td>
                    <td className="widgetLgAmount">$185.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/935972/pexels-photo-935972.jpeg?cs=srgb&dl=pexels-nappy-935972.jpg&fm=jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nappy Stir</span>
                    </td>
                    <td className="widgetLgDate">18 Feb 2021</td>
                    <td className="widgetLgAmount">$114.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}