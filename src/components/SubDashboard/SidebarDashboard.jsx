import React from 'react'

import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
const AsideDashboard = Styled.aside`
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 15%;
    min-width: 200px;
    overflow: auto;
    position: sticky;
    top: 0;
    border-right: 1px solid #555;
    .aside-items{
        align-items:flex-start;
        width:100%;
        .aside-link{
            color:var(--gray);
            text-decoration:none  !important;
            width:100%;
            padding-left:20px;
            padding-block:10px;
            font-size:14px;
            svg{
                fill:var(--white300);
                margin-right:10px;
            }
            





        }
    }
`
function SidebarDashboard() {
  
   
    return (
    <AsideDashboard>
        <div className="aside-items d-flex flex-column">
           
          
           
            
            
           
          
        </div>
    </AsideDashboard>
  )
}

export default SidebarDashboard