import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import "../scss/home.scss";

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    dispatch(logoutUser());
  };

  return (
    <div className="home">
      <h1>Welcome to QT</h1>
     
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
