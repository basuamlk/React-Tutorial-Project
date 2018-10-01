import React from 'react';
import ReactDOM from 'react-dom';


var ppl = {
  "Basu" : 12,
  "Ahmed" : 14,
  "Yassin" : 20
}

const mydiv = (<div> <h1>
    this is now a header tagged
</h1>
<p> somehting else</p>
</div>

);

ReactDOM.render(mydiv, document.getElementById('app'));
