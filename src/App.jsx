import './App.css'
import ContactForm from './components/Contact/ContactForm'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
    <Navigation/>
    <main className='main_conatiner'>
      <Header/>
      <ContactForm/>
    </main>
    </>
  )
}

export default App
