import React,{Component} from 'react'
import axios from 'axios'


const Player = (props)=>(
    <tr>
        <td>{props.player.username}</td>
        <td>{props.player.createdAt.substring(0,10)}</td>
        <td>
            <button onClick = {() => {props.deletePlayer(props.player._id)}}>Delete</button>
        </td>
    </tr>
)
export default class ShowPlayers extends Component{
    
    constructor(props){
        super(props);

        // this.state = this.state.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
        this.state={
            players:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/players/')
        .then((response) => {
            this.setState({
                players:response.data
            })
        })
    }
    playersList(){
        return this.state.players.map((player) => {
            return <Player player={player} key={player._id} deletePlayer={this.deletePlayer}/>
        })
    }

    deletePlayer(id){
        axios.delete('http://localhost:5000/players/'+id)
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(`Error :`+err));

        this.setState({
            players:this.state.players.filter((player) => player._id !== id)
        })
    }
    render(){
        return(
            <div>
                <h3> Players List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Joined On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.playersList()}
                    </tbody>
                </table>
            </div>  
        )  
    }
}
