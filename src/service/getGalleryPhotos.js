import axios from 'axios';

export const getGalleryPhotos = async () => {
  try {
    const response = await axios.get(
      'https://64fee767f8b9eeca9e294103.mockapi.io/api/cars'
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
