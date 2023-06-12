import React from 'react';
import loading from '../../assets/imgaes/pink-lotus-icon3.png';
import '../loading/LoadingCss.scss'


function Loading() {
  return (
    <div className="bg-loading hide">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <img
      src={loading}
      alt="logo"
      className="loading-logo"
    />
  </div>
  )
}
export default Loading;

