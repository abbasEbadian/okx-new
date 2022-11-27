import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Styled from '@emotion/styled'
const HideBalance  = Styled.div`
  .MuiFormGroup-root {
    .MuiTypography-root {
      color:var(--gray);
    }
    .MuiButtonBase-root{
      .MuiSvgIcon-root {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
        color:var(--gray);
      }
    }


  }
`
export default function HideSmallBalance({hide, setHide}) {
  const CaptionName = {
    hide: " Hide Small Balance"
};
  return (
    <>
    <HideBalance>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={hide} onChange={e => setHide(e.target.checked)} />} label={CaptionName.hide} />
      
      </FormGroup>
    </HideBalance>

    </>

  );
}
