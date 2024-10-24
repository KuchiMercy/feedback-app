import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import './App.css';
import FeedbackList from './components/FeedbackList.jsx';
import Header from "./components/Header.jsx"
import FeedbackData from './components/FeedbackData.js';
import FeedbackStat from './components/FeedbackStat.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import About from './pages/About.jsx';
import Card from './components/shared/Card.jsx';
import Post from './components/Post.jsx'
import { NewFeedbackProvider } from './NewFeedbackContext.js';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newFeed = feedback.filter(item => { return (item.id !== id) })

      console.log(newFeed);

      setFeedback(newFeed)
    }
  }

  const averageRating = (feedback.reduce((acc, item) => {
    return acc += item.rating
  }, 0) / feedback.length).toFixed(1)

  const addFeedback = (newFeedback) => {
    newFeedback.id = `leadway-${uuidv4()}`;
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }



  return (
    <NewFeedbackProvider>
      <Router>
        <Header />
        <Link to='/about'>About Page</Link>

        <div className='container'>
          <Routes>
            <Route path='/' element={<>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStat />
              <FeedbackList deleteFeedback={deleteFeedback} /></>}>
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/post*' element={<Post />} />
          </Routes>
          <Card>
            <NavLink to='/' activeClassname='active'>Home</NavLink>
            <NavLink to='/about' activeClassname='active'>About</NavLink>

          </Card>

        </div>
      </Router>
    </NewFeedbackProvider>
  );
}

export default App;
