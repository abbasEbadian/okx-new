import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Styled from '@emotion/styled'
const PaginationBody = Styled.div`
    margin-left:auto;
    padding-inline:15px;
    margin-block:15px;
    .MuiButtonBase-root{
        color:var(--white300);
    }
    .Mui-selected {
	background: var(--gray800);
        &:hover{
            background-color: var(--gray);
        }
    }
    .MuiPaginationItem-root {

	color:var(--white);

    }

`
export default function PaginationActivityAccount() {
  return (
    <>
    <PaginationBody className='pb-3 float-end'>
        <Pagination count={10} shape="rounded" color='primary' />
    </PaginationBody>
    </>

  );
}
