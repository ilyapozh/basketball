import '../App.css';

export default function PlayerCard(props) {
    return (
        <li className="player-card">
            <p>Name: {props.player.first_name}</p>
            <p>LastName: {props.player.last_name}</p>
            <p>Team: {props.player.team.full_name}</p>
        </li>
    )
}