import React from 'react';

const Loader = () => (
  <svg width="45px" height="45px" viewBox="0 0 100 100">
    <circle cx="50" cy="50" fill="none" stroke="#3fb573" strokeWidth="5" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
    </circle>
  </svg>
);

export default Loader;