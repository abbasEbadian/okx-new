import React, { useState } from 'react'
import Styled from '@emotion/styled'
import PriceCryptos from './PriceCryptos';
import ChangeCryptos from './ChangeCryptos';
import VolumeCryptos from './VolumeCryptos';
import MarketCap from './MarketCap';
import { Link } from 'react-router-dom';
import binance from '../../assets/icons/binance.svg'
import { createSvgIcon } from '@mui/material/utils';
import { Button } from '@mui/material';


const StarIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>,
  'Star',
);
const StarBorderIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>,
  'StarBorder',
);

const TablecryptosBody = Styled.div`

  min-width:900px;

  .table-cryptos-content{
    padding-block:20px;
    border-bottom:1px solid var(--gray);
    cursor:pointer;
    &:hover{
      background-color:var(--body-color);
	    transition-duration: 0.4s;

    }
  }
  .trade-cryptos{
    text-decoration:none;
    color:var(--white200);
    font-size:15px;
    margin-right:32px;

  }
`
const NameBody =Styled.div`
 .logo-name{
    width:30px;
    height:30px;
    background:var(--gray);
    border-radius:50%;
    margin-inline:5px

 }
 .name-value{
    text-decoration:none;
    color:var(--white200);
    font-size:15px;

 }
 .name-value2{
    font-size:13px;
    color:var(--gray);
    margin-left:15px;
 }
`
function TableCryptos() {
  const CaptionName = {
    namevalue: "ACA",
    namevalue2: "Acala token",
    price: "0.57000000",
    change: "2.06",
    volume: "2.15",
    marketCap: "2.05116716",
    tarde: "Trade"
  };
  const [fav, setFav] = useState({f1:false, f2:false, f3:false, f4:false, f5:false, f6:false, f7:false, f8:false, f9:false, f10:false})
  const toggleFav = (id) => {
    setFav({
      ...fav,
      ["f"+id]: !fav["f"+id]
    })
  }
  
  return (
    <>
      <TablecryptosBody>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => {
            return <div className="table-cryptos-content d-flex align-items-center ">
              <div className='d-flex ps-3' data-area="left" style={{ minWidth: "220px", flex: "220", textDecoration: "none" }} >
              <NameBody>
                  <div className="value-table-cryptos d-flex  name-value  align-items-center">
                      <div onClick={e => toggleFav(id)}>{fav["f"+id]? <StarIcon />:<StarBorderIcon/>}</div>
                      <img src={binance} alt="" className="logo-name" />
                      <span className="name-value">{CaptionName.namevalue}</span>
                      <span className="name-value2">{CaptionName.namevalue2}</span>
                  </div>
              </NameBody>
              </div>
              <div className="value-table-cryptos d-flex  price-value" data-area="left" style={{ minWidth: "100px", flex: "100" }}>
                <PriceCryptos amount={CaptionName.price} />
              </div>
              <div className="value-table-cryptos d-flex justify-content-end  change-value" data-area='right' style={{ minWidth: "190px", flex: "190" }}>
                <ChangeCryptos amount={CaptionName.change} />
              </div>
              <div className="value-table-cryptos d-flex justify-content-end  volumn-value" data-area='right' style={{ minWidth: "130px", flex: "130" }}>
                <VolumeCryptos amount={CaptionName.volume} />
              </div>
              <div className="value-table-cryptos d-flex justify-content-end  market-cap-value" data-area='right' style={{ minWidth: "130px", flex: "130" }}>
                <MarketCap amount={CaptionName.marketCap} />
              </div>

              <div className="value-table-cryptos d-flex justify-content-end pe-3" data-area='right' style={{ minWidth: "180px", flex: "180" }}>
                <Link href="" className="trade-cryptos"><Button color="grey" variant="text">{CaptionName.tarde}</Button></Link>
              </div>
            </div>
          })
        }

      </TablecryptosBody>
    </>

  )
}

export default TableCryptos