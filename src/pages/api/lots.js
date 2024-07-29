import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req;
  const queryParams = new URLSearchParams(query).toString();

  try {
    const response = await axios.get(
      //   `http://91.228.56.250:7246/api/auction/lots?${queryParams}`,
      'http://91.228.56.250:7246/api/auction/lots',
      {
        headers: {
          accept: 'text/plain',
          'Bot-Token': 'Qi7nffIhoI6sHHzvyXqwRFWExPxKMxL',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
