import React from 'react';
import "./Footer.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import SecurityIcon from '@mui/icons-material/Security';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='Footer'>
      <div className='l'>
        <div>
          <h1>MY SHOES</h1>
        </div>

        <div>
          <ul>
            <a href='https://www.instagram.com/mallik_75/'>
              <li><InstagramIcon /></li>
            </a>
            <li><FacebookIcon /></li>
            <li><TwitterIcon /></li>
          </ul>
        </div>

        <div>
          <ul>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
            <li><a>Link1</a></li>
          </ul>
        </div>


      </div>


      <div className='r'>
        <ul>
          <li>
            <LocalShippingIcon />
            Free LocalShipping
          </li>
          <li>
            <AccountBalanceWalletIcon />
            Buy now pay latter
          </li>
          <li>
            <PaymentsIcon />
            Cash on delivery
          </li>
          <li>
            <SecurityIcon />
            100% secure Payments
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
