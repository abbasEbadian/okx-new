import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import EstimatedBinance from '../EstimatedBinance';

const EstimatedBody = Styled.div`
    background-color:var(--gray900);
    padding-inline:15px;
    padding-block:30px;

    .value1{
        color:var(--white);
        font-size:20px;
    }
    .value2{
        color:var(--gray);
        font-size:15px;
    }
    
    .title{
        color:var(--white);
        font-size:14px;
    }
    .up{
        color:var(--green) !important;

    }
    .down{
        color:var(--red) !important;
    }
    .pnl-box {
        .pnl-icone{
            color:var(--white);
            background-color:var(--gray);
            border-radius:4px;
            margin-left:10px;
        }
    }
 
    .line562336{
        width:98%;
        background-color:#555;
        height:1px;
        margin-top:10px;
        
    }
   
    
`
function Estimated({ estimated, setEstimated }) {
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
        pnl: " Today PNL"
    };
    return (
        <EstimatedBody>
            <div className="row">
                <div className="col-lg-5">
                    <EstimatedBinance estimated={estimated} setEstimated={setEstimated} />
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="spot-box d-flex flex-column align-item-start">
                                <span className="title-spot title">{CaptionName.spot}</span>
                                {
                                    estimated ? <span className="value-spot1 value1">*******</span>
                                        : <>
                                            <span className="value-spot1 value1">{CaptionName.value3}</span>
                                            <span className="value-spot2 value2">{CaptionName.value4}</span>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="fiat-box d-flex flex-column">
                                <span className="title-fiat title">{CaptionName.fiat}</span>
                                {
                                    estimated ? <span className="value-spot1 value1">*******</span>
                                        : <>
                                            <span className="value-fiat value1">{CaptionName.value5}</span>
                                            <span className="value-fiat value2">{CaptionName.value6}</span>
                                        </>
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="pnl-body">
                                <div className="pnl-box d-flex align-items-center ">
                                    <span className="title-pnl title">{CaptionName.pnl}</span>
                                    <Link className='pnl-icone'><ChevronRightIcon /></Link>
                                </div>
                                <div className="value-pnl-box d-flex flex-column">
                                    {
                                        estimated ? <span className="value-spot1 value1">*******</span>
                                            : <>
                                                <span className="value-fiat value1 down">{CaptionName.value7}</span>
                                                <span className="value-fiat  value2 down">{CaptionName.value8}</span>
                                            </>
                                    }

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="line562336 mx-auto"></div>
            </div>
        </EstimatedBody>
    )
}

export default Estimated