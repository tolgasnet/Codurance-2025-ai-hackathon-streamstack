import { Request, Response } from 'express';
import { ReviewController } from '../../src/controllers/ReviewController';
import { ReviewRepository } from '../../src/repositories/ReviewRepository';

describe('ReviewController', () => {
  let controller: ReviewController;
  let repository: ReviewRepository;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject: any;

  beforeEach(() => {
    repository = new ReviewRepository();
    controller = new ReviewController(repository);
    responseObject = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockImplementation((result) => {
        responseObject = result;
        return mockResponse;
      })
    };
  });

  describe('addReview', () => {
    it('should add a valid review', async () => {
      // Arrange
      mockRequest = {
        body: {
          title_id: 1,
          rating: 5,
          comment: 'Great movie!'
        }
      };

      // Act
      await controller.addReview(
        mockRequest as Request,
        mockResponse as Response
      );

      // Assert
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(responseObject).toMatchObject({
        title_id: 1,
        rating: 5,
        comment: 'Great movie!'
      });
      expect(responseObject.id).toBeDefined();
      expect(responseObject.created_at).toBeDefined();
    });
  });
}); 