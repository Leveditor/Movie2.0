import Top from '../Movies/TopMovieHome';
import Upcoming from '../Movies/UpcomingMovieHome';
import TopRated from '../Movies/TopRatedMovieHome';
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
