import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Styled from '@emotion/styled'
const PaginationBody = Styled.div`
    margin-left:auto;
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
export default function PaginationWallet() {
  return (
    <>
    <PaginationBody className='pb-3 float-end ms-ms-auto' >
        <Pagination count={5} shape="rounded" color='primary' />
    </PaginationBody>
    </>

  );
}
