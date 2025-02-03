import { Elysia } from 'elysia';
import { getFolders, getSubfolders } from '../services/folderService';

const folderRoutes = new Elysia({ prefix: '/folders' })
    .get('/', async () => {
        const folders = await getFolders();
        return folders;
    })
    .get('/:id/subfolders', async ({ params }) => {
        const subfolders = await getSubfolders(Number(params.id));
        return subfolders;
    });

export default folderRoutes;