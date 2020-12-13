import axios from 'axios';
const apiKey = '17822127-e9a9a0a140ac0dca1ff979a25';

const fetchImageWithKeyword = (keyword, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&page=${page}&per_page=12`,
    )
    .then(response => response.data);
};

export default fetchImageWithKeyword;
