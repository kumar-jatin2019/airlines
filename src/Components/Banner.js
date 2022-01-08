import React, { Component } from 'react';

// import { movies } from './getMovies'
import '../App.css';

import banner2 from '../images/banner2.jpg'
import axios from 'axios';
import ReactPaginate from 'react-paginate';



class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            movies: [],
            tabData: [],
            orgData: [],
            perPage: 4,
            currentPage: 0
        };

        this.handlePageClick = this
            .handlePageClick
            .bind(this);

        console.log("I am called very first");
    }
    receivedData() {
        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=b783a5c8fcf6704cc89761405760e46a&language=en-US&page=1`)
            .then(res => {

                const data = res.data.results;
                console.log(data);
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)


                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    movies: slice,


                })
            });

    }
    handlePageClick = (e) => {
        console.log(e);
        const selectedPage = e.selected;
        console.log(selectedPage);
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
        console.log("I am used for Api calls");


    }

    render() {


        return (

            <
            div >


                <
                    div id="demo"
                    className="carousel slide"
                    data - ride = "carousel" >

                <
            ul className="carousel-indicators" >
                    <
                        li data - target = "#demo"
                    data - slide - to = "0"
            className = "active" > < /li> <
                        li data - target = "#demo"
            data - slide - to = "1" > < /li> <
                        li data - target = "#demo"
            data - slide - to = "2" > < /li> <
            /ul>

                    <
            div className="carousel-inner" >
                        <
            div className="carousel-item active" >
                            <
                                img src={banner2}
                                alt="Los Angeles"
                                width="100%"
                                height="400" />
                            <
            /div> <
            div className="carousel-item" >
                                <
                                    img src={banner2}
                                    alt="Chicago"
                                    width="100%"
                                    height="400" />
                                <
            /div> <
            div className="carousel-item" >
                                    <
                                        img src={banner2}
                                        alt="New York"
                                        width="100%"
                                        height="400" />
                                    <
            /div> <
            /div>

                                    <
                                        a className="carousel-control-prev"
                                        href="#demo"
                                        data - slide = "prev" >
                                    <
            span className="carousel-control-prev-icon" > < /span> <
            /a> <
                                            a className="carousel-control-next"
                                            href="#demo"
                                            data - slide = "next" >
                                        <
            span className="carousel-control-next-icon" > < /span> <
            /a> <
            /div>



                                            <
            div className="container mt-2" >
                                                <
            h2 style={
                                                        { textAlign: 'center' }} > Trendings < /h2>



                                                    {
                                                        this.state.movies.length == 0 ? < div className="loader" > < /div> :

                                                            <
                div className="flex-container" >
                                                                <
                    div > {
                                                                        this.state.movies.map((response) => (

                                                                            <
                            div className="card"
                                                                                key={response.id} >
                                                                                <
                                                                                    img className="card-img-top"
                                                                                    src={`https://image.tmdb.org/t/p/original${response.backdrop_path}`}
                                                                                    alt="Card image cap" />

                                                                                <
                            div className="card-body" >
                                                                                    <
                            h5 className="card-title" > < /h5> <
                                                                                            p className="card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> <
                            a href="#"
                                                                                                className="btn btn-primary" > Go somewhere < /a>

                                                                                            <
                            /div> <
                            /div>


                                                                                            ))
                    }


                                                                                            <
                /div> <
                /div>


            }

                                                                                            <
                                                                                                ReactPaginate previousLabel={"prev"}
                                                                                                nextLabel={"next"}
                                                                                                breakLabel={"..."}
                                                                                                breakClassName={"break-me"}
                                                                                                pageCount={this.state.pageCount}
                                                                                                marginPagesDisplayed={2}
                                                                                                pageRangeDisplayed={5}
                                                                                                onPageChange={this.handlePageClick}
                                                                                                containerClassName={"pagination"}
                                                                                                subContainerClassName={"pages pagination"}
                                                                                                activeClassName={"active"}
                                                                                            /> <
            /div>


                                                                                            <
            /div>


                                                                                            );
    }
}

                                                                                            export default Banner;