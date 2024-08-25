import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import "../css/Dashboard.css"; // Assuming you have some CSS for styling

const uploadVideo = async (blob: Blob) => {
  const formData = new FormData();
  formData.append("video", blob, "temp_video.webm");
  try {
    const response = await axios.post("http://localhost:8001/upload", formData);
    console.log("Video uploaded successfully:", response.data.filePath);
  } catch (error) {
    console.error("Error uploading the video:", error);
  }
};

const Dashboard: React.FC = () => {
  const videoRef = useRef<Webcam>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);

  const startRecording = () => {
    if (videoRef.current && videoRef.current.stream) {
      const options = { mimeType: "video/webm" };
      const newMediaRecorder = new MediaRecorder(videoRef.current.stream, options);
      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };
      newMediaRecorder.onstop = () => {
        if (chunks.length > 0) {
          const blob = new Blob(chunks, { type: "video/webm" });
          const url = URL.createObjectURL(blob);
          setMediaBlobUrl(url);
          uploadVideo(blob);
          setChunks([]);
        }
      };
      newMediaRecorder.start();
      setMediaRecorder(newMediaRecorder);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  const toggleVideoAudio = () => {
    if (videoRef.current && videoRef.current.stream) {
      const videoTrack = videoRef.current.stream.getVideoTracks()[0];
      const audioTrack = videoRef.current.stream.getAudioTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      audioTrack.enabled = !audioTrack.enabled;
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="video-section">
        <div className="video-container">
          <Webcam audio={true} ref={videoRef} className="webcam-view" />
          <div className="video-controls">
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <button onClick={toggleVideoAudio}>Toggle Video/Audio</button>
          </div>
        </div>
        {mediaBlobUrl && (
          <div className="video-preview">
            <h2>Recorded Video</h2>
            <video src={mediaBlobUrl} controls autoPlay loop className="recorded-video" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
