import styled from 'styled-components'
import Home from '../pages/Home/Home'

function Layout()
{
    const MainDiv = styled.main`
    position: relative;
    width:100%;
    height:100%;
    `
    
    return(
        <>
        <MainDiv>
        <Home />
        </MainDiv>
        </>
    )
}

export default Layout