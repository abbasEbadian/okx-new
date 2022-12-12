import React, { useState } from 'react'
import Styled from '@emotion/styled'
import SelectTextFields from './SelectTextFields'
import SelectNetwork from './SelectNetwork'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Select } from '@mui/material';
const WithdrawContentBody = Styled.div`
    margin-inline:32px;
    .title-box{
     
        .title{
            color:var(--gray);
            font-size:14px;
        }
    }
    .form-group{
        .form-label{
            color:var(--white);
            font-size:14px;
        }
        .form-control{
            background:transparent;
            border:1px solid #555;
            border-radius:4px;
            color:var(--white300);
            height:45px;
            font-size:14px;
            option{
                color:var(--gray800);
            }
        }
        margin-bottom:24px;
        .input-form-box{
            position:relative;
            svg{
                position:absolute;
                background:transparent;
                border:none;
                color:var(--gray);
                bottom:14px;
                right:10px;
                font-size:18px;
            }
        }

    }
    .form-address-box{
        .tabs{
            border-bottom:1px solid var(--gray800);
            width:100%;
            padding-bottom:10px;
            .address{
                color:var(--white);
                position:relative;
                
                font-size:14px;
                &::after{
                    content:" ";
                    position:absolute;
                    width:100%;
                    background:var(--white);
                    height:2px;
                    bottom:-12px;
                    left:0;

                }
            }
        }
    }
`
function WithdrawContent() {
    const [open, setOpen] = useState(false)
    const [network,setNetwork] =  useState("")
    const networks = [
        {"id": 1, name: "eth"},
        {"id": 2, name: "usdt"},
        {"id": 3, name: "btc"},
    ]
    return (
        <WithdrawContentBody>
            <div className="withdraw-body">
                <div className="select-coin-box  row">
                    <div className="col-lg-3"> <div className="title-box"><span className="title">Select Coin</span></div></div>
                    <div className="col-lg-9 ">
                        <div className="form-select-box flex-grow-1">
                            <SelectTextFields />
                        </div>
                    </div>


                </div>
                <div className="send-to-box mt-4 row">
                    <div className="col-lg-3"> <div className="title-box"><span className="title">Send To</span></div> </div>
                    <div className="col-lg-9">
                        <div className="form-address-box flex-grow-1">
                            <div className="tabs mb-5">
                                <span className="address">Address</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className='form-label'>Address</label>
                                <div className="form-items input-form-box">
                                    <input type="text" className="form-control flex-grow-1 " placeholder='Enter Email Address' />
                                    <MarkunreadIcon />
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="" className='form-label'>Network</label>
                                <div className="form-items d-flex  align-item-center">
                                    <Select 
                                        name="" id="" fullWidth 
                                        onClick={e => {e.preventDefault();setOpen(true)}} open={false} defaultOpen={false} 
                                        value={network} onChange={e => {}}
                                        >

                                    </Select>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <SelectNetwork open={open} setOpen={setOpen} networks={networks} setNetwork={setNetwork} />
        </WithdrawContentBody>
    )
}

export default WithdrawContent