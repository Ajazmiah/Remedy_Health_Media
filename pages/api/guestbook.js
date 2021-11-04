const posts = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  }
  if (req.method === "POST") {
    const post = req.body;

    const newPost = {
      id: Date.now(),
      name: post.name,
      message: post.message,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  }
}
