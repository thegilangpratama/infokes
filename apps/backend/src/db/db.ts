import { Pool } from 'pg';

// Database connection configuration
const pool = new Pool({
    user: 'user', // Replace with your PostgreSQL username
    host: 'db', // Use 'db' as the host (Docker service name)
    database: 'windows_explorer', // Replace with your database name
    password: 'password', // Replace with your PostgreSQL password
    port: 5432, // Default PostgreSQL port
});

// Query function
export const query = async (text: string, params?: any[]) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query:', { text, duration, rows: res.rowCount });
    return res;
};

// Export the pool for potential reuse
export default pool;