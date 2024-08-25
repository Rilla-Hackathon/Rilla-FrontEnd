// import React, { useEffect, useRef, useState } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "../css/Dashboard.css"; // Assuming you have some CSS for styling

// const uploadVideo = async (blob: Blob) => {
//   const formData = new FormData();
//   formData.append("video", blob, "temp_video.webm");
//   try {
//     const response = await axios.post("http://localhost:8001/upload", formData);
//     console.log("Video uploaded successfully:", response.data.filePath);
//   } catch (error) {
//     console.error("Error uploading the video:", error);
//   }
// };

// const Dashboard: React.FC = () => {
//   const videoRef = useRef<Webcam>(null);
//   const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
//   const [chunks, setChunks] = useState<Blob[]>([]);
//   const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
//   const [transcripts, setTranscripts] = useState<any[]>([]);
//   const [selectedTranscript, setSelectedTranscript] = useState<any | null>(null);
//   const [comments, setComments] = useState<any[]>([]);
//   const [newComment, setNewComment] = useState<string>("");

//   useEffect(() => {
//     // Fetch transcripts from the API
//     const fetchTranscripts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8001/transcripts");
//         setTranscripts(response.data);
//       } catch (error) {
//         console.error("Error fetching transcripts:", error);
//       }
//     };

//     fetchTranscripts();
//   }, []);

//   const startRecording = () => {
//     if (videoRef.current && videoRef.current.stream) {
//       const options = { mimeType: "video/webm" };
//       const newMediaRecorder = new MediaRecorder(videoRef.current.stream, options);
//       newMediaRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           setChunks((prevChunks) => [...prevChunks, event.data]);
//         }
//       };
//       newMediaRecorder.onstop = () => {
//         if (chunks.length > 0) {
//           const blob = new Blob(chunks, { type: "video/webm" });
//           const url = URL.createObjectURL(blob);
//           setMediaBlobUrl(url);
//           uploadVideo(blob);
//           setChunks([]);
//         }
//       };
//       newMediaRecorder.start();
//       setMediaRecorder(newMediaRecorder);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder) {
//       mediaRecorder.stop();
//     }
//   };

//   const toggleVideoAudio = () => {
//     if (videoRef.current && videoRef.current.stream) {
//       const videoTrack = videoRef.current.stream.getVideoTracks()[0];
//       const audioTrack = videoRef.current.stream.getAudioTracks()[0];
//       videoTrack.enabled = !videoTrack.enabled;
//       audioTrack.enabled = !audioTrack.enabled;
//     }
//   };

//   const openTranscript = async (transcript: any) => {
//     setSelectedTranscript(transcript);
//     try {
//       const response = await axios.get(`http://localhost:8001/comments/${transcript.id}`);
//       setComments(response.data);
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };

//   const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewComment(e.target.value);
//   };

//   const addComment = async () => {
//     if (newComment.trim() === "") return;
//     try {
//       const response = await axios.post(`http://localhost:8001/comments/${selectedTranscript.id}`, {
//         text: newComment,
//       });
//       setComments([...comments, response.data]);
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const editComment = async (id: string, newText: string) => {
//     try {
//       const response = await axios.put(`http://localhost:8001/comments/${id}`, {
//         text: newText,
//       });
//       setComments(
//         comments.map((comment) => (comment.id === id ? response.data : comment))
//       );
//     } catch (error) {
//       console.error("Error editing comment:", error);
//     }
//   };

//   const deleteComment = async (id: string) => {
//     try {
//       await axios.delete(`http://localhost:8001/comments/${id}`);
//       setComments(comments.filter((comment) => comment.id !== id));
//     } catch (error) {
//       console.error("Error deleting comment:", error);
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <div className="video-section">
//         <div className="video-container">
//           <Webcam audio={true} ref={videoRef} className="webcam-view" />
//           <div className="video-controls">
//             <button onClick={startRecording}>Start Recording</button>
//             <button onClick={stopRecording}>Stop Recording</button>
//             <button onClick={toggleVideoAudio}>Toggle Video/Audio</button>
//           </div>
//         </div>
//         {mediaBlobUrl && (
//           <div className="video-preview">
//             <h2>Recorded Video</h2>
//             <video src={mediaBlobUrl} controls autoPlay loop className="recorded-video" />
//           </div>
//         )}
//       </div>

//       <div className="transcripts-section">
//         <h1>Transcripts</h1>
//         <div className="transcripts-list">
//           {transcripts.map((transcript) => (
//             <div
//               key={transcript.id}
//               className="transcript-item"
//               onClick={() => openTranscript(transcript)}
//             >
//               {transcript.title}
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedTranscript && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{selectedTranscript.title}</h2>
//             <div className="comments-section">
//               {comments.map((comment) => (
//                 <div key={comment.id} className="comment-item">
//                   <input
//                     type="text"
//                     value={comment.text}
//                     onChange={(e) => editComment(comment.id, e.target.value)}
//                   />
//                   <button onClick={() => deleteComment(comment.id)}>Delete</button>
//                 </div>
//               ))}
//               <div className="add-comment">
//                 <input
//                   type="text"
//                   value={newComment}
//                   onChange={handleCommentChange}
//                   placeholder="Add a comment"
//                 />
//                 <button onClick={addComment}>Add Comment</button>
//               </div>
//             </div>
//             <button onClick={() => setSelectedTranscript(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "../css/Dashboard.css";
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";

const uploadVideo = async (blob: Blob) => {
  console.log("Pretend we're uploading the video:", blob);
};

const Dashboard: React.FC = () => {
  const videoRef = useRef<Webcam>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
  const [selectedTranscript, setSelectedTranscript] = useState<any | null>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Dummy data for transcripts
  const transcripts = [
    { id: "1", title: "Transcript 1" },
    { id: "2", title: "Transcript 2" },
    { id: "3", title: "Transcript 3" },
  ];

  // Dummy data for comments
  const dummyComments = [
    { id: "101", text: "Great transcript!" },
    { id: "102", text: "Needs more detail in section 2." },
    { id: "103", text: "Well explained!" },
  ];

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

  const openTranscript = (transcript: any) => {
    setSelectedTranscript(transcript);
    setComments(dummyComments);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() === "") return;
    const newCommentObj = {
      id: (Math.random() * 1000).toString(),
      text: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const editComment = (id: string, newText: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text: newText } : comment
      )
    );
  };

  const deleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
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

      <div className="transcripts-section">
        <h1>Transcripts</h1>
        <div className="transcripts-list">
          {transcripts.map((transcript) => (
            <div
              key={transcript.id}
              className="transcript-item"
              onClick={() => openTranscript(transcript)}
            >
              {transcript.title}
            </div>
          ))}
        </div>
      </div>

      {selectedTranscript && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedTranscript.title}</h2>
            <div className="comments-section">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <input
                    type="text"
                    value={comment.text}
                    onChange={(e) => editComment(comment.id, e.target.value)}
                  />
                  <button onClick={() => deleteComment(comment.id)} title="Delete">
                    <FaTrash />
                  </button>
                  <button onClick={() => editComment(comment.id, comment.text)} title="Edit">
                    <FaEdit />
                  </button>
                </div>
              ))}
              <div className="add-comment">
                <input
                  type="text"
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment"
                />
                <button onClick={addComment} title="Add Comment">
                  <FaPlus />
                </button>
              </div>
            </div>
            <button onClick={() => setSelectedTranscript(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
