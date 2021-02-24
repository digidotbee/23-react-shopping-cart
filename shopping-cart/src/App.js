import React from 'react';
import './App.css';
// import { Counter } from './features/counter/Counter';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Product } from './features/products/Product'
import { FaGem, FaHeart } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <Product />
      {/* <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FaHeart />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
      </ProSidebar> */}
    </div>
  );
}

export default App;
