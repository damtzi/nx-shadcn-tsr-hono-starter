import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getHelloWorld } from '../lib/api';

export const Route = createFileRoute('/hello-world')({
    component: RouteComponent
});

function RouteComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        getHelloWorld().then((data) => setMessage(data.msg));
    }, []);

    return <div className="p-2">Message from Hono: {message}</div>;
}
