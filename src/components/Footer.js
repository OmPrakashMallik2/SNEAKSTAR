import React from 'react';
import "./Footer.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import SecurityIcon from '@mui/icons-material/Security';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='Footer'>
      <div className='main'>


        <div className='l'>
          <div>
            <h1 className='title'>SneakStar</h1>
          </div>

          <div className='footer-linkes'>
            <ul className='footer-list'>
              <li>
                <a className='social' href='https://www.instagram.com/mallik_75/'>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a className='social' href='https://www.instagram.com/mallik_75/'>
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-linkes'>
            <ul className='footer-list'>
              <li><Link >PRIVACY POLICY</Link ></li>
              <li><Link >SHIPPING POLICY</Link ></li>
              <li><Link >RETURN POLICY</Link ></li>
              <li><Link >REFUND POLICY</Link ></li>
              <li><Link >DISCLAIMER POLICY</Link ></li>
              <li><Link >CANCELLATION POLICY</Link ></li>
              <li><Link >TERMS OF USE</Link ></li>
              <li><Link >CONTACT US</Link ></li>
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
            <li className='secure'>
              <SecurityIcon />
              100% Payment Protection
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-2 center'>
        <p className='copyryt'>© 2023 Om Prakash Mallik. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
