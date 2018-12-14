import React, { Component } from "react";
import "./App.css";
import UrlShortner from "./Components/UrlShortner";
import ShortningUrlBox from "./Components/ShortningUrlBox";
import ShortenerBtn from "./Components/ShortenerBtn";

const URL = "http://api.bitly.com/v3/shorten?callback=? ";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    // console.log(this.state.value);
    fetch(URL, {
      method: "post",
      body: {
        format: "json",
        apiKey: "R_0bd2e6a02eeb4b20a79de9535d0be4b0",
        login: "o_2rbg6sd5jn",
        longUrl: this.state.value
      }
    })
      .then(response =>
        response.json().then(data => ({ status: response.status, body: data }))
      )
      .then(findResponse => {
        console.log();
        this.setState({
          data: findResponse
        });
        // console.log("this.state.data");
        console.log("data", this.state.data);
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
      </div>
    );
  }
}

export default App;
