import Post from "./Post";




function PostsList(props) {
    return (
        <ul>
            <Post author="Maximilian" body="React.js is awesome!" />
            <Post author="Manuel" body="Check out the full course!" />
        </ul>
    );
};

export default PostsList;