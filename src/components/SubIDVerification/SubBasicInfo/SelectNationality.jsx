import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Styled from '@emotion/styled'
import { Select } from '@mui/material';
const SelectNationalityBody = Styled.div`
  .MuiFormControl-root {
    .MuiInputBase-root{
      margin-block:16px;
      border-radius:5px;
      padding-block:4px;
      &::before {
        border-bottom: none;

      }
     
    }
    .MuiFormLabel-root {
      padding-bottom:16px;
      font-size:16px;
    }
    .MuiSvgIcon-root{

      
    }
    .MuiNativeSelect-select{
      padding-inline:16px;
    }
  }
`
export default function SelectNationality() {
  return (
    <>
      <SelectNationalityBody>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native" >
              Nationlity
            </InputLabel>
            <Select
            color='firoozeh'
              size="small"
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}

            >
              <option value={10}>America</option>
              <option value={20}>Germany</option>
              <option value={30}>France</option>
            </Select>
          </FormControl>
        </Box>
      </SelectNationalityBody>
    </>


  );
}

