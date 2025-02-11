import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Button } from '@nx-shadcn-tsr-hono-starter/ui/button';

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex items-center gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Button className="ml-auto">
                    <Link to="/hello-world">Hello world</Link>
                </Button>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
});
