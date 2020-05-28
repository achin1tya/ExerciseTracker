import React ,{Component} from "react"
import axios from 'axios'

import DatePicker from 'react-datepicker'

// styling for datepicker
import 'react-datepicker/dist/react-datepicker.css'


export default class EditExercise extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:"",
            description:"",
            duration:"",
            date: new Date(),
            users:[]
        }
    }
    componentDidMount(){
        // to get the username by exercise 
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                username:response.data.username,
                description:response.data.description,
                duration:response.data.duration,
                date:new Date(response.data.date)
            })
        })
        .catch((error)=>console.log("Error:"+error));
        // get the users 
        axios.get('http://localhost:5000/players/')
        .then( (response) => {
            this.setState({
                users:response.data.map((user)=>user.username)
                // here we donot set the username 
            })
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
        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id,exercise)
        .then(res => console.log(res.data))
        // to take the person to exercises
        window.location = '/';
    }
    
    render(){
        return(
            <div>
                <h3> Edit New Exercise Log </h3>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text"
                        value= {this.state.username}
                        />
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
                        <input type="submit" value="Edit Exercise Log" className= "btn btn-primary" ></input>
                    </div>
                </form>
            </div>
        )
    }
    
}

