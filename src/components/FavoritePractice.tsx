import React, { useState } from 'react';

const FavoritePractice = () => {
  const [favorite, setFevorite] = useState<boolean>(false);

  return (
    <div>
      <h2>Favorite Practice</h2>
      <p>{favorite?" *****Favorite****": "Normal PLayer"}</p>
      <button onClick={()=>setFevorite(!favorite) }>{favorite? "Remove Favorite": "add to favorite"}</button>
      
    </div>
  )
}

export default FavoritePractice
