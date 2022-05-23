import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

const LoadingAPI = () => {
  const [lyricsItem, setLyricsItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const lyricsFunction = async () => {
    try {
      const data = await axios
        .get(`https://api.lyrics.ovh/v1/Eminem/Godzilla`)
        .then((res) => {
          console.log(res);
          setLyricsItem(res.data.lyrics);
        });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    lyricsFunction();
  }, []);
  return (
    <div>
      {loading ? (
        lyricsItem
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="primary" />
      )}
      {lyricsItem}
    </div>
  );
};
export default LoadingAPI;
