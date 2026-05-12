import { useEffect, useState } from "react";

const useData = (endpoint, dataToState) => {
  const [state, setState] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoint);
      const data = await response.json();
      setState(dataToState(data));
    }

    fetchData();
  }, [endpoint, dataToState]);

  return state;
}

export default useData;