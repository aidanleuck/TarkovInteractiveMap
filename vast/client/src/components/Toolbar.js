import React from 'react';
import '../CSS/toolbar.css'


export const ViewToolBar = () => {
    return(
       <div class="position-fixed toolbar">
         <div class="container-fluid">
           <div class="buttons row justify-content-left">
             <div class="col-md-15">
               <div class="col-6"><button type="button" class="btn btn-dark" onclick="">Back to center</button></div>
               <div class="col-6"><button type="button" class="btn btn-dark" onclick="">Floor Level</button></div>
               <div class="col-6"><button type="button" class="btn btn-dark" onclick="">Different Map Versions</button></div>
               <div class="col-7"><h1>Progress Tracker</h1></div>
               <div class="col-6">
                 <ul>
                   <li><a href="#Quest 1" class="btn btn-dark" >Quest 1</a></li>
                   <li><a href="#Quest 2" class="btn btn-dark" >Quest 2</a></li>
                   <li><a href="#Quest 3" class="btn btn-dark" >Quest 3</a></li>
                   <li><a href="#Quest 4" class="btn btn-dark" >Quest 4</a></li>
                   <li><a href="#Quest 5" class="btn btn-dark" >Quest 5</a></li>
                   <li><a href="#Quest 6" class="btn btn-dark" >Quest 6</a></li>
                   <li><a href="#Quest 7" class="btn btn-dark" >Quest 7</a></li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
    );
}   

