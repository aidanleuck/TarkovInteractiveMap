import React from 'react';
import '../CSS/marker.css'
/**
 * 
 * @author Sunny Moran and Aidan Leuck
 */
export const ViewMarker = () => {
  return (

    <div class="container-fluid">
      <h1> Markers</h1>
      <div class="row buttons justify-content-center">
        <div class="col-2"><button type="button" class="btn btn-success" onclick="">Enable All</button></div>
        <div class="col-2"><button type="button" class="btn btn-danger" onclick="">Disable All</button></div>
      </div>

      <div class="buttons row justify-content-center">
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Loose Loot</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Locked Door</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Extraction</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Dead Scav</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Filing Cabinet</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Safe</button>
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-dark" onclick="">Duffle Bag</button>
        </div>
        <div class="col-1">
          <button type="button" onclick="" class="btn btn-dark">Key</button>
        </div>
      </div>
      <div>
        <div class="buttons row justify-content-center">
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Armor</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Crate</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Location</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Miscellaneous</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Money</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Provisions</button>
          </div>
          <div class="col-1">
            <button type="button" class="btn btn-dark" onclick="">Valuable</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Grenade</button>
          </div>
        </div>

        <div class="row buttons justify-content-center">
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Weapon Box</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Quest Item</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Spawn Point</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">MEDS</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Weapon Mods</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Boss</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Loose Loot</button>
          </div>
          <div class="col-1">
            <button type="button" onclick="" class="btn btn-dark">Loot</button></div>
        </div>
      </div>

    </div>


  );
}