import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';
import { helloWorldRoute } from './routes/hello-world';

const app = new Hono();

app.use('*', logger());

const apiRoutes = app.basePath('/api').route('/', helloWorldRoute);

serve(app, (info) => {
    console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});

export type ApiRoutes = typeof apiRoutes;
