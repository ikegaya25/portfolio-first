// import { useEffect, useState } from 'react';
// import './App.css';
// import { ColoredMessage } from './components/ColoredMessage';
// import { CssModules } from './components/CssModules';
import { styledComponents } from './components/styledComponents';

export const App = () => {
//   const [num, setNum] = useState(0);
  
//   useEffect(()=> {
//     console.log("レンダリング副作用")
//   },[num])

//   const onClickButton = () => {
//     setNum((prev)=>prev + 1);
//     console.log("It keeps rendering")
//     };

//   const contentPinkStyle = {
//     color: "pink",
//     fontSize: "20px"

  return (

    <>
    <styledComponents />
    </>
  //   <>
  //     <h1>こんにちは</h1>
  //     <p style={contentPinkStyle }>元気です</p>
  //     <ColoredMessage color="blue" message="元気です" />
  //     <button onClick={onClickButton}>ボタン</button>
  
  //     <p>{num}</p>
  //   </>
  
)
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Main />
//       <Footer />
//       <Footer2 />
//       <Footer3 />
//     </div>
//   );
// }


{/* <CssModules /> */}