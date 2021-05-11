import React from 'react';
import $ from 'jquery';
import './profile.css';
class UserGithub extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userid:'',
            username: '',
            githubtUrl: '',
            avatarUrl: '',
            followers_amount:'',
            public_repos:'',
        }
    }

    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(this.props.source);
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    userid: data.id,
                    username: data.login,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                    followers_amount:data.followers,
                    public_repos:data.public_repos,
                });
            }
        });
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    render() {
        return (
            <div>
                <div class="photo"> <img src={this.state.avatarUrl} /></div>
                <div class="uername">name:{this.state.username}</div>
                <h6>id:{this.state.userid}</h6>
                <h3>followers:{this.state.followers_amount}</h3>
                <h3>public_repos:{this.state.public_repos}</h3>

                <a href={this.state.githubtUrl}>Github Link</a>.<br></br>

            </div>
        );
    }
    
}
export default UserGithub;