import React from 'react';
import '../CSS/toolbar.css'


export const ViewToolBar = () => {

return(

  <div class="container-fluid">
    <div class="buttons row justify-content-center">
      <div class="col-md-6">
        <div class="col-3"><button type="button" class="btn btn-dark" onclick="">Back to center</button></div>
        <div class="col-3"><button type="button" class="btn btn-dark" onclick="">Floor Level</button></div>
        <div class="col-3"><button type="button" class="btn btn-dark" onclick="">Different Map Versions</button></div>
        <div class="col-3"><h1>Progress Tracker</h1></div>
        <div class="col-3">
          <ul>
            <li><a href="#Quest 1">Quest 1</a></li>
            <li><a href="#Quest 2">Quest 2</a></li>
            <li><a href="#Quest 3">Quest 3</a></li>
            <li><a href="#Quest 4">Quest 4</a></li>
            <li><a href="#Quest 5">Quest 5</a></li>
            <li><a href="#Quest 6">Quest 6</a></li>
            <li><a href="#Quest 7">Quest 7</a></li>
          </ul>

        </div>

      </div>

    </div>
  </div>



  );

}

