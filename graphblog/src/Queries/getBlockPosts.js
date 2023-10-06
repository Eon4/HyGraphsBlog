export const getBlockPosts = `

query MyBlogPosts {
    posts {
      coverPhoto {
        url
      }
      description
      title
      dateAndTime

    }
  }
  
  `;