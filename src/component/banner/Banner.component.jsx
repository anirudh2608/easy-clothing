import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BannerContainer,
  BannerImage,
  BannerCaption,
  BannerDetailsContainer,
  BannerSubCaption
} from './banner.style';

import Slide_Image_1 from "../../assets/slider_1.webp"
import Slide_Image_2 from "../../assets/slider_2.webp"
import Slide_Image_3 from "../../assets/slider_3.webp"

import Slide_Image_Mob_1 from "../../assets/slider_1.webp"
import Slide_Image_Mob_2 from "../../assets/slider_2_Mob.webp"
import Slide_Image_Mob_3 from "../../assets/slider_3.webp"

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button.component';


const slideImages = [
  {
    url: Slide_Image_1,
    Mob_Url: Slide_Image_Mob_1,
    caption: 'Women Collection',
    sub_caption: 'New Arrivals',
    route_Url: "shop/womens-dresses"
  },
  {
    url: Slide_Image_2,
    Mob_Url: Slide_Image_Mob_2,
    caption: 'Women Collection',
    sub_caption: 'Get Upto 15% on Women Top Collections',
    route_Url: "shop/tops"
  },
  {
    url: Slide_Image_3,
    Mob_Url: Slide_Image_Mob_3,
    caption: 'Women Jewellery Collections',
    sub_caption: 'New Women Jewellery  Cap Collections',
    route_Url: "shop/womens-jewellery"
  },
];


const Banner = () => {

  const navigate = useNavigate()
  const [imageIndex, setImageIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const navigateTo = (path) => {
    navigate(path)
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [window.innerWidth])


  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setImageIndex((prevIndex =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      ))
    }, 3000)

    return () => {
      resetTimeout()
    }
  }, [imageIndex])

  return (
    <BannerContainer>
       <BannerImage imgURL={slideImages[imageIndex].url} imgMob={slideImages[imageIndex].Mob_Url}/>

      <BannerDetailsContainer>
        <BannerCaption>{slideImages[imageIndex].caption}</BannerCaption>
        <BannerSubCaption>{slideImages[imageIndex].sub_caption}</BannerSubCaption>
        <Button onClick={() => navigateTo(slideImages[imageIndex].route_Url)} buttonType={BUTTON_TYPE_CLASSES.banner}>Shop Now</Button>
      </BannerDetailsContainer>
    </BannerContainer>
  )
}

export default Banner