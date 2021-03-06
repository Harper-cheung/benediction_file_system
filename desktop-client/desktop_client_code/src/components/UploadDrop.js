import React from "react";
import Dropzone from "react-dropzone";
import "../css/Upload.css";

const imageMaxSize = 100000; //bytes
const noClick = e => e.stopPropagation();

class UploadDrop extends React.Component {
  handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const currentRejectFile = rejectedFiles[0];
      const currentRejectFileSize = currentRejectFile.size;
      if (currentRejectFileSize > imageMaxSize) {
        alert("This file is too big.");
        console.log("Rejected file:" + rejectedFiles);
      }
    } else {
      console.log(files + " has been uploaded.");
    }
  };

  render() {
    return (
      <div className="dropZone">
        <Dropzone
          onDrop={this.handleOnDrop}
          multiple={true}
          maxSize={imageMaxSize}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className="dropInput" {...getRootProps()} onClick={noClick}>
                <input {...getInputProps()} />
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default UploadDrop;
