import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return <div>
          <h1> Hello </h1>
          <Link to="/second">Go to second page</Link>
        </div>;
};

