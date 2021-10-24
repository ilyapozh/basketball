import '../App.css';

export default function PlayerCard(props) {
    const onClick = () => {
        return fetch(`http://localhost:3005/players/${props.player.id}/${props.player.first_name}/${props.player.last_name}/${props.player.team.full_name}`, {
                    method: 'POST',
                })
                .then(res => {
                    
                    if(res.ok) return res.json();
                    console.log(res)
                    return Promise.reject(`Error: ${res.status} + ${res.statusText}`)
                })
                .then(res => {
                    props.onPlayer(res)
                })
                .catch(err => console.log(err))
    }

    return (
        <li className="player-card" onClick={onClick}>
            <p>Name: {props.player.first_name}</p>
            <p>LastName: {props.player.last_name}</p>
            <p>Team: {props.player.team.full_name}</p>
        </li>
    )
}