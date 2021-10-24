import '../App.css';
import FavoritePlayerCard from './FavoritePlayerCard';

export default function FavoritesContainer(props) {
    return (
        <>
        <div className="favorite-container">
          <h1 className="result-container__title">Favorite: </h1>
          <ul className="result-container__list">
              {props.players.map( player => 
                  <FavoritePlayerCard key={player._id} player={player} />
              )}
          </ul>
        </div>
        </>
    )
}