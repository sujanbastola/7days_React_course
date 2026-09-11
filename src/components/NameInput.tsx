// import { useState } from "react";

// const NameInput = () => {
//   const [name, setName] = useState<string>("");

//   return (
//     <div>
//       <h2>Name Input Practice</h2>

//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter your name"
//       />

//       <p>Your name is: {name}</p>
//     </div>
//   );
// };

// export default NameInput;
import React, { useState } from 'react'


const NameInput = () => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h3>input practice</h3>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Inter your name' />
      <p>Your name is  :{name}</p>
    </div>
  )
}

export default NameInput
