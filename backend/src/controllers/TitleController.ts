import { Request, Response } from 'express';

export interface Title {
  title: string;
  type: string;
  release_year: number;
}

export class TitleController {
  constructor() {}

  getTitles(): Title[] {
    // TODO: Replace with actual service call
    return [
      { title: "Stranger Things", type: "TV Show", release_year: 2016 },
      { title: "The Irishman", type: "Movie", release_year: 2019 }
    ];
  }

  // TODO: Implement title-related endpoints
} 