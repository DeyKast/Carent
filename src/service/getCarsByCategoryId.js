import axios from 'axios';

export const getCarsByCategoryId = async categoryId => {
  try {
    const response = await axios.get(
      `https://64fee767f8b9eeca9e294103.mockapi.io/api/cars/?categoryId=${categoryId}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching cars with from ${categoryId} category:`,
      error
    );
    throw error;
  }
};
