import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios';


function HotCollections({ fetchUrl }) {
  const [cards, setCards] = useState([]);


  const base_url = "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections";

  useEffect(() => {
    async function hotCollections() {
      
      try {
        
        const { request } = await axios.get(base_url);
        setCards(request.data.results);
        
        setCards(request)
        console.log(request)
      } catch (error) {
        console.log("Error fetching hot collections:", error);
      }
          }


    hotCollections();
  }, [base_url]);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {cards.map((id) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={id}>
            <div className="nft_coll">
            <div className="nft_wrap">
            <Link to="/item-details">
            <img src={id.nftImage} className="lazy img-fluid" alt="" />
            </Link>
            </div>
            <div className="nft_coll_pp">
            <Link to="/author">
            <img className="lazy pp-coll" src={id.AuthorImage} alt="" />
            </Link>
            <i className="fa fa-check"></i>
            </div> 
            <div className="nft_coll_info">
            <Link to="/explore">
            <h4>{id.title}</h4>
            </Link>
            <span>{id.code}</span>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
