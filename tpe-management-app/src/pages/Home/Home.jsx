import { useState } from 'react'
import reactLogo from '../../assets/react.svg'

function Home()
{
    const [count, setCount] = useState(0)
    return(
        <>
            <h1>Bienvenue sur votre APP !</h1>
            <div>
            
            <a href="#" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
           
        </div>
       
        </>
    )
}

export default Home