import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import QuestionsParentComp from './components/QuestionComp/QuestionsParentComp'
import './styles/global.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <QuestionsParentComp />
      <Footer />
    </div>
  )
}

export default App
