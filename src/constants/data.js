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

  export const products = [
  { id: 1, name: 'Osprey Backpack', description: 'Perfect for backpacking trips', type: ['RENT', 'BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtyyNKD7veyNh8AEie57zqkmR2WwsFaK0aUxwBbhvVLBlytpepmbHIh2xm6PTYkmZ_-6KdI2WxilmqPMRD1_FNoxja4niRL8cXvFPdcaccChnFLXH3LQ7j4ffPZPKniIJXhi68IR50x00Q40duZUbpXU3hEfaMCySHqRNNyM_s3pKH72H2AhOVWckuH0oQBobPEMBQkAKc0fJZBGemC0F0lcA6u4udXqBycDAcCAspLdlIuLiBsC1dhYL0eqjcg4BeqwDyNEVNLtUF' },
  { id: 2, name: 'Merrell Hiking Boots', description: 'Durable and comfortable for long hikes', type: ['BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvcs-LtZUMj4GWkA4KVjzrCX-5NhdVwU0Lyg2AERIAvQkO8DZNBGdeY5_p80XGUd_XVJbAEnSl2DSO3ayna-RgxO_replAVhlTSH4anbOAPegdq16rzVXvbkKgWRDL65gIgQ6EFiRt14PEP4VHZ4X2a9l6ckOEItWDt5JkFCoQANeUBwGYT4fFzclV_t0nB5uZtwqlMc3fpsWG5_K9Ar2vwApqWgADzpYH5YKYk0d5fSCNdIA71s4kQ2l_SJ3WfP2K0Z3ZsTlhZ5dM' },
  { id: 3, name: 'MSR Hubba Hubba Tent', description: 'Spacious and easy to set up', type: ['RENT'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVpEKKAda6WAXWJqWt7tcwdPR7Ui64of_bBmZOxoOO5N4frZ92nvdNDTwO_vuW2Jx_-ecBbuC_HpKLbeNCoj5wk3F-1yaM28FHRwUjMK4KbD8CPEQyZslSZLbAn3L7bUq9oaX_FD1PqbWX6odx5bFaWO26Upo9TIsLx9sUmdo1DLRFGmwPykhU_Np45Gn0tyiPHTW3ZI91Xdv-t8DUq7cDAMKOJji0urVZIzeuT7qUpmR2Rl0Tnzr_i2DDl2fpKbFEB9kOHFkM_200' },
  { id: 4, name: 'North Face Sleeping Bag', description: 'Warm and lightweight', type: ['RENT'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgc806pY37CKvEu8RVu_aFPGd9srx6UlS1n20csvEzaN1GY34At4_8q61eR8btT5pwUeN_hKUtSL8FizIMp69MnBIrECg1VJfOWDXseTnvHqYf11vq9LtVgoxubHlh_nISLSXRLR0YpkRkVEhfORm2r-0LwUJ2TreE6DmdQTuHdVKS26IvniOoPLtGJGpspFSqgJW_Y0gqpcrNWWqJycA1pp0HTAaPL-uKhLCS3lVLK7SAMPZT30dlS09q5eip2ESp6_pbzg9_dEYA' },
  { id: 5, name: 'Cabeau Travel Pillow', description: 'Comfortable for long flights', type: ['BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0kciixT-5LsPi5vY7R_c4-6G01wwyKEhibol_ND6-oyOMJU2t8vljN7jhBRuSR6DxLx7XtFQytOL64lyTRtaDKRmQvgpbZwyX6Tfe883EnMnEaLFvSxfZMLN0wyjY2hSXrHXCZYf3Ooutv3Y-eTg4TzZbrWtHiLXxHwfixprOWQahnMqb3YftwOMIR-LO5oxiZCe3jihAIAUG_i3UcALTSlSIbQBReaB4sO318Y_VRLnl7781UhFu_zJdQDRwQMfJFQq1E9SSvU5B' },
  { id: 6, name: 'Sony Alpha a7 III Camera', description: 'Capture your adventures', type: ['RENT', 'BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZGCM9vOVTxKky1G0ffCTgQp0lUGh5G5LVAAhEiF8keDyny5Efq39Nn3OvYHKAsqrXQvgU0jpTc97iMj0YgE9_zMb850yDoGF3E11XRIuAPvcbUC5muQsdOrImN4mksvOWIJpMMxtbDlhRAHtr6rM3NPiSGIJ1Qo4xTRqR13vKPmFFT-lceWv6KFuFl7BskJZBn4b6DzKyZcnszK6GDob1Et8PmEik4qRIb_UWUM1wf6_Jngkuh_tDze2fv4ZZaxu6Q2OCYMsnr0f' },
  { id: 7, name: 'Anker Portable Charger', description: 'Keep your devices charged', type: ['BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3s4OLdjyopJCALbVsGEoIMcUluUa_P2vb0-gxZIAMyJg2du_MwTLwLdBZZjvtfhesyA94PzGHm1W26HiW1cAOvgTVqQ3oLBMuKKD3LJIc8Wa6tawEUARKMttuU9ZxdEnyb2dpziirjDKsF2hDVuoC6Dd1PTeuNBx6prPDAkrvW2hZ_AEKQFAY4a1M389ZiaTX66XxECJbbv50JAe7Clg1BM5ME4-HCNQxNeYJVhHqawCmX4lenLGWZ6TF6UGB8gASTcRF-NJBuiqA' },
  { id: 8, name: 'Hydro Flask Water Bottle', description: 'Stay hydrated on the go', type: ['BUY'], imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIVUEWabt47104ImDnOitYZWmv5sHybI7UyZ_KO0AOLGmh-axZzwBbfrWdaYZxE1g8735pWYP14nwzU37xfwPlhzmFbouKf8ZxA2Bu3mhCQhDK1mSPt4X0UWjiVhC7zSuxLNz8Sq20UoZbWBqHqpKjua_4VoJp-IyGSrp4drz0wOjEkrZnsWnuoqEhLHLfK9RfTjo6VICN_sywcrXs4r0niVcaR418A6_kGUlT-sP1D5NHyy8I269TFygRnxuOsl9_HIrCQlwycwhJ' },
];