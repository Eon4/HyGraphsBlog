// export const getGallery = `
// query AllPeople {
//     allPeople {
//       people {
//         name
//         id
//       }
//     }
//   }
// `;

import { GraphQLClient } from 'graphql-request';


export const Gallery = new GraphQLClient (process.env.React_APP_API)

 const gallery = `
 id,

 `
 
    
  