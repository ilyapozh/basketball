import '../App.css';

export default function FavoritePlayerCard(props) {
    return (
        <li className="player-card" >
            <p>Name: {props.player.name}</p>
            <p>LastName: {props.player.lastName}</p>
            <p>Team: {props.player.team}</p>
        </li>
    )
}