import React from "react";
import { PrimaryButton, SecondaryButton } from "./ui/Button";

export default function HeroSection() {
  return (
      <section
    className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center py-20 text-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYbhuxTJURuT7BJSCnoOSD7LwJz5ZohqFvWSFpcsDZHAGH0CFAznGprnU_fa4w1nEmE2KuN2t_7VCx6s9-Q82irfUfpmGeC7mpSso9-Y6GMl8wdbDshCLogbtL4u3gTVA-n6MojDL59LPGyRByL8X9HmYN3m-PtcgeOhi0fuwSpYnziGIr_92UK3Mt73ocUjxl-I3vYAGQIFUM7EYTJiVX8z_tqft2imqOwbdhO5TxLCqi-i6ySQSmBjR2jU_Xeqaz81A0aabisGeH")`,
    }}
  >
    <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Gear Up for Your Next Adventure</h1>
      <p className="mt-4 text-lg text-white/90">
        Rent or buy high-quality travel gear from Yatriko Gears. We offer a wide selection of equipment for all your travel needs, ensuring you're prepared for any journey.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <PrimaryButton className="px-6 py-3 text-base font-bold shadow-lg">Rent Gear</PrimaryButton>
        <SecondaryButton className="bg-background-light px-6 py-3 text-base font-bold text-primary shadow-lg hover:bg-primary/10 dark:bg-background-dark dark:text-primary dark:hover:bg-primary/20">
          Buy Gear
        </SecondaryButton>
      </div>
    </div>
  </section>
  );
}
