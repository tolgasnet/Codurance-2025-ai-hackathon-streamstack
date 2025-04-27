import { ReviewRepository, Review } from '../../src/repositories/ReviewRepository';

describe('ReviewRepository', () => {
  let repository: ReviewRepository;

  beforeEach(() => {
    repository = new ReviewRepository();
  });

  describe('addReview', () => {
    it('should add a review and return it with id and created_at', async () => {
      // Arrange
      const newReview = {
        title_id: 1,
        rating: 5,
        comment: 'Great movie!'
      };

      // Act
      const review = await repository.addReview(newReview);

      // Assert
      expect(review).toMatchObject(newReview);
      expect(review.id).toBeDefined();
      expect(review.created_at).toBeDefined();
    });
  });
}); 