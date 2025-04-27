import Database from 'better-sqlite3';

export interface Review {
  id?: number;
  title_id: number;
  rating: number;
  comment: string;
  created_at?: string;
}

export class ReviewRepository {
  private db: Database.Database;

  constructor() {
    this.db = new Database(':memory:');
    this.initializeDatabase();
  }

  private initializeDatabase(): void {
    // Create reviews table
    this.db.exec(`
      CREATE TABLE reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title_id INTEGER NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  async addReview(review: Omit<Review, 'id' | 'created_at'>): Promise<Review> {
    const stmt = this.db.prepare(`
      INSERT INTO reviews (title_id, rating, comment)
      VALUES (@title_id, @rating, @comment)
      RETURNING *
    `);
    
    return stmt.get(review) as Review;
  }
} 