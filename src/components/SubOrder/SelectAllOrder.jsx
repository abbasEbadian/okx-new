import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Styled from '@emotion/styled'
import { TextField } from '@mui/material';
const AllOrder = Styled.div`
    margin-left:auto;
    .MuiInputBase-roo{
        background-color:transparent;
        border:1px solid transparent; 
    }
    .MuiFormLabel-root{
        color:var(--white);
    }
    .MuiSvgIcon-root{
        fill:var(--white);
    }
    
`
export default function SelectAllOrder() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <AllOrder>
        <Box sx={{ minWidth: 180 }}>
           

            <TextField sx={{ mx: 1, width: '160px' }}
              color="light"
              label="Cancel All"
              size="small"
              select
            >
              <MenuItem value={10}>option 1</MenuItem>
                <MenuItem value={20}>option 2</MenuItem>
                <MenuItem value={30}>option 3</MenuItem>
            </TextField>
        </Box>
    </AllOrder>

  );
}
