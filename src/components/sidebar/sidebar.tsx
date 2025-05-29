import { Link } from "react-router-dom";
import './sidebar.scss'
import { menu } from "../../Data";
export default function Sidebar() {
  return (
    <aside>
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="titleItem">
              {item.title}
            </div>
            {
              item.listItems.map(listItem => {
                return (
                  <Link to={listItem.url} className="tap" key={listItem.id}>
                    <div className="icon">
                      <img src={listItem?.icon} alt={listItem.title} width='100%' />
                    </div>
                    <div className="tapName">
                      {listItem.title}
                    </div>
                  </Link>
                )
              })
            }
          </div>
        )
      })}
    </aside>
  );
}
