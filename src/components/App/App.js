import React from 'react';
import buttonRight from '../../image/button-right.svg'
import Check from '../../image/check.svg'
import CheckActive from '../../image/check-active.svg'
import Website from '../../image/Website.svg'
import eCommerce from '../../image/eCommerce.svg'
import Domain from '../../image/Domain.svg'
import AppImg from '../../image/App.svg'
import Shopify from '../../image/Shopify.svg'
import SaaS from '../../image/SaaS.svg'
import Amazon from '../../image/Amazon.svg'
import Other from '../../image/Other.svg'



import './App.css';

function App() {
   return (
      <div className="root">
         <div className="page">

            <div className="header">
               <img src={buttonRight} alt="Button-Right" className="header__img"/>
               <div>
                  <h2 className="header__title">Select category</h2>
                  <span className="header__text">Dashboard &middot; My Listing &middot; Listing #2141</span>
               </div>
               <button type="button" className="header__button">Continue</button>
            </div>

            <ul className="main__list">
               <li className="main__item">
                  <img src={CheckActive} alt="" className="main__item-check"/>
                  <img src={Website} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">Website</h3>
                  <p className="main__item-text">Display Advertising, Affiliate Marketing, Subscription etc.</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={eCommerce} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">eCommerce</h3>
                  <p className="main__item-text">Online marketplaces, digital products, dropshipping etc.</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={Domain} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">Domain</h3>
                  <p className="main__item-text">Create listing for domains .com .net .org .site etc.  </p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={AppImg} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">App</h3>
                  <p className="main__item-text">Create new listing and sell for Android or IOS apps</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={Shopify} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">Shopify</h3>
                  <p className="main__item-text">Online Shopify Marketplaces</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={SaaS} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">SaaS</h3>
                  <p className="main__item-text">Software as a Service. Purchases, Subscription etc.</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={Amazon} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">Amazon</h3>
                  <p className="main__item-text">Amazon FBA, Amazon KDP, Amazon FBM, Amazon Merch</p>
               </li>
               <li className="main__item">
                  <img src={Check} alt="" className="main__item-check"/>
                  <img src={Other} alt="" className="main__item-img"/>
                  <h3 className="main__item-title">Other</h3>
                  <p className="main__item-text">Gaming or Social Account, Game, Template, PBN etc.</p>
               </li>

            </ul>

         </div>



      </div>
   );
}

export default App;
