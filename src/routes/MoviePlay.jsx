import { useParams } from "react-router-dom";
import VideoJSPlayerComponent from "./videojs";

export default function MoviePlay(props) {
    const { id } = useParams();
    return (
      <main style={{ padding: "1rem 0" }}>
        <VideoJSPlayerComponent/>
      </main>
    );
  }