// Import Dependencies
import logo from './logo.svg';
import './App.css';
import './styles.css'
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
  return (<>
    <div className="main" >
      <Sidebar />
      <Section sectionClass="reviews" sectionTitle="Reviews"/>
      <Section sectionClass="average-rating" sectionTitle="Average Rating"/>
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  </>);
}

export default App;
