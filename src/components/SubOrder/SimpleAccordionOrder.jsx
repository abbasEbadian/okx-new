import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WalletIcon from '@mui/icons-material/Wallet';
import Styled from '@emotion/styled'
const AccordionOrder = Styled.div`
    background-color:var(--body-color);
    height: 100%;
    .MuiPaper-root {
      background:var(--gray900);
      .MuiTypography-root{
        color:var(--white);
      }

    }
    .MuiAccordionSummary-expandIconWrapper {
      .MuiSvgIcon-root{
        color:var(--white);
      }
     
    }
  .MuiAccordionDetails-root {
	  padding: 8px 0px 0px;
    .accordion-details{
    justify-content: center;
   
    .accordion-details-link{
      text-decoration:none;
      font-size:14px;
      padding-left:45px;
      color:var(--white);
      padding-block:10px;
      
      
      &.active{
        position:relative;
        background-color:#848e9c5e;
        &::after{
          content:" ";
          position:absolute;
          height:100%;
          width:3px;
          background-color:var(--white);
          top:0;
          left:0;
        }

      }
  
      &:hover{
        background-color:var(--gray);
      }
    }
    }
  }

`

export default function SimpleAccordionOrder() {
    const CaptionName = {
        typography1: "Spot Order",
        typography2: "Getting Started",
        open:"Open Order",
        order:" Order History",
        trade:"Trade History"


    };
    return (
    <AccordionOrder>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <WalletIcon/> {CaptionName.typography1}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="accordion-details d-flex flex-column ">
            <Link href="" className="accordion-details-link active">
              {CaptionName.open}
              
            </Link>

            <Link href="" className="accordion-details-link">
              {CaptionName.order}
             
            </Link>
            <Link href="" className="accordion-details-link">
              {CaptionName.trade}
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>


    </AccordionOrder>
  );
}
