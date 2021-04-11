import React from "react";
import Dropzone from "react-dropzone";
import "./style.css";
// for profile picture
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const thumbsContainer = {
      width: "250px",
      height: "250px",
      borderRadius: "5%",
      objectFit: "cover",
      objectPosition: "center",
    };
    const thumbs = this.props.files.map((file) => (
      <img
        src={file.preview}
        style={thumbsContainer}
        alt="profile"
        key={file.size}
      />
    ));
    return (
      <div className="App">
        <Dropzone
          onDrop={this.props.handleDrop}
          multiple={false}
          style={{
            width: "10px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
            border: " 1px dashed",
          }}
          accept="image/png"
        >
          {({ getRootProps, getInputProps }) => (
            <>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>Drag'n'drop You logo, or browse</p>
                {thumbs}
              </div>
            </>
          )}
        </Dropzone>
        {/* <div>
        <strong>Files:</strong>
        <ul>
          {this.props.files.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div> */}
      </div>
    );
  }
}

export default ImageUpload;
