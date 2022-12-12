import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Styled from '@emotion/styled'
import { Dialog, DialogContent } from '@mui/material';

const SelectCoinToWithdrawBody = Styled.div`
  padding-block:16px;
  
  .title{
    color:var(--white);
  }
  .search-box{
    position:relative;
    .form-control{
      background:transparent;
      border:1px solid #555;
      border-radius:4px;
      color:var(--white300);
      padding-left:32px;
      font-size:14px;
      &::placeholder{
        color:var(--gray);
        font-size:14px;
      }
    }
    .btn-search{
      position:absolute;
      background:transparent;
      border:none;
      color:var(--gray);
      top:5px;
      left:10px;
    }
  }
  .table-body{
    .table-items{
      padding-top:10px;
      padding-inline:10px;
      &:hover{
        background:var(--gray);
      }
    }
    margin-top:16px;
    .coin-info{
      .logo-box{
        background:var(--green);
        border-radius:50%;
        width:30px;
        height:30px;
      
      }
      .coin-info-name{
        .name{
          color:var(--white);
          font-size:14px;
        }
        .name2{
          color:var(--gray);
          font-size:14px;
        }
      }
    }
    .coin-value-box{
      color:var(--white);
      font-size:14px;
      .coin-value{
        min-width:120px;
      }
    }
  }
`
function SelectCoinToWithdraw({open=true, setOpen}) {
  const handleClose= () => setOpen(false)
  return (
    <Dialog
      fullWidth
      maxWidth={'xs'}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>


        <SelectCoinToWithdrawBody>
          <div className="selcet-coin-withdraw-body">
            <span className="title">Select Coin To Withdraw</span>
            <div className="search-box mt-lg-3">
              <button className='btn-search'><SearchIcon fontSize='Samll' /></button>
              <input type="text" placeholder='Search' className='form-control' />
            </div>
            <div className="table-body d-flex flex-column">
              <div className="table-items d-flex align-items-center justify-content-between">
                <div className="coin-info d-flex ">
                  <div className="logo-box me-3"></div>
                  <div className="coin-info-name d-flex flex-column">
                    <span className="name">USDT</span>
                    <span className="name2">USDT</span>
                  </div>
                </div>
                <div className="coin-value-box d-flex justify-content-between">
                  <span className="spot mx-3">Spot</span>
                  <span className="coin-value text-end">3.200066652574</span>
                </div>
              </div>
              <div className="table-items d-flex align-items-center justify-content-between">
                <div className="coin-info d-flex ">
                  <div className="logo-box me-3"></div>
                  <div className="coin-info-name d-flex flex-column">
                    <span className="name">CHZ</span>
                    <span className="name2">CHZ</span>
                  </div>
                </div>
                <div className="coin-value-box d-flex justify-content-between">
                  <span className="spot mx-3">Spot</span>
                  <span className="coin-value text-end">2.686</span>
                </div>
              </div>
            </div>

          </div>
        </SelectCoinToWithdrawBody>
      </DialogContent>
    </Dialog>
  )
}

export default SelectCoinToWithdraw