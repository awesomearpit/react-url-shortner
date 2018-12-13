import React, { Component } from "react";
import "./App.css";
import UrlShortner from "./Components/UrlShortner";
import ShortningUrlBox from "./Components/ShortningUrlBox";
import ShortenerBtn from "./Components/ShortenerBtn";

const URL = "https://tinyurl.com/api-create.php?url=";

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
    console.log(this.state.value);
    fetch(URL + this.state.value, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.body)
      .then(findResponse => {
        console.log(findResponse);
        this.setState({
          data: findResponse
        });
        console.log("this.state.data");
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
