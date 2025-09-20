import React  from "react";

const IssuesCard = React.memo(
  (data: { title: string; number: number; login: string; lables: string }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid aqua",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <p>{data.title}</p>
          <p>{data.number}</p>
          <p>{data.login}</p>
          <p>{data.lables}</p>
        </div>
      </>
    );
  }
);

export default IssuesCard;
