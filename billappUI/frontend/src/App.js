import {BrowserRouter, Route, Redirect } from 'react-router-dom'

import Customer from './Components/customers/customer'

function App() {
  return (
   <>
   <BrowserRouter>
   <Route path='/allcustomers'>
      <Customer/>
    </Route>
    </BrowserRouter>
   </>
  );
}

export default App;
