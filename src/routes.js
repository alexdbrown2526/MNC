import Home from "./views/public/Home.svelte";
import About from "./views/public/About.svelte";
import Projects from "./views/public/Projects.svelte";
import Services from "./views/public/Services.svelte";
import Contact from "./views/public/Contact.svelte";

const routes = [
  { name: "/", component: Home },
  { name: "/about", component: About },
  { name: "/projects", component: Projects },
  { name: "/services", component: Services },
  { name: "/contact", component: Contact },
];

export { routes };
