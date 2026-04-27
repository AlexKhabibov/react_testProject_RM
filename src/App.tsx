import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import QuestionsList from './components/QuestionsList/QuestionsList'
// import Sidebar from './components/Sidebar/Sidebar'
import './styles/global.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <QuestionsList />
      <Footer />
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
