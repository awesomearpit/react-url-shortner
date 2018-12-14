import React, { Component } from "react";
import "./App.css";
import UrlShortner from "./Components/UrlShortnerTitle";
import ShortningUrlBox from "./Components/ShortningUrlBox";
import ShortenerBtn from "./Components/ShortenerBtn";
import ShortUrl from "./Components/ShortUrl";

const URL =
  "http://api.bitly.com/v3/shorten?login=o_2rbg6sd5jn&apikey=R_0bd2e6a02eeb4b20a79de9535d0be4b0&longUrl=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: "",
      setUrl: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log(this.state.value);
    fetch(URL + this.state.value)
      .then(response => response.json())
      .then(findResponse => {
        this.setState({
          data: findResponse,
          setUrl: this.state.data["data"]["url"]
        });
        // const setUrl = this.state.data["data"]["url"];
        console.log("data", this.state.data);
        console.log("data", this.state.data["data"]["url"]);
      });
  }
  onUpdate = value => {
    this.setState({ value: value });
  };
  render() {
    return (
      <div className="App">
        <UrlShortner />
        <ShortningUrlBox placeholder={"Enter Url"} onUpdate={this.onUpdate} />
        <ShortenerBtn handler={this.clickHandler} btnName={"Shorten It!!"} />
        <ShortUrl shortUrl={this.state.setUrl} />
      </div>
    );
  }
}

export default App;
