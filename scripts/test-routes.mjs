const port = process.env.PORT || 3000;

const routes = [
  "/",
  "/about",
  "/collections",
  "/manufacturing",
  "/sustainability",
  "/contact",
  "/sitemap.xml",
  "/robots.txt",
];

async function checkRoutes() {
  console.log(`Checking all routes on http://localhost:${port}...`);
  let hasError = false;

  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:${port}${route}`);
      console.log(`✓ ${route.padEnd(20)} -> HTTP ${res.status} (${res.statusText})`);
      if (!res.ok) hasError = true;
    } catch (err) {
      console.error(`✗ ${route.padEnd(20)} -> FAILED: ${err.message}`);
      hasError = true;
    }
  }

  if (hasError) {
    console.error("Some routes failed!");
    process.exit(1);
  } else {
    console.log("All routes passed with 200 OK!");
  }
}

checkRoutes();
