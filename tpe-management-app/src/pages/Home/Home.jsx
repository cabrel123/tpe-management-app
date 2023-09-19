import { useState } from 'react'
import reactLogo from '../../assets/Group171.svg'

function Home()
{
    const [count, setCount] = useState(0)
    return(
        <>
            <h1>Bienvenue sur votre APP !</h1>
        <h3 className='text-center'>TPE APP Management est un modèle simple avec un design créatif qui permet à une TPE de gérer ses campagnes de marketing.</h3>
            <div>
            
            <a href="#" target="_blank">
            <img src={reactLogo} className="react" alt="React logo" />
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