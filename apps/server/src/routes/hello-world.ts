import { Hono } from 'hono';

export const helloWorldRoute = new Hono().get('/hello-world', (c) => {
    return c.json({ msg: 'Hello world from hono server' });
});
