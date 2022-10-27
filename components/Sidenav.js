import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Expand from "../assets/expand.svg";

const Sidenav = () => {
  const [showTopics, setShowTopics] = useState(false);

  return (
    <div className="sidenav">
      <div
        className="sidenav-container"
        onClick={() => {
          setShowTopics(!showTopics);
        }}
      >
        <div className="sidenav-header">
          <div className="sidenav-header-container">
            <div className="sidenav-header-text">Topics</div>
            <div className="sidenav-header-icon">
              <Image
                className={showTopics ? "r180" : ""}
                src={Expand}
                alt="Expand Icon"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className={`sidenav-links ${showTopics ? "" : "dn"}`}>
          <div className="sidenav-links-header">🔥 Differential Calculus</div>
          <div className="sidenav-links-container">
            <ul>
              <Link href={"/Limits"}>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={`sidenav-links ${showTopics ? "" : "dn"}`}>
          <div className="sidenav-links-header">🚀 Integral Calculus</div>
          <div className="sidenav-links-container">
            <ul>
              <Link href={"/Limits"}>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
                <li className="sidenav-column">Limits</li>
              </Link>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
