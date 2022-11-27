import React from 'react'
import Styled from '@emotion/styled'
import VerificationFailed from './VerificationFailed'
import EstimatedDashboard from './EstimatedDashboard'
import Explore from './Explore'
import MoreService from './MoreService'
const ItemsDashboardBody = Styled.div`
    .left-items-dashboard{
        margin-right:48px;
    }
`
function ItemsDashboard() {
  return (
    <ItemsDashboardBody>
        <div className="row m-0">
            <div className="col-lg-8 col-12">
                <div className="left-items-dashboard">
                    <VerificationFailed/>
                    <EstimatedDashboard/>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="right-items-dashboard d-flex flex-column">
                    <Explore/>
                    <MoreService/>
                </div>
            </div>
        </div>
    </ItemsDashboardBody>
  )
}

export default ItemsDashboard