import Chai from "./Chai"
import Code from "./Code"
function App(){

  const username = 'chai'
  return(
    <div>
      <h1>Chai aur React {username}</h1>

    <Code/>
    <Chai/>
    </div>
  )
}

export default App