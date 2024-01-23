import React from 'react';
import { Link } from 'gatsby';

const style = {
  backgroundColor: 'white',
  color: 'black',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  marginRight: '1rem',
  fontWeight: 'bold',
};

const Header = ({data}) => {
  return (
    <nav
      style={{
        backgroundColor: '#3498db',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <Link to="/dakshNotes">KPecommerce</Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
        >
          {data==="contentStack/"?(<Link to="/dakshNotes" style={style}>
            Home
          </Link>):(<Link to="/contentStack" style={style}>
            ContentStack API
          </Link>)}
        {data === "Notes/" ? (
          <Link to="/dakshNotes" style={style}>
            Home
          </Link>
        ) : (
          <Link to="/Notes" style={style}>
            Notes
          </Link>
        )}

          {data==="dummyAPI/"?(<Link to="/dakshNotes" style={style}>
            Home
          </Link>):(
          <Link to="/dummyAPI" style={style}>
            Dummy API
          </Link>)}
    
          
      </div>
      <h2 >{data}</h2>
    </nav>
  );
};

export default Header;
