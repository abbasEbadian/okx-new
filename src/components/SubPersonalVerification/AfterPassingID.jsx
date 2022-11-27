import React from 'react'
import Styled from '@emotion/styled'
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/material';
const AfterPassingIDBody = Styled.div`

    display:flex;
    flex-direction:column;
    align-items:start;
    
    padding:24px 48px;
    border-radius: 35px 35px 0px 0px;
    .after-passing-id-verification{
        color:var(--white);
        
        .text-after-id-verification{
           margin-bottom:10px;
            font-size:14px;
        }
        .text-after-id-verification2{
           
            font-size:20px;
        }
        svg{
            transform:scale(0.4);

        }
    }

`
function AfterPassingID() {
    const Caption={
        after:"After Passing the ID Verification, you Will be entitled to the below Privileges:",
        Usd:"24H Withdrawal Limit: 1,000,000 USD"
    };
    return (
    <AfterPassingIDBody >
        <Box sx={{ backgroundColor: 'primary' }}>
            <div className="after-passing-id-verification d-flex align-items-center">
                <img src="" alt="" />
                <span className="text-after-id-verification">{Caption.after}</span>
            </div>
            <div className="after-passing-id-verification d-flex align-items-center">
                <CircleIcon fontSize='small'  />
                <span className="text-after-id-verification2">{Caption.Usd}</span>
            </div>
        </Box>
        
    </AfterPassingIDBody>
  )
}

export default AfterPassingID