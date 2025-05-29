import './topDeal.scss'
import { topDealUsers } from '../../Data'
import { Link } from 'react-router-dom'
export default function TopDetal() {
    return (
        <article className='topDealBox'>
            <h2 className="topTitle">Top Deal</h2>
            <div className="deasBox">
                {
                    topDealUsers.map((topDealUser) => {
                        return (
                            <Link to={`/profile`} className="user" key={topDealUser.id}>
                                <div className="userInfo">
                                    <div className="img"> <img src={topDealUser.img} alt={topDealUser.username} width="100%" /></div>
                                    <div className="info">
                                        <span className="userName">{topDealUser.username}</span>
                                        <span className="email">{topDealUser.email}</span>
                                    </div>
                                </div><div className="deal">
                                    {topDealUser.amount}$
                                </div>
                            </Link>
                        )
                    })
                }


            </div>
        </article>
    )
}
