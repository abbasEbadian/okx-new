import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
const NameInfoBody = Styled.div`
    margin-block:50px;
    .name-info-box{
        .form-group{
            .form-label{
            }
            .input-name-info{
                &::placeholder{
                }
            }
        }
    }
    .gender-box{
        margin-top:50px;
        .gender{
            border:none;
            background:transparent;
            &.active{
            }
        }
    }
    .date-birth-box{
        margin-block:48px;
    }
    
`
function NameInfo() {
    const CaptionName={
        lastname:"Last Name",
        firstname:"First Name",
        enterfirst:"Please enter your first name",
        enterlast:"Please enter your last name",
        gender:"Gender",
        female:"Female",
        male:"Male",
        birth:"Date of Birth",
        date:"Year-Month-Day , or enter the date in the text box using keyboard",
        Idnumber:"ID Number",
        enterid:"please enter ID number"
    };
    return (
    <NameInfoBody>
            <div className="name-info-box">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="form-group d-flex flex-column">
                            <label for="" className='form-label'>{CaptionName.lastname}</label>
                            <input type="text" className='input-name-info form-control' placeholder={CaptionName.enterlast} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="form-group d-flex flex-column">
                            <label for="" className='form-label'>{CaptionName.firstname}</label>
                            <input type="text" className='input-name-info form-control' placeholder={CaptionName.enterfirst} />
                        </div>
                    </div>
                </div>
                <FormControl className='mt-4'>
                <FormLabel className='text-white'>Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    
                </RadioGroup>
                </FormControl>
                <div className="date-birth-box ">
                    <div className="form-group d-flex flex-column">
                        <label for="" className='form-label'>{CaptionName.birth}</label>
                        <input type="text" className='input-name-info form-control' placeholder={CaptionName.date} />
                    </div>
                </div>
                <div className="id-number-box ">
                    <div className="form-group d-flex flex-column">
                        <label for="" className='form-label'>{CaptionName.Idnumber}</label>
                        <input type="text" className='input-name-info form-control' placeholder={CaptionName.enterid} />
                    </div>
                </div>
            </div>
    </NameInfoBody>
  )
}

export default NameInfo