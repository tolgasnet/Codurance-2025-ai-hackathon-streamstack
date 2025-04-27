import { TitleController, Title } from '../../src/controllers/TitleController';

describe('TitleController', () => {
  let controller: TitleController;

  beforeEach(() => {
    controller = new TitleController();
  });

  describe('getTitles', () => {
    it('should return an array of titles with correct structure and values', () => {
      // Arrange
      const expectedTitles: Title[] = [
        { title: "Stranger Things", type: "TV Show", release_year: 2016 },
        { title: "The Irishman", type: "Movie", release_year: 2019 }
      ];

      // Act
      const result = controller.getTitles();

      // Assert
      expect(result).toHaveLength(2);
      
      // Check first title
      expect(result[0].title).toBe("Stranger Things");
      expect(result[0].type).toBe("TV Show");
      expect(result[0].release_year).toBe(2016);
      
      // Check second title
      expect(result[1].title).toBe("The Irishman");
      expect(result[1].type).toBe("Movie");
      expect(result[1].release_year).toBe(2019);
    });
  });

  // TODO: Add title controller tests
}); 