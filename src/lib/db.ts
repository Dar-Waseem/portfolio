import Database from "better-sqlite3";

const db = new Database("portfolio.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS stats (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    visitors INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0
  )
`);

const insertStats = db.prepare("INSERT OR IGNORE INTO stats (id, visitors, page_views) VALUES (1, 0, 0)");
insertStats.run();

export interface Submission {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface Stats {
  visitors: number;
  page_views: number;
}

export const dbQueries = {
  addSubmission: db.prepare("INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)"),
  getSubmissions: db.prepare("SELECT * FROM submissions ORDER BY created_at DESC"),
  getStats: db.prepare("SELECT visitors, page_views FROM stats WHERE id = 1"),
  incrementVisitors: db.prepare("UPDATE stats SET visitors = visitors + 1 WHERE id = 1"),
  incrementPageViews: db.prepare("UPDATE stats SET page_views = page_views + 1 WHERE id = 1"),
};

export default db;
