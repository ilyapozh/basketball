import '../App.css';
import PlayerCard from './PlayerCard';

export default function ResultContainer(props) {
    return (
        <>
        <div className="result-container">
          <h1>Result: </h1>
          <ul className="result-container__list">
              {props.players.map( player => 
                  <PlayerCard key={player.id} player={player}/>
              )}
          </ul>
        </div>
        </>
    )
}