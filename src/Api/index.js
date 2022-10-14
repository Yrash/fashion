const API = "https://fashion.hasura.app/v1/graphql"
const getCategoriesQuery = `
  query GetCategories {
    categories {
      name
      category_id
    }
  }
`;
var getPostsQuery = `
  query GetPosts {
    posts {
      body
      picture
      post_id
      subtitle
      category_id
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
  queries = {
    getPostsQuery,
  }
  
  loadPosts = async () => {
    try {
      const response = await fetchApi({
        query: this.queries.getPostsQuery,
        variables: {}
      })
      return response.json()
    } catch (error) {
      
    }
  }
}

class Category {
  queries = {
    getCategoriesQuery,
  }
  
  loadCategories = async () => {
    try {
      const response = await fetchApi({
        query: this.queries.getCategoriesQuery,
        variables: {}
      })
      return response.json()
    } catch (error) {
      
    }
  }
}


const Api = {
  post: new Post(),
  category: new Category()
}
export default Api;