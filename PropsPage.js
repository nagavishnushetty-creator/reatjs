import React, { useEffect } from 'react';
function PropsPage({ message }) {
  useEffect(() => {
    console.log(`Props received: ${message}`);
  }, [message]); 
  return (
    <div>
      <h2>Props Page</h2>
      <p>{message}</p>
    </div>
  );}
export default PropsPage;