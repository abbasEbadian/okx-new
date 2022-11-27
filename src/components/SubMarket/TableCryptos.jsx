import React, { useState } from 'react'
import Styled from '@emotion/styled'
import PriceCryptos from './PriceCryptos';
import ChangeCryptos from './ChangeCryptos';
import VolumeCryptos from './VolumeCryptos';
import MarketCap from './MarketCap';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import binance from '../../assets/icons/binance.svg'
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
                      <div onClick={e => toggleFav(id)}>{fav["f"+id]? <StarIcon htmlColor='#dfac06'/>:<StarBorderIcon htmlColor='#dfac06'/>}</div>
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
                <Link href="" className="trade-cryptos">{CaptionName.tarde}</Link>
              </div>
            </div>
          })
        }

      </TablecryptosBody>
    </>

  )
}

export default TableCryptos