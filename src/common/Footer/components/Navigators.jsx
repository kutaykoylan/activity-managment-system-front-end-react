import React from "react";
import {Link} from "react-router-dom";
import {LinkedinOutlined, GithubOutlined, YoutubeOutlined} from "@ant-design/icons";

const Navigators = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <h3>Site Map</h3>
            <ul className="list-unstyled three-column">
                <li>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/activities">
                        Activities
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/map">
                        Map
                    </Link>
                </li>
            </ul>
            <ul className="list-unstyled socila-list">
                <li>
                    <a href="https://www.linkedin.com/in/kutaykoylan/">
                        <LinkedinOutlined style={{ fontSize: '32px'}}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kutaykoylan">
                        <GithubOutlined style={{ fontSize: '32px'}}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/user/TheBraveMonster">
                        <YoutubeOutlined style={{ fontSize: '32px'}}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigators