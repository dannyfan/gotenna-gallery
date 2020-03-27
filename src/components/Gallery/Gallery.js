import React from "react";
import "./Gallery.sass";

const API = process.env.REACT_APP_API_SERVER;

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastItem: 0,
            width: undefined,
            height: undefined,
            grayscale: false,
            urls: []
        };
    }

    componentDidMount() {
        this.getImages();
    }

    handleScroll = e => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop ===
            e.target.clientHeight;
        if (bottom) {
            const QUERY = `?start=${
                this.state.urls.length
            }&${this.createQueryParams()}`;
            fetch(API + QUERY)
                .then(response => response.json())
                .then(data => {
                    this.setState({ urls: this.state.urls.concat(data) });
                });
        }
    };

    createQueryParams = () => {
        const params = {
            width: this.state.width,
            height: this.state.height,
            grayscale: this.state.grayscale
        };
        let queryString = "";
        for (let [key, value] of Object.entries(params)) {
            if (value) {
                queryString += key ? `${key}=${value}&` : "";
            }
        }
        queryString = queryString.replace(/&$/, "");
        return queryString;
    };

    getImages = () => {
        const QUERY = this.createQueryParams();
        fetch(API + "?" + QUERY)
            .then(response => response.json())
            .then(data => this.setState({ urls: data }));
    };

    handleChange = e => {
        const name = e.target.name;
        const value = name === "grayscale" ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    };

    render() {
        const { urls } = this.state;

        return (
            <div className="Gallery">
                <div className="Gallery-filters">
                    <label>
                        Width :
                        <input
                            type="number"
                            name="width"
                            value={this.state.width}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Height :
                        <input
                            type="number"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Toggle Grayscale?:
                        <input
                            type="checkbox"
                            name="grayscale"
                            value={this.state.grayscale}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="Gallery-filters__btn" onClick={this.getImages}>Filter</button>
                </div>
                <div className="Gallery-images" onScroll={this.handleScroll}>
                    {urls.map(url => (
                        <img
                            src={url}
                            key={url}
                            className="Gallery-item"
                            alt=""
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Gallery;
