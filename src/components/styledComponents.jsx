import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ContrastButton = styled(({ className, ...props }) => (
    <Button {...props} classes={{ popper: className }} />
))`
    text-decoration: none;
    & .MuiTooltip-tooltip {
        background: navy;
    }
`;
export {
    ContrastButton,
}