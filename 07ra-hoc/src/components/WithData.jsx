import { useState, useEffect } from 'react';

const withData = (Component, endpoint, propName) => {
  return function WithData(props) {
    const [data, setData] = useState();

    useEffect(() => {
      async function fetchData() {
        let url = endpoint;

        if (typeof endpoint === 'function' && props.id !== undefined) {
          url = endpoint(props.id);
        }

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      }

      fetchData();
    }, [props.id]);

    return <Component {...props} {...{ [propName]: data}} />
  }
}

export default withData;