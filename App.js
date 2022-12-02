import './App.css';
import React, { useEffect, useState } from "react";
// contains bakery data and npasses each bakery item to the BakeryItem component

import Navigation from './components/Navigation';
import ShopItem from './components/ShopItem';
import menuData from './menu-data.json';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
menuData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [sortBy, setSort] = React.useState("none");
  const [filterList, setFilters] = React.useState([]);

  // updating list/maps
  const [menuList, setList] = React.useState([]);

  const sortItems = () =>{
    // console.log("App sortBy value:" + sortBy);
    if (sortBy == "price"){
      menuData.sort((a,b) => {
        return a.price - b.price;
      })
    } else if (sortBy == "calories"){
      menuData.sort((a,b) => {
        return a.calories - b.calories;
      })
    }
  }

  const checkIfItemContainsAll = (item) => {

  }

  const matchesFilterType = (item) => {
    console.log(filterList);
    if (filterList.length == 0){ // it contains only "All"
      return true;
    } else { 
      for (var i = 0; i < filterList.length; i++){
        if (!item.description.includes(filterList[i])){
          return false;
        } 
      }
      return true;
    }
  }

  const filteredData = menuData.filter(matchesFilterType);



  return (
    <div className="body">
      <div className="header">
      </div>
      <div className="main-container">
        <div className="navigation">
          <Navigation sortBy={sortBy} setSort={setSort} 
          filterList={filterList} setFilters={setFilters}/>
        </div>
        <div className="menu-container">
          {sortItems()}
          
          {/* maps json datafile to menu card item */}
          {/* {menuData.map((item) => (
            <ShopItem item={item}/>
          ))}
           */}

          {filteredData.map((item) => (
            <ShopItem item={item}/>
          ))}

          

          
        </div>
      </div>
    </div>
  );
}

// sets state to selected type
// called in html button onSelect()
function selectFilterType(){

}



export default App;
