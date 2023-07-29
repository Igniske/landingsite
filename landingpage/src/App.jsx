import './App.css'
import FirstPanel from './components/FirstPanel'
import FourthPanel from './components/FourthPanel'
import FifthPanel from './components/FifthPanel'
import Intro from './components/Intro'
import Lightbar from './components/Lightbar'
import Navbar from './components/Navbar'
import SecondPanel from './components/SecondPanel'
import ThirdPanel from './components/ThirdPanel'
import Video from './components/Video'
import Footer from './components/Footer'
function App() {

  return (
    <>
        <div className='h-screen font-sans'>
          <Navbar></Navbar>
          <Lightbar></Lightbar>
          <Intro></Intro>
          <FirstPanel></FirstPanel>
          <Video></Video>
          <SecondPanel></SecondPanel>
          <ThirdPanel></ThirdPanel>
          <FourthPanel></FourthPanel>
          <FifthPanel></FifthPanel>
          <Footer></Footer>
        </div>
    </>
  )
}

export default App
