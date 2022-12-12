import React from 'react'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
const FAQBody = Styled.div`
    .faq-box{
        .title{
            color:var(--white);
            font-size:16px;
            
        }
        .Faq-link{
            color:var(--gray);
            margin-top:16px;
            svg{
                margin-right:10px;
            }
        }
    }
`
function FAQCrypto() {
  return (
    <FAQBody>
        <div className="faq-box d-flex flex-column align-items-start">
            <span className="title text-white">FAQ</span>
            <Link className='Faq-link d-flex align-items-center '>
                <PlayCircleFilledWhiteIcon fontSize='small'/>
                <span className="text-faq"> video Tutorail</span>
            </Link>
            <Link className='Faq-link d-flex align-items-center '>
                <TextSnippetIcon fontSize='small'/>
                <span className="text-faq"> Why Has My Withdraw Not Arrived?</span>
            </Link>
            <Link className='Faq-link d-flex align-items-center '>
                <TextSnippetIcon fontSize='small'/>
                <span className="text-faq"> How To Find My Transaction ID (TXID)? </span>
            </Link>
            <Link className='Faq-link d-flex align-items-center '>
                <TextSnippetIcon fontSize='small'/>
                <span className="text-faq">Why Has My Withdraw Not Arrived?</span>
            </Link>
            <Link className='Faq-link d-flex align-items-center '>
                <TextSnippetIcon fontSize='small'/>
                <span className="text-faq">Why Has My Withdraw Not Arrived?</span>
            </Link>
            <Link className='Faq-link d-flex align-items-center '>
                <TextSnippetIcon fontSize='small'/>
                <span className="text-faq">Why Has My Withdraw Not Arrived?</span>
            </Link>
        </div>
    </FAQBody>
  )
}

export default FAQCrypto