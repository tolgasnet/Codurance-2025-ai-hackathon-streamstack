import Database from 'better-sqlite3';

export interface Title {
  id?: number;
  title: string;
  type: string;
  release_year: number;
}

export class TitleRepository {
  private db: Database.Database;

  constructor() {
    this.db = new Database(':memory:');
    this.initializeDatabase();
  }

  private initializeDatabase(): void {
    // Create titles table
    this.db.exec(`
      CREATE TABLE titles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        release_year INTEGER NOT NULL
      )
    `);

    // Insert mock data
    const mockTitles: Title[] = [
      { title: "Stranger Things", type: "TV Show", release_year: 2016 },
      { title: "The Irishman", type: "Movie", release_year: 2019 }
    ];

    const insertStmt = this.db.prepare(`
      INSERT INTO titles (title, type, release_year)
      VALUES (@title, @type, @release_year)
    `);

    mockTitles.forEach(title => {
      insertStmt.run(title);
    });
  }

  async getAllTitles(): Promise<Title[]> {
    const stmt = this.db.prepare('SELECT * FROM titles');
    return stmt.all() as Title[];
  }
} 