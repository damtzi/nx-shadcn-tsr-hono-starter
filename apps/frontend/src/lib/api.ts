import { type ApiRoutes } from '@server/main';
import { hc } from 'hono/client';

const client = hc<ApiRoutes>('/');

export const api = client.api;

export async function getHelloWorld() {
    const res = await api['hello-world'].$get();
    if (!res.ok) {
        throw new Error('Failed to fetch server');
    }
    const data = await res.json();
    return data;
}
