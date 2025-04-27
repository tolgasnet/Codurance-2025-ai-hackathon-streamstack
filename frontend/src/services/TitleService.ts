import type Title from '../types/Title';

const API_BASE_URL = 'http://localhost:3000/api';

export const TitleService = {
  async getTitles(): Promise<Title[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/titles`);
      if (!response.ok) {
        throw new Error('Failed to fetch titles');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching titles:', error);
      throw error;
    }
  }
}; 