import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef()

  const copytoClipboard = useCallback(() => {
    // passRef.current.select()
    // document.execCommand('copy')
    // alert('password copied to clipboard')  or
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  // const passwordGenerator = useCallback(fn,dependencies) format to write function
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }

    if(character){
      str += "!@#$%^&*()_+"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  

  },[length, number, character, setPassword])

  useEffect(() => {
    passwordGenerator()
  } ,
  [length, number, character, passwordGenerator])

  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passRef}
          ></input>

          <button 
          className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copytoClipboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            ></input>
            <label >length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={number}
              id="numberInput"
              onClick={() => {setNumber((prev) => !prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={character}
              id="characterInput"
              onClick={() => {setcharacter((prev) => !prev);
              }} />
              <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
