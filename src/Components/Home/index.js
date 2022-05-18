import React from "react";
import Top from '../Movies/Top';
import Upcoming from '../Movies/Upcoming';
import TopRated from '../Movies/TopRated';
import Serie from '../Serie/Popular';
import TopRatedSerie from "../Serie/TopRated";

export default function App() {
  return (
    <>
      <Top />
      <div className="container mx-auto px-4">
         <hr />
      </div>

      <TopRated />
      
      <div className="container mx-auto px-4">
         <hr />
      </div>

      <Upcoming />

      <div className="container mx-auto px-4">
         <hr />
      </div>

      <Serie />

      <div className="container mx-auto px-4">
         <hr />
      </div>

      <TopRatedSerie />
    </>
  );
}
