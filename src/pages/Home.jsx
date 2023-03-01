import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutIconLink from '../components/AboutIconLink';
import { FeedbackProvider } from '../context/FeedbackContext';

function Home() {
  return (
    <FeedbackProvider>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        {/*handleDelete={(id) => deleteFeedback(id)}*/}
        {/* <Card>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </Card> */}
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  );
}

export default Home;
