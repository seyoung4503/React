import Post from './components/Post';
import PostList from './components/PostList';

function App() {
  const authors = ["Maximilian", "Manuel"];
  const bodys = ["React.js is awesome!", "Check out the full course!"];
  return (
    <main>
      <PostList />
    </main>
  );
}



export default App
