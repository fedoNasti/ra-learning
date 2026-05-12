import { useRef } from "react";
import { useEffect, useState, useContext } from "react";
import usePolling from "../hooks/usePolling";
import AuthContext from '../contexts/AuthContext';

const LatestNews = () => {
  const [pollingInterval, setInt] = useState(5 * 1000);
  const {token, setToken} = useContext(AuthContext);

  const {data: news, isLoading, hasError} = usePolling(
    import.meta.env.VITE_API_URL,
    pollingInterval,
    []
  )

  return (
    <>
      <h3>Latest News</h3>
      <button onClick={() => setInt(p => p - 500)}>Faster</button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {news.map(item => <li key={item.id}>{item.content} : {item.createdAt}</li>)}
      </ul>
    </>
  )
}

export default LatestNews;