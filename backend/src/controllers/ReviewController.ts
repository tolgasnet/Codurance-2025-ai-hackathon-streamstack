import { Request, Response } from 'express';
import { ReviewRepository, Review } from '../repositories/ReviewRepository';

export class ReviewController {
  private reviewRepository: ReviewRepository;

  constructor(reviewRepository: ReviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  async addReview(req: Request, res: Response): Promise<void> {
    try {
      const { title_id, rating, comment } = req.body;
      
      if (!title_id || !rating || !comment) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }

      if (rating < 1 || rating > 5) {
        res.status(400).json({ error: 'Rating must be between 1 and 5' });
        return;
      }

      const review = await this.reviewRepository.addReview({
        title_id,
        rating,
        comment
      });

      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add review' });
    }
  }

  // TODO: Implement review-related endpoints
} 