import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IssuesCard from "../components/IssuesCard";

const Main = () => {
  const { owner, repoName } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.github.com/repos/${owner}/${repoName}/issues`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const reponse = await axios.get(url);
        console.log(reponse.data);
        setData(reponse.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading issues...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      {data.map((d) => {
        return (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <IssuesCard
              title={d.title}
              number={d.number}
              login={d.user.login}
              lables = "{JSON.stringify(d.labels)}"
            />
          </div>
        );
      })}
    </>
  );
};

export default Main;
