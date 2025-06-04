import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "../UI/Carousel";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../../css/styles/style.css";


function HotCollections({ fetchUrl }) {
  const [cards, setCards] = useState([]);
  const [loading, setloading] = useState(true);
  const displaycount = Array(4).fill(null);


  const base_url =
    "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections";

  useEffect(() => {
    async function hotCollections() {
      try {
        const { data } = await axios.get(base_url);
        setCards(data);
        setloading(false);
        } catch (error) {
        console.log("Error fetching hot collections:", error);
        setloading(false);
      } finally {
      }
    }
  
    hotCollections();
  }, []);

  if (!cards.length) return <div>No collections found.</div>;

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row"> 
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
            {loading ? (
              <>
                <Carousel>
                  {new Array(4).fill(0).map((__, index) => (
                    <div key={index}>
                      <div className="nft_coll">
                        <div className="nft_wrap">
                          <Skeleton width={282} height={270} />
                        </div>
                        <div className="nft_coll_pp">
                          <Skeleton width={50} height={50} borderRadius={99} />
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <h4>
                            <Skeleton height={20} width="40%" />
                          </h4>
                          <span>
                            <Skeleton height={20} width="20%" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </>
            ):(
            <Carousel>
              {cards.map((item) => (
                <div className="item" key={item.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={item.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          src={item.authorImage}
                          className="lazy pp-coll"
                          alt=""
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{item.title}</h4>
                      </Link>
                      <span>{item.code}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            )}
         </div>
        </div>
      </div>
    </section>
  );
}

export default HotCollections;
