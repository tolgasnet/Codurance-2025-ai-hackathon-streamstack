import { TitleRepository, Title } from '../../src/repositories/TitleRepository';

describe('TitleRepository', () => {
  let repository: TitleRepository;

  beforeEach(() => {
    repository = new TitleRepository();
  });

  describe('getAllTitles', () => {
    it('should return all titles from the database', async () => {
      // Act
      const titles = await repository.getAllTitles();

      // Assert
      expect(titles).toHaveLength(2);
      
      // Check first title
      expect(titles[0].title).toBe("Stranger Things");
      expect(titles[0].type).toBe("TV Show");
      expect(titles[0].release_year).toBe(2016);
      
      // Check second title
      expect(titles[1].title).toBe("The Irishman");
      expect(titles[1].type).toBe("Movie");
      expect(titles[1].release_year).toBe(2019);
    });
  });
}); 