import React from 'react' // export default
import ReactDom from 'react-dom'

import App from './app'
import { UserContextProvider } from './contexts/user-context'

ReactDom.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('app'),
)
