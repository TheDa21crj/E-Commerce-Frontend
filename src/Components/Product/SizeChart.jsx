import React, { useState, useEffect, useRef } from "react";
import SCCss from "./CSS/SizeChart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TableIn from "./TableIn";
import TableCm from "./TableCm";
import "./CSS/ProductC.css";
import img1 from "./../../Img/measure.png";
import "./CSS/ProductC.css";

export default function SizeChart(props) {
  const [showM, setM] = useState(true);
  const [showSC, setSC] = useState(true);

  return (
    <div className={SCCss.mDiv}>
      <div className={SCCss.mDivInner}>
        <div className={SCCss.ConDiv}>
          <CloseIcon
            fontSize="large"
            className={SCCss.CloseIcon}
            onClick={() => props.state(false)}
          />
          <h1>{props.name}</h1>
          <div className={SCCss.rowDIvP}>
            <div className={SCCss.rowDIv}>
              <div className={SCCss.LeftDiv}>
                <img src={props.src} alt="" className={SCCss.ImgTag} />
              </div>
              <div className={SCCss.RightDiv}>
                <div className={SCCss.InCmDiv}>
                  <p
                    className={SCCss.InPTag}
                    id={showM ? "select" : ""}
                    onClick={() => setM(true)}
                  >
                    In
                  </p>
                  <p
                    className={SCCss.CmPTag}
                    id={showM ? "" : "select"}
                    onClick={() => setM(false)}
                  >
                    Cm
                  </p>
                </div>
                <div className={SCCss.TableDiv}>
                  {showM ? <TableIn /> : <TableCm />}
                </div>
              </div>
            </div>
          </div>
          <div className={SCCss.rowDIvPMobo}>
            <p
              onClick={() => {
                setSC(true);
              }}
              className={showSC ? "pink" : "grey"}
            >
              Size Chart
            </p>
            <p
              onClick={() => {
                setSC(false);
              }}
              className={showSC ? "grey" : "pink"}
            >
              How To Measure
            </p>
          </div>
          {showSC ? (
            <div>
              <div>
                <div className={SCCss.InCmDiv1}>
                  <p
                    className={SCCss.InPTag}
                    id={showM ? "select" : ""}
                    onClick={() => setM(true)}
                  >
                    In
                  </p>
                  <p
                    className={SCCss.CmPTag}
                    id={showM ? "" : "select"}
                    onClick={() => setM(false)}
                  >
                    Cm
                  </p>
                </div>
                <div className={SCCss.TableDiv1}>
                  {showM ? <TableIn /> : <TableCm />}
                </div>
              </div>
            </div>
          ) : (
            <div className={SCCss.imgMoboHTMDiv}>
              <img src={img1} alt="" className={SCCss.imgMoboHTM} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
