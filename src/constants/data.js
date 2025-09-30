import { DollarSign, ShieldCheck, Truck } from "lucide-react";

export const productList = [
  { name: "Trekking Sticks", desc: "Lightweight & Sturdy", sale: 45, rent: 5, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA28-0V0-c3d3-G0fB5z1p2w8r4E0n6p9k2m4c3q2r8c9w9r3u6d5s7t3f0u5d7e5d6g6h2j8k6l4m8n2p0q9r5s1t7u4v6w8x2y7z4a9b6c0d8e2f8g3h5i2j8k6l4m8n2p0q9r5s1t7u4v6w8x2y7z4" },
  { name: "All-Season Sleeping Bag", desc: "Comfort to -5°C", sale: 120, rent: 15, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYTyP1aWr-qOaXShQUKCv05zrHCCUVNHajBTG6RlPE1jcBV8v1mz0GuOEmnTIU0qMxdThpojbbiQN2mAjqIC9EqU9DCrvHlSdA7ks88ZiL0KJYIx7ES6dn9p2aPtmRRcnwBSoqCIzkVf4rcYYZXi_PwgNipcjWsrEg1ktTbNu9-gkjKza0w3_kqAolbkhPh98Y3nfoXpHtFycc7MvAZtrubVbTMkdi_9hao3CeRCPr87gp2MEoItruO2N619z46zKVbBPddml8UBQ" },
  // ... add the rest
];

export   const socialLinks = [
    { name: 'Facebook', icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.267 12.354c.007-.09.011-.18.011-.271 0-3.32-2.686-6.012-6.002-6.012a5.98 5.98 0 00-4.394 1.834 6.006 6.006 0 00-.77 7.399 6.002 6.002 0 009.155-3.084zm-3.131-1.378c-.68.328-1.428.435-2.189.377a3.99 3.99 0 01-3.15-3.818 4.032 4.032 0 011.083-2.827c.108-.12.296-.06.322.083.025.14.153.84.195 1.05.066.321.223.639.421.921.21.298.463.54.746.721.28.18.59.3.91.36.32.06.64.06.96.02a.498.498 0 01.53.518c-.027.273-.13.535-.29.77-.16.235-.37.438-.62.595-.24.15-.5.25-.76.3z' }, // Placeholder for now, ideally use Lucide or FontAwesome for all

  ]; 

  export   const features = [
    {
      icon: ShieldCheck,
      title: 'Quality Gear',
      description: 'We offer only the best travel gear from top brands, ensuring reliability and performance.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your gear delivered quickly and efficiently, so you can focus on planning your trip.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Rent or buy gear at competitive prices, making your adventures more accessible.',
    },
  ];

  export const popularItems = [
    {
      name: 'Osprey Atmos AG 65 Backpack',
      description: 'Anti-gravity suspension for ultimate comfort.',
      price: '$15/day',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMNx9DQ0gmbxcD-n9-rGTdeaB1iO2BBcoWhnpu9BTD2dlUQvdSCQ_JEuIQxoRg7O27CJL-MANyIUXVaUw3pNwp74VXIByfCZK3jVwraZbAdd-P3Mtw-1eZmO0PwyIx4X5-DqugY384fbb8U7OjdYrwZY-HDD_DMRR6UFho7bLecHc0vTtkrujEYehh-Y0kJ9Eb1KIxx_z4DAAPWySxo5bg5Jx9sInrP5Szd-RTNbqqgVwK4k2HJs5hxRaUcS05HfYEP0UEYT_f_Z1n',
      alt: 'A person hiking with a large backpack in a mountainous area.',
    },
    {
      name: 'MSR Hubba Hubba NX 2 Tent',
      description: 'Lightweight, 3-season, 2-person tent.',
      price: '$25/day',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwfmc5pOlOR4zgDS_UHCRmqv28z6_171rAVnJg0UdgjMk--V53emnA22sH9AoiLl5DdseDOMFHUaKMq4gMqxlEbJV-9VohHVKHg79F3gE2Q3i2kF6hYEInwDKNLqfRQyQr47cTJEXFTtpP5craPfwAGayBLIDmsYCkmm8X7e_2evOKvkkEkn00rAINaXg6JRJgNTdZ-HOnsze2RkrSej_6brg1-nTopv8mnPxOiCESBugTW80GnO7iT_cjbe7di9Nh8NP5u3xI-QAC',
      alt: 'A two-person tent set up in a forest clearing with sunlight filtering through the trees.',
    },
    {
      name: 'Sony Alpha a7 III Camera',
      description: 'Full-frame mirrorless, 24MP sensor.',
      price: '$50/day',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDzSL84FTIg7QnJJRbFCN3tgYr0b0M_GYJhe6ecRyJnG-jqjI2tX6-LnOPgEJzger1FQgqwHnyUk4aL7iW5kmdxOM3B-pkRp6lmOjbQlCgEBncscD_I202RnWRU1irRYkCBbAED-hsr1KtPZvq4GYAarOzrDfhZp3AM61h8vpyH6rfsyVobPH_4OlbuwjsItHnC6X_6fTNWNJOxvEft9Lc8jC0ivJ4HHwryMbfeTAvrxa4tbToaKfJjtZHk7oOuAs1WrqwcZeNrZnt',
      alt: 'A high-end mirrorless camera with a lens attached, placed on a wooden surface.',
    },
  ];