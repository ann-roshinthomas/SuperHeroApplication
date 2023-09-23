import { Fragment, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import Compare from "./Compare";
import Search from "./Search";
import { Tooltip } from "@mui/material";
type detailType = {
  id: string;
  name: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  fullName: string;
  birthPlace: string;
  firstAppearance: string;
  gender: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  occupation: string;
  publisher: string;
  image: string;
};
function Header() {
  const [compareList, setCompareList] = useState<detailType[]>([]);

  return (
    <Fragment>
      <div className="main">
        <header className="header">
          <nav className="header_nav">
            <ul className="header_links">
              <li className="header_links-li">
                <Tooltip title="Search your SuperHero">
                  <HashLink smooth to={"/#top"} className="header_links-title">
                    Search
                  </HashLink>
                </Tooltip>
              </li>
              <li className="header_links-li">
                <Tooltip title="Click on compare to scroll dowm to the compare functionality">
                  <HashLink
                    smooth
                    to={"/#compare"}
                    className="header_links-title"
                  >
                    Compare
                  </HashLink>
                </Tooltip>
              </li>
            </ul>
          </nav>
          <span
            style={{
              color: "white",
              fontStyle: "italic",
              fontSize: "x-large",
              fontWeight: "bold",
              letterSpacing: ".1rem",
              marginRight: "20px",
            }}
          >
            The SuperHero Database&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </header>
        <Search compareList={compareList} setCompareList={setCompareList} />
        <Compare compareList={compareList} setCompareList={setCompareList} />
      </div>
    </Fragment>
  );
}

export default Header;
