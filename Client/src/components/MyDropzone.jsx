/* eslint-disable no-console */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

function MyDropzone({ onPhotoUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    onPhotoUpload(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} id="dropContainer">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
}

MyDropzone.propTypes = {
  onPhotoUpload: PropTypes.func.isRequired,
};

export default MyDropzone;
