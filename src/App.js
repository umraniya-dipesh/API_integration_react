import React from 'react'
import ApiCryptoBitcoin from './Components/ApiCryptoBitcoin'
import ApiGithubuserData from './Components/ApiGithubuserData'
import ApiJsonParactice from './Components/Api_JsonParactice'

const App = () => {
  return (
    <>
      <div className="container">
        <ApiJsonParactice/>
        {/* <ApiCryptoBitcoin/> */}
        <ApiGithubuserData/>
      </div>
    </>
  )
}

export default App