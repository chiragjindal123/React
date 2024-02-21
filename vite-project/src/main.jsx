import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>

//     <h1>customapp \ chai</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google'
// }
// // it not run in root due to it is custom render we define our own variables but react have its own

// const anotherElement = (
//   <a href="https://www.google.com" target='_blank'>visit google</a>
// )
// // it will run due to it is react render bable inject this babel is transpiler

// const reactElement = React.createElement(
//   'a',{
//     href: 'https://www.google.com', target: '_blank'
//   },
//   'click to visit google'
// )
// // reactElement is a react element using React.createElement

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
    /* <div>
      <App />
      <MyApp />
    </div> */
    // anotherElement
    // reactElement 
    <App />
    }
  </React.StrictMode>,
)
