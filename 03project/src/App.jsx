
import{ useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'


function App() {
    const [count, setCount] = useState(0)
    return(
        <>
        <h1 className=' bg-red-300 mb-4'>Govind</h1>
        <Card username="oh man" btnText="visitt me" />
        <Card username="govind" btnText="click me" />

       
       
        </>
       
    )
}
export default App