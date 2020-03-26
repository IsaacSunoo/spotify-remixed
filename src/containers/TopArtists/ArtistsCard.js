import React from 'react';

export const ArtistsCard = ({ genres, images, name, num }) => {
  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const displayGenres = genres.map((genre, idx) => {
    const capGenre = capitalize(genre);
    if (idx === 2) {
      return <span key={idx} className='genre' >{capGenre}</span>
    } else if (idx < 2) {
      return <span key={idx} className='genre' >{capGenre},</span>
    }
  });


  return (
    <div className='artist-card'>
      <strong>{num}</strong>
      <img src={images[0].url} alt='artist personal' />
      <div className='artist-info'>
        <p>{name}</p>
        {displayGenres}
      </div>
    </div>
  )
}

export default ArtistsCard;