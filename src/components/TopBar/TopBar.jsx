import React from "react";
import "./TopBar.css";
import PB from '../Images/PB.png';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topRight">
                <div className="topbarIconContainer">
                    <p className="topbarRight">Santhiya<br /><small>Stella</small></p>
                </div>
                <p className="topbarRight"><img src={PB} alt="PB" className="topAvatar" /></p>
            </div>

        </div>
    );
}