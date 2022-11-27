import React from 'react'
import Styled from '@emotion/styled'
import SelectSpotOrder from './SelectSpotOrder'
import SelectAllOrder from './SelectAllOrder'
const  OpenOrderBody = Styled.div`
    display:flex;
    align-items:center;
    padding-inline:16px;
    .all-select-spot-order{
        margin-left:auto;
        padding-right:16px;
    }
    

`
function OpenOrderHead() {
  return (
    <OpenOrderBody className="flex-row">
       
        <div className="select-items row ">
            <div className="col-lg-4 ">
                <SelectSpotOrder title={"Filter"}/>
            </div>
            <div className="col-lg-4 ">
                <SelectSpotOrder title={"Pair"}/>
            </div>
            <div className="col-lg-4 ">
                <SelectSpotOrder title={"Side"}/>
            </div>
        </div>

        <div className="all-select-spot-order">
            <SelectAllOrder/>

        </div>

    </OpenOrderBody>
  )
}

export default OpenOrderHead