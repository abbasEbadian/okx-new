import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import GppGoodIcon from '@mui/icons-material/GppGood';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PowerIcon from '@mui/icons-material/Power';
import TuneIcon from '@mui/icons-material/Tune';
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
            color:var(--white);
            text-decoration:none  !important;
            width:100%;
            padding-left:20px;
            padding-block:10px;
            font-size:14px;
            svg{
                fill:var(--white300);
                margin-right:10px;
            }
            &.active{
                background-color:var(--gray900);
                position:relative;
                &::after{
                    position:absolute;
                    content:" ";
                    top:0;
                    left:0;
                    height:100%;
                    width:2px;
                    background-color:var(--white);

                }
            }





        }
    }
`
function SidebarDashboard() {
    const CaptionName = {
        dashboard: "Dashboard",
        security: "Security",
        identification: "Identification",
        payment: "Payment",
        referral: "Referral",
        rewardcenter: "Reward Center",
        task:"Task Center",
        api: "API Management",
        set: "Settings"
    };
    return (
    <AsideDashboard>
        <div className="aside-items d-flex flex-column">
            <Link to='/dashboard/security' className='aside-link '>
                <PersonIcon fontSize='small' />
                {CaptionName.dashboard}
            </Link>
            <Link to='/dashboard/security' className='aside-link active'>
                <GppGoodIcon fontSize='small' />
                {CaptionName.security}
            </Link>
            <Link to='' className='aside-link'>
                <BadgeIcon fontSize='small' />
                {CaptionName.identification}
            </Link>
            <Link to='' className='aside-link'>
                <MonetizationOnIcon fontSize='small' />
                {CaptionName.payment}
            </Link>
            <Link to='' className='aside-link'>
                <PersonAddIcon fontSize='small' />
                {CaptionName.referral}
            </Link>
            <Link to='' className='aside-link'>
                <ConfirmationNumberIcon fontSize='small' />
                {CaptionName.rewardcenter}
            </Link>
            <Link to='' className='aside-link'>
                <AssignmentIcon fontSize='small' />
                {CaptionName.task}
            </Link>
            <Link to='' className='aside-link'>
                <PowerIcon fontSize='small' />
                {CaptionName.api}
            </Link>
            <Link to='' className='aside-link'>
                <TuneIcon fontSize='small' />
                {CaptionName.set}
            </Link>
        </div>
    </AsideDashboard>
  )
}

export default SidebarDashboard