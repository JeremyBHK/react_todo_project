<<<<<<< HEAD
import React, { Component } from 'react'
import { HydraAdmin } from '@api-platform/admin'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});
class App extends Component { 
  render() {
    return <HydraAdmin theme={theme} entrypoint="http://127.0.0.1:8000/api/"/> // Replace with your own API entrypoint
  }
}
=======
// import React, { Component } from 'react'
// import { HydraAdmin } from '@api-platform/admin'

// class App extends Component { 
//   render() {
//     return <HydraAdmin entrypoint="http://127.0.0.1:8000/api/"/> // Replace with your own API entrypoint
//   }
// }
>>>>>>> d80e43dca87aab813d109c177e5735d985bbbab6

// export default App