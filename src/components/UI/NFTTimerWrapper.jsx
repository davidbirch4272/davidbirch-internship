import { useEffect, useState } from "react";
import Time from "./Time"; // Assuming your original Time component is here

const NFTTimerWrapper = () => {
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
      .then((response) => response.json())
      .then((data) => {
        setNft(data);
        setLoading(false);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching NFT:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading NFT data...</p>;
  if (!nft) return <p></p>;

  return <Time nft={nft} />;
};

export default NFTTimerWrapper;
