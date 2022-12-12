import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Styled from '@emotion/styled'
import btc from '../../../assets/icons/bitcoin.svg'
import eth from '../../../assets/icons/eth.svg'
import SelectCoinToWithdraw from './SelectCoinToWithdraw';
import { Select } from '@mui/material';
const SeclectCoinBody = Styled.div`
  .MuiBox-root{
    .MuiFormControl-root {
      width:100%;
    }
  }

`
const currencies = [
  {
    value: 'USD',
    label: '$',
    img: btc

  },
  {
    value: 'EUR',
    label: '€',
    img: eth
  },
  {
    value: 'BTC',
    label: '฿',
    img: eth
  },
  {
    value: 'JPY',
    label: '¥',
    img: btc
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState('EUR');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <SeclectCoinBody>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <div>
            <Select
              id="outlined-select-currency"
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
              className='mx-0'
              onClick={e => setOpen(1)}
              open={false}
              defaultOpen={false}
              fullWidth
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <div  className='d-flex'>
                    <img src={option.img} className='me-2' style={{transform: 'scale(0.85) translateY(2px)'}}/>
                    <span className='pt-1 d-block '>{option.label}</span>
                    <span className='pt-1 d-block ps-3 opacity-50'>{option.value}</span>
                  </div>
                </MenuItem>
              ))}
            </Select>

          </div>

        </Box>
      </SeclectCoinBody>
      <SelectCoinToWithdraw open={open} setOpen={setOpen}/>
    </>

  );
}
