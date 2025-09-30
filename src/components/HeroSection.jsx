import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcdj9vjc92sLJiw9Y--YyPODe5Vh9fU_fX-tJsoY-6IPiEfjnQdXkSCHtIAtIalK4SgxZcBnPcj9K8Pa2LjOhJwnRwFBJBl_7Wun8X5h669ZQzl7AcE62ll-mm8Tgd6LXheGzmO76_7x0RT01Out7u201MApfKqe317zhPVlOYK-Sn3LXXsR-Y4H9AXdWUIwKQ104wUCm0Nle2QRmhyYk0aGYDsR4CAHbrI7I8bHUS5cr0ZA0dZi56-8OAjYrw2J9y5uSkSaxduWA")' }}></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Adventure Begins with the Right Gear</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">Rent or buy top-quality gear for your next journey.</p>
        <button className="mt-8 bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300">Explore Products</button>
      </div>
    </section>
  );
}
