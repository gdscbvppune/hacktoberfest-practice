import React from "react";
import GetContributors from "./GetContributors";

// import contributors data
import contributors from "../content/contributors.json";

const Contributors = () => {
  return (
    <div>
      <div className="flex items-start justify-start mt-20">
        <section className="flex-1 text-4xl font-bold text-center text-white">
          <h1>Hacktoberfest Practice</h1>
          <div className="flex flex-wrap items-center justify-center pb-4 m-4 overflow-y-auto">
            <GetContributors users={contributors} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contributors;
