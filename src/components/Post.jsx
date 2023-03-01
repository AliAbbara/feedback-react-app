// import { useParams } from 'react-router-dom';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  //   const params = useParams();
  const navigate = useNavigate();

  const status = 200;

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  const onClick = () => {
    console.log('lkj');
    navigate('/about');
  };
  return (
    <div>
      <h1>Post component</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello allah</h1>} />
      </Routes>
      {/* <h1>Post {params.id}</h1> */}
      {/* <p>Name: {params.name}</p> */}
    </div>
  );
};

export default Post;
