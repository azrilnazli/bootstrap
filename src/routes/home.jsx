import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MovieCard from './MovieCard';


export default function Home() {
  const movies = [
    {id: 1, title: 'The Avengers', content: 'Welcome to learning React!', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg' },
    {id: 2, title: 'Lord of The Rings', content: 'You can install React from npm.', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sSPfpe8gYbkBrxx8i1dtUk4EsAi.jpg'},
    {id: 4, title: 'Jurassic Park', content: 'You can install React from npm.', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qIm2nHXLpBBdMxi8dvfrnDkBUDh.jpg' },
    {id: 5, title: 'Mother / Android', content: 'Welcome to learning React!', src: 'https://www.themoviedb.org/t/p/w220_and_h330_face/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg' },
    {id: 6, title: 'Henry Danger', content: 'You can install React from npm.', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lNLczVun5zP0a6ct5pZGghBpBkV.jpg' },
    {id: 7, title: 'Dark', content: 'Welcome to learning React!', src: 'https://www.themoviedb.org/t/p/w130_and_h195_bestv2/mCekE85ukPTMJ0jN179TvAkCHqY.jpg' },
    {id: 8, title: 'Attack of the Titans', content: 'You can install React from npm.', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ihuDg9TeRzoOhv2cZVA8gi50NFl.jpg' },
    {id: 8, title: 'Shang-Chi', content: 'You can install React from npm.', src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg' },
  ];

  
    return (
      <div className='row'>
        {movies.map((movie, index) => ( 
          <div className='col'>
            <MovieCard id={ movie.id } title={ movie.title } content={ movie.content } src={ movie.src } /> 
          </div>    
        ))}

      </div>
      
    );
  }