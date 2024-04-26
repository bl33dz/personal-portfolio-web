import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

async function getFeed() {
  const res = await fetch("https://medium.com/feed/@bagaz");
    return await res.text();
}

const app = new Elysia()
  .use(staticPlugin({ assets: "dist", prefix: "/" }))
  .get("/feed", () => getFeed())
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)