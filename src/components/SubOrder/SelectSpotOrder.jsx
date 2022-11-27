import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Styled from '@emotion/styled'
const SelectBodyOrder = Styled.div`
    .MuiFormControl-root{
        background:var(--gray900);
    }
    .MuiFormLabel-root{
        color:var(--gray);
    }
    .MuiSvgIcon-root {
        fill:var(--gray);
    }
`
export default function SelectSpotOrder({ title, items={}}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SelectBodyOrder>
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small" >
        <InputLabel id="demo-select-small">{title}</InputLabel>
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label={title}
            onChange={handleChange}
            className={"text-white"}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>option 1</MenuItem>
            <MenuItem value={20}>option 2</MenuItem>
            <MenuItem value={30}>option 3</MenuItem>
        </Select>
        </FormControl>
    </SelectBodyOrder>

  );
}
