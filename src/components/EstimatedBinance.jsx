import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Styled from "@emotion/styled";
import { Link } from "react-router-dom";
const EstimatedBinanceBody = Styled.div`
        .estimated-binanace-body{
        .estimated-binance-items{
            align-items:center;
            .text-estimated{
                color:var(--white);
                font-size:15px;
            }
            .estimated-icone{
                background-color:var(--gray);
                color: var(--gary900);
                border-radius:5px;
                margin-left:15px;
                padding:5px;
	            transform: scale(0.7);

            }
            .value-estimated1{
                color:var(--white);
                font-size:20px;
            }
            .value-estimated{
                color:var(--gray);
                font-size:20px;
                margin-left:8px;
            }
            
        }
    
    }
`;

function EstimatedBinance({ estimated, setEstimated }) {
  const CaptionName = {
    estimatedbinance: "Estimated Binance",
    value1: "0.2335185895 BTC",
    value2: "$503.90",
    value3: "0.000000000 BTC",
    value4: "$503.90",
    value5: "0.000000000 BTC",
    value6: "$0.000",
    value7: "$-5.055",
    value8: "-1.21%",
    spot: "Spot Balance",
    fiat: "Fiat Balance",
    pnl: " Today PNL",
  };
  return (
    <EstimatedBinanceBody>
      <div className="estimated-binanace-body d-flex flex-column">
        <div className="estimated-binance-items d-flex mb-2">
          <span className="text-estimated">{CaptionName.estimatedbinance}</span>
          <Link
            onClick={() => setEstimated((s) => !s)}
            className="estimated-icone"
          >
            <RemoveRedEyeIcon fontSize="small" />
          </Link>
        </div>
        <div className="estimated-binance-items d-flex">
          {estimated ? (
            <span className="value-spot1 value1">****************</span>
          ) : (
            <>
              <span className="value-estimated1">{CaptionName.value1}</span>
              <span className="value-estimated">{CaptionName.value2}</span>
            </>
          )}
        </div>
      </div>
    </EstimatedBinanceBody>
  );
}

export default EstimatedBinance;
