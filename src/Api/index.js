const API = "https://fashion.hasura.app/v1/graphql"

var getPostsQuery = `

  query GetPosts {
    posts {
      body
      picture
      post_id
      subtitle
      title
    }
  }


`;

const fetchApi = ({ query, variables}) => {
  return fetch(API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "6m4h2x4CDprfd6aPMkauDXhEHXWgKllqdbLIgmxaj9u9eU1itwibrFs4JpVRXFmq"
    },
    body: JSON.stringify({
      query,
      variables,
    })
  })
}

class Post {
  querys = {
    getPostsQuery,
  }
  
  loadPosts = async () => {
    try {
      const response = await fetchApi({
        query: this.querys.getPostsQuery,
        variables: {}
      })
      return response.json()
    } catch (error) {
      
    }
  }
}

const Api = {
  post: new Post()
}
export default Api;