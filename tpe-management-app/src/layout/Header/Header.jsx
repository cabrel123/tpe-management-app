import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Header()
{
   
    
 const PrimaryNav = styled.nav`
  z-index: 14;
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
`

const Menu = styled.div`
  align-items: center;
  margin-right: -25px;
  margin-left: auto;
`
const UlNav = styled.ul`
display: flex;
padding: 0;
@media screen and (max-width: 768px) {
      position: absolute;
        top: 60px;
        left: 0;
        flex-direction: column;
        width: 100%;
        background-color: #0d012c;
        border-top: 1px solid black;
  }
`
const NavList = styled.li`
list-style-type: none;
  margin: 0 1rem;
  
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
    padding: 0.6em 0;
  border-bottom: 1px solid #3b3748;
}
`
const Header = styled.header`
background: #0d012c;
position: relative;
top: 0;
right: 0;
left: 0;
z-index: 1030;
transition: top 0.3s;
`

const Navi = styled.div`
justify-content: space-between!important;
    margin: auto;
    max-width: 2700px!important;
    padding-left: 60px;
    padding-right: 60px;
`



    return(
        <>
            <Header className='app-nav'>
                <div className='navbur'>
                    <Navi>
                        <div className='col-xl-12 d-flex align-items-center lefty'>
                        <h5 className='devman'>TPE App <span className='blink'> _</span></h5>
                        <PrimaryNav className='navigation'>
                        
                        <Menu className='navigationmenu'>
                        
                        <UlNav className='navlist'>
                        <NavList><Link className='navlink' to={'/'}>Accueil</Link></NavList>
                        <NavList><Link className='navlink' to={'/login'}>Connexion</Link></NavList>
                        <NavList><Link className='navlink' to={'/dashboard'}>Admin dashboard</Link></NavList>
                        <NavList><Link className='navlink' to={'/contacts'}>Contacts</Link></NavList>
                            </UlNav>
                        </Menu>
                            
                        </PrimaryNav>
                            
                        </div>
                    </Navi>
                </div>
            </Header>
        </>
    )
}

export default Header