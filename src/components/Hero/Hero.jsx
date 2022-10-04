import React, { useEffect, useState } from "react";
import Api from "../../Api";
import "./Hero.scss";
import Header from "./Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Api.post.loadPosts().then((response) => {
      console.log(response);
      if (response?.data?.posts) {
        setPosts(response.data.posts);
      }
    });
  }, []);

  return (
    <div className="Hero">
      <Header />
      <Slider
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        variableWidth
      >
        {(posts || []).map((post) => {
          return (
            <div className="SlidePost">
              <div className="SlidePost__title">{post.title}</div>
              <div className="SlidePost__subtitle">{post.subtitle}</div>
              <img src={post.picture} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Hero;
