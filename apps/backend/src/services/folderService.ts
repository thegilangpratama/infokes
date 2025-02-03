import db from '../db/db'; // Assume you have a db module for database queries

export const getFolders = async () => {
    const result = await db.query('SELECT * FROM folders');
    return result.rows;
};

export const getSubfolders = async (parentId: number) => {
    const result = await db.query('SELECT * FROM folders WHERE parent_id = $1', [parentId]);
    return result.rows;
};