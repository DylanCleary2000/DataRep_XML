import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount()//Life Cycle Hook with a Component.
    {//aysnchronous!
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')//Using Axios for HTTP requests to jsonblob.com
            .then((response) => {
                this.setState({
                    movies: response.data.movies
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
