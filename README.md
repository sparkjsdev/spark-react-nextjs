# Spark - Next.js

A basic example of using Spark in a Next.js app with App Router. This example uses React Three Fiber to create a basic scene with a camera with [`CameraControls`](https://drei.docs.pmnd.rs/controls/camera-controls), a [`SparkRenderer`](./app/_components/spark/spark-renderer.tsx), and a [`SplatMesh`](./app/_components/spark/splat-mesh.tsx).

## Running the example

First, download the assets:

```bash
npm run assets:download
```

Then, run the development server:

```bash
npm install
npm run dev
```

## Notes

We use Next.js `"use client"` directive to wrap modules that use Spark, as they should be rendered on the client only. You can read more about the `"use client"` directive in the [React documentation](https://react.dev/reference/rsc/use-client) or the [Next.js documentation](https://nextjs.org/docs/app/api-reference/directives/use-client), and you can learn about how to use [Server and Client Components in Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components).
