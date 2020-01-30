// #1 import React
import React from 'react';
import Card from './Card';

// #2 create a function
function Greet({whom}) {
    // React functions always return a single value
    // written as HTML
    const greetingText = `Hello, ${whom}`;

    return (
      <div>
          <Card text={greetingText} />
      </div>
    );
}

// #3 export the function
export default Greet;