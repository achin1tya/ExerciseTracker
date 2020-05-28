import React ,{Component} from "react"
import DatePicker from 'react-datepicker'
import axios from 'axios'
// styling for datepicker
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateExercise  extends Component{
    constructor(props){
        // in JS when defining constructor call constructor of super class 
        super(props);

        // for the word this to work properly bind this to each method
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state = {
            username : "",
            description:"",
            duration:0,
            date: new Date(),
            users: []
        }
    }

    // before page details load 
        // right before anything loads 
        // lifecycle methods
        componentDidMount() {
            // this.setState({
            //     users:['test user'],
            //     username: 'test user'
            // })
            axios.get('http://localhost:5000/players')
            .then(response => {
                if ( response.data.length > 0 ){
                    this.setState({
                        users:response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
        }
    onChangeUsername(e){
        this.setState({
            // here target is the textbox
            username:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        // to prevent default behaviour of submit 
        e.preventDefault();
        const exercise = {
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        // here we submit data to db here
        console.log(exercise);
         
        // TODO link to DB
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then(res => console.log(res.data))
        // to take the person to exercises
        window.location = '/';
    }
    render(){
        return(
            <div>
                <h3> Create New Exercise Log </h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Username: </label>
                        <select ref= "userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange = {this.onChangeUsername}>
                        {
                            this.state.users.map((user)=>{
                                return <option
                                key = {user}
                                // here {user }after > is value that will appear
                                value = {user}>{user}  
                                </option>
                            })
                        }
                        </select>
                    </div>
                    <div className = "form-group">
                        <label>Description: </label>
                        <input type="text"
                        required
                        className = "form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Duration(in minutes): </label>
                        <input type="text"
                        required
                        className = "form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Date: </label>
                        <DatePicker
                            selected = {this.state.date}
                            onChange = {this.onChangeDate}
                        />
                    </div>
                    <div className = "form-group">
                        <input type="submit" value="Create Exercise Log" className= "btn btn-primary" ></input>
                    </div>
                </form>
            </div>
        )
    }
}