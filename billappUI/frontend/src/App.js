import {BrowserRouter, Route, Redirect } from 'react-router-dom'

import Customer from './Components/customers/customer'
import MenuDrawer from './menu'
function App() {
  return (
   <>
   <MenuDrawer/>
   {/* <BrowserRouter>
   
   <Route exact path='/allcustomers' component = {Customer}/>
      
    </BrowserRouter> */}
    
   </>
  );
}

export default App;
