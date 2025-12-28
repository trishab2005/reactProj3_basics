
import './App.css'

function App() {

console.log("Hello from React !")

const nickname = "Puchi"

let a= 20
let b= 40

function greet(){
  alert("kaise ho?")
}

function talk(){
  console.log("talking...", nickname)
}
const talk2 = () => {
  console.log("talking again- USING ARROW FUNCTION...", nickname)
}

  return (
    <>
      <div>
        <h1>Hello, Trisha!</h1>
        <br />
        <h2>{nickname}</h2>
        <p>I am human</p>
        <p>The sum of {a} and {b} is {a + b}</p>
        <button onClick={greet}>click me to ask</button>
        <button onClick={talk}>click me to talk</button>
        <button onClick={talk2}>click me to talk again</button>
        <button onClick={() => console.log("THIS IS REACT ARROW FUNCTION CALLED DIRECTLY")}>clickME4</button>
      </div>
    </>
  )
}

export default App
