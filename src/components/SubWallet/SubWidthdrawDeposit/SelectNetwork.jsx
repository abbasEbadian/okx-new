import React from 'react'
import Styled from '@emotion/styled'
import { Dialog } from '@mui/material'
const SelectNetworkBody = Styled.div`
  padding-block:16px;
  margin-inline:32px;
  .title-box{
   
    .title{
        color:var(--white300);
        font-size:18px;
        margin-bottom:16px;
    }
    .text{
        color:var(--white);
        font-size:12px;
    }
  }
  .caption-select-network-box{
    .caption-select-network{
        color:var(--white);
        font-size:14px;
    }
    .caption-select-network2{
        color:var(--gray);
        font-size:13px;
    }
  }
  .arrival-time-box{
    color:var(--white);
    font-size:14px;
    .arrival-time{
        color:var(--gray);
      
    }

  }
  .fee-box {
    font-size:14px;
    .fee{
        color:var(--gray); 
    }
    .fee-value{
        color:var(--white); 
    }
  }
`

function SelectNetwork({ open, setOpen, networks, setNetwork}) {
    const handleClose= () => setOpen(false)
    const selectNetwork = (net) => setNetwork(net)
    return (
        <Dialog
            fullWidth
            maxWidth={'xs'}
            open={open}
            onClose={handleClose}
        >
            <SelectNetworkBody>
                <div className="select-network-body">
                    <div className="title-box d-flex flex-column">
                        <span className="title">Select network</span>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus </p>
                    </div>
                    <div className="table-body d-flex flex-column mt-3">
                        {
                        networks.map( net => {
                            return <div className="select-network-box d-flex align-items-center justify-content-between py-2" onClick={e => selectNetwork(net)}>
                            <div className="caption-select-network-box d-flex align-items-start flex-column">
                                <span className="caption-select-network">{net.name}</span>
                                <span className="caption-select-network2">BNB Smart Chain</span>
                            </div>
                            <div className="value-select-network-box d-flex flex-column">
                                <div className="arrival-time-box d-flex align-items-center">
                                    <span className="arrival-time">Arrival Time</span>
                                    ~
                                    <span className="min">5 mins</span>
                                </div>
                                <div className="fee-box d-flex align-items-center">
                                    <span className="fee me-1">fee</span>
                                    <span className="fee-value">0.29 USDT (~$0.8)</span>
                                </div>
                            </div>
                        </div>
                        })}
                     
                    </div>

                </div>
            </SelectNetworkBody>
        </Dialog>

    )
}

export default SelectNetwork