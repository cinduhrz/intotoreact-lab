// Import Dependencies
import logo from './logo.svg';
import './App.css';
import './styles.css'
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import SentimentAnalysis from './components/SentimentAnalysis';

function App() {
  return (<>
    <div className="main" >
      <Sidebar />
      <Section sectionClass="reviews" sectionTitle="Reviews"/>
      <Section sectionClass="average-rating" sectionTitle="Average Rating"/>
      <SentimentAnalysis />
    </div>
  </>);
}

export default App;
