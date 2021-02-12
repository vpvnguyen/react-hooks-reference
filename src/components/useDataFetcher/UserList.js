import { useEffect } from "react";
import { useDataFetcher } from "./useDataFetcher";

const style = {
  container: {
    display: "flex",
  },
  card: {
    border: "1px solid black",
    borderRadius: "2rem",
  },
};

const randomUserApiUrl = `https://randomuser.me/api/?results=5`;
const initialData = null;

export const UserList = () => {
  const [{ loading, error, data }, setUrl] = useDataFetcher(randomUserApiUrl);

  const handleOnClick = async (event) => {
    await setUrl(randomUserApiUrl);

    // event.preventDefault();
    console.log(data);
  };

  return (
    <div style={style.container}>
      <button onClick={(event) => handleOnClick(event)}>Get Users List</button>

      {loading && <div>Loading user list...</div>}

      {error && <div>There was an error loading the user list.</div>}

      {data &&
        data.results.map((user, index) => {
          <div>{user.name.first}</div>;
        })}
    </div>
  );
};
