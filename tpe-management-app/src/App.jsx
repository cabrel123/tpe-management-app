import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Error from './Pages/Error/Error'
import AdminLogin from './pages/Login/Login'
import ContactList from './components/ContactList'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CategoryList from './components/CategoryList'
import RegisterForm from './components/Register'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />} error={<Error />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/contacts' element={<ContactList />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
