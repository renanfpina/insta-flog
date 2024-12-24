import { getPosts } from '../models/postsModel.js';

// Define an asynchronous function to list posts
export async function listPosts (req, res) {
  try {
    // Call the getPosts function to retrieve posts from the database
    const posts = await getPosts();

    // Send the retrieved posts as a JSON response with a 200 status code
    res.status(200).json(posts);
  } catch (error) {
    // Log any errors that occur and send a 500 status code with a server error message
    console.error(error);
    res.status(500).send('Server error');
  }
}
