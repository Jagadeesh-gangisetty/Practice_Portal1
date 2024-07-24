import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  function handleNavigation(index) {
    navigate('/Parents', { state: { key: index } }); 
  }

  return (
    <div>
      <p>
        <button onClick={() => handleNavigation(0)}>Parents</button>
        <button onClick={() => handleNavigation(1)}>Siblings</button>
      </p>
    </div>
  );
}

export default Nav;
