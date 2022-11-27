import React from 'react'
import Styled from '@emotion/styled'
import Circle from '@mui/icons-material/Circle';
const AttentionBody = Styled.div`
    padding:32px 48px;
    .attention-box {
        ul {
            list-style: none;
            li{
                position:relative;
                &::after {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: var(--green);
                    content: " ";
                    position: absolute;
                    margin-left: -1em;
                    left: -2px;
                    top:10px;
                }
            }
        }

        
        .attention-content{
            .attention{
                color:var(--gray);
                font-size:15px;
                padding-bottom:5px;
            }
            svg{
                color:var(--gary800);
                transform:scale(0.4);
            }
        }
    }
`
function Attention() {
    const CaptionName = {
        attention1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        attention2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
        buycrypto:"BuyCrypto"
    
    };
    return (
    <AttentionBody>
            <div className="attention-box d-flex flex-column align-items-start">
                <h5 className="title mb-3">Attention</h5>
                <ul className='ps-3'>
                    <li className="attention">{CaptionName.attention1}</li>
                    <li className="attention">{CaptionName.attention2}</li>
                    <li className="attention">{CaptionName.attention1}</li>
                </ul>
            </div>

    </AttentionBody>
  )
}

export default Attention