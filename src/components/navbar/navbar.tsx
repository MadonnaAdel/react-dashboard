import { Link } from "react-router-dom";
import "./navbar.scss"

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="logo" width={70} />
        </div>
        <div className="headerBtns">
          <div className="search icon">
            <button>
              <img src="/search.svg" alt="search" />
            </button>
          </div>
          <div className="app icon">
            <button>
              <img src="/app.svg" alt="app" />
            </button>
          </div>
          <div className="extand icon">
            <button>
              <img src="/expand.svg" alt="extand" />
            </button>
          </div>
          <div className="notification ">
            <button>
              <img src="/notifications.svg" alt="notification" />
              <span className="notfy">1</span>
            </button>
          </div>

          <Link to={"/profile"} className="user">
            <img src="/madonna.jpg" alt="user image" width={100} />
            <span className="userName">Madonna</span>
          </Link>
          <div className="settings icon">
            <button>
              <img src="/setting.svg" alt="setting" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
