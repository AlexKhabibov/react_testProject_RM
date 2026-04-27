import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import QuestionsList from './components/QuestionsList/QuestionsList'
import './styles/global.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <QuestionsList />
      <Footer />
    </div>
  )
}

export default App
