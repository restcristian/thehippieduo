import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

import Nav from "../components/Nav";

import HippieDuoService from '../services/HippieDuoService';
import "../shared/reset.scss";

// markup
const FeedPage = () => {
  const [instagramPosts, setInstagramPosts] = useState([]); 

  const loadInstagramData = async () => {
    try {
        const response = await HippieDuoService.getInstagramFeed();
        setInstagramPosts(response);
    }catch (error){
        console.log(error);
    }
  }
  useEffect(() => {
    loadInstagramData();
  }, []);
  return (
    <Layout>
      <main>
        <header>
          <Nav />
        </header>
        <div>
            {instagramPosts?.length > 0 && instagramPosts?.map(post => (
                <div key = {post.id}>
                    <img src = {post.thumbnail_src} />
                </div>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default FeedPage;
