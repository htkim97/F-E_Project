'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullBleedText from './fullBleedText';
import NewsLetter from '../newsletter/newsLetter';

export default function FullBleed() {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    const accessKey = 'RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

    axios.get(apiUrl)
      .then(response => {
        const imageUrl = response.data.urls.regular;
        setBgImage(imageUrl);
      })
  };

  return (
    <div className='mt-10' style={{ 
      backgroundImage: `url(${bgImage})`,
      backgroundSize:"cover",
      width: '90vw',
      height:'45em'
    
    }}>
       <div>
        <FullBleedText/>
        <NewsLetter/>
        </div> 
    </div>
  );
}
