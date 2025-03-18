import './App.css';
import Navbar from './components/navbar';
import PageFrame from './components/pageFrame';
import {HM_firstFrame, HM_secondFrame} from './components/homepage';

function App() {

  return (
    <div className="main-container">
      <PageFrame>
        <HM_firstFrame>
          <Navbar />
        </HM_firstFrame>
      </PageFrame>
        <HM_secondFrame>
          
        </HM_secondFrame>
      <PageFrame>
      </PageFrame>
      <PageFrame>
      </PageFrame>
      <PageFrame>
      </PageFrame>
    </div>
  )
}

export default App