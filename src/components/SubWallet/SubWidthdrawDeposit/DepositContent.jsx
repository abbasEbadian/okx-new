import React from 'react'
import Styled from '@emotion/styled'
import { GridSearchIcon } from '@mui/x-data-grid'

import bitcoin from '../../../assets/icons/bitcoin.svg'
import eth from '../../../assets/icons/eth.svg'
import { Button, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
const DepositContentBody = Styled.div`
    margin-inline:32px;
    .title-box{
     
        .title{
            color:var(--gray);
            font-size:14px;
        }
    }


    .form-control{
        background:transparent;
        border:1px solid #555;
        border-radius:4px;
    }
    .form-label{
        font-size:14px;
    }
    .btns-items{
        .deposit-btn{
            border:none;
            background:transparent;
            margin-right:30px;
            
        }
    }
`
function DepositContent() {
    const coins = [
        {
            name: "BTC",
            img: bitcoin
        },
        {
            name: "ETH",
            img: eth
        }
    ]
    const [coin,setCoin] = useState("")
    return (
        <DepositContentBody>
            <div className="deposit-body">
                <div className="select-coin-box  row">
                    <div className="col-lg-3"> <div className="title-box"><span className="title">Select Coin</span></div></div>
                    <div className="col-lg-9">


                        <form action="" className="">
                            <div className="form-group ">
                                <Typography htmlFor="" color={"grey"} component={'small'} borderColor>coin</Typography >
                                <Select fullWidth variant='outlined' displayEmpty value={coin} onChange={e => setCoin(e.target.value)}>
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem>BTC</MenuItem>
                                    <MenuItem>ETH</MenuItem>
                                </Select>

                            </div>
                            <div className="btns-items d-flex align-items-center  mt-3 justify-content-between">
                                {
                                    Array(3).fill(coins).flat().map(e => {
                                        return <Button color="light">
                                            <img src={e.img} alt={"coin"} />
                                            <span className='px-2'>{e.name}</span>
                                        </Button>
                                    })
                                }


                            </div>
                        </form>



                    </div>
                </div>




            </div>
        </DepositContentBody>
    )
}

export default DepositContent