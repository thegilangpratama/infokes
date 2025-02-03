import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import folderRoutes from './api/folders';

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(folderRoutes)
    .listen(3000);

console.log(`Backend running at http://${app.server?.hostname}:${app.server?.port}`);