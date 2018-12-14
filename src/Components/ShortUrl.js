import React, { Component } from "react";
import ReactCopyButtonWrapper from "react-copy-button-wrapper";

class ShortUrl extends Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <br />
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.props.shortUrl}
              placeholder="Short Url"
            />
          </div>
        </form>
        <ReactCopyButtonWrapper text={this.props.shortUrl}>
          <button className="btn btn-primary">Copy</button>
        </ReactCopyButtonWrapper>
      </div>
    );
  }
}

export default ShortUrl;
