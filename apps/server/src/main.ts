import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use('*', logger());

app.get('/', (c) => {
    return c.text('Hello Hono!');
});

app.get('/api/hello', (c) => {
    return c.json({
        ok: true,
        message: 'Hello Hono!'
    });
});

serve(app, (info) => {
    console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
