import Database from "better-sqlite3";

// In-memory fallback for Vercel deployment
let db: Database.Database | null = null;
let useInMemory = false;

// In-memory storage
let inMemorySubmissions: Array<{ id: number; name: string; email: string; message: string; created_at: string }> = [];
let inMemoryStats = { visitors: 0, pageViews: 0 };
let submissionIdCounter = 1;

try {
  db = new Database("portfolio.db");

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
} catch (error) {
  console.warn("SQLite not available, using in-memory storage:", error);
  useInMemory = true;
}

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
  addSubmission: {
    run: (name: string, email: string, message: string) => {
      if (useInMemory) {
        const id = submissionIdCounter++;
        const submission = { id, name, email, message, created_at: new Date().toISOString() };
        inMemorySubmissions.push(submission);
        return { lastInsertRowid: id };
      }
      return (db as Database.Database).prepare("INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)").run(name, email, message);
    }
  },
  getSubmissions: {
    all: () => {
      if (useInMemory) {
        return [...inMemorySubmissions].reverse();
      }
      return (db as Database.Database).prepare("SELECT * FROM submissions ORDER BY created_at DESC").all();
    }
  },
  getStats: {
    get: () => {
      if (useInMemory) {
        return { visitors: inMemoryStats.visitors, page_views: inMemoryStats.pageViews };
      }
      return (db as Database.Database).prepare("SELECT visitors, page_views FROM stats WHERE id = 1").get() as { visitors: number; page_views: number };
    }
  },
  incrementVisitors: {
    run: () => {
      if (useInMemory) {
        inMemoryStats.visitors++;
        return;
      }
      (db as Database.Database).prepare("UPDATE stats SET visitors = visitors + 1 WHERE id = 1").run();
    }
  },
  incrementPageViews: {
    run: () => {
      if (useInMemory) {
        inMemoryStats.pageViews++;
        return;
      }
      (db as Database.Database).prepare("UPDATE stats SET page_views = page_views + 1 WHERE id = 1").run();
    }
  },
};

export default db;
