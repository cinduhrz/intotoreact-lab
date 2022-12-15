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
      <Section sectionClass="reviews" sectionTitle="Reviews" num="1,281" />
      <Section num="4.6" sectionClass="average-rating" sectionTitle="Average Rating"/>
      <SentimentAnalysis num1="960" num2="122" num3="321" />
      <WebsiteVisitors num="821" />
    </div>
  </>);
}

export default App;
