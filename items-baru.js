/* ═══════════════════════════════════════════════════════════
   ITEMS BARU — data terpisah, di-merge otomatis ke halaman utama
   Foto ada di subfolder  baru/
   ═══════════════════════════════════════════════════════════ */

const ITEMS_BARU = [
  {
    nama:    "Sarung Tangan Dewasa dan Anak",
    foto:    "baru/1. Sarung Tangan Dewasa dan Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "terjual",
    kat:     "sepatu-acc",
    desc:    "Sarung tangan winter untuk dewasa dan anak."
  },
  {
    nama:    "Sarung Tangan Anak",
    foto:    "baru/2. Sarung Tangan Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Sarung tangan winter khusus anak."
  },
  {
    nama:    "Neck Warmer",
    foto:    "baru/3. Neck Warmer.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Neck warmer untuk menghangatkan leher di cuaca dingin."
  },
  {
    nama:    "Sarung Tangan Kulit Dewasa",
    foto:    "baru/4. Sarungan Tangan Kulit Dewasa Pria dan Wanita.jpeg",
    harga:   "30 SEK per pasang",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Sarung tangan kulit dewasa unisex (pria & wanita)."
  },
  {
    nama:    "Sarung Tangan Winter (size 6, 7 & 10)",
    foto:    "baru/5. Sarung Tangan Winter Ukuran 6, 7 & 10.jpeg",
    harga:   "15 SEK per pasang",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Sarung tangan winter tersedia ukuran 6, 7, dan 10."
  },
  {
    nama:    "Kupluk Winter / Beanie Hat",
    foto:    "baru/6. Kupluk Winter atau Beanie Hat.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Kupluk / beanie hat untuk musim dingin."
  },
  {
    nama:    "Hood Warmer Coklat",
    foto:    "baru/7. Free Hood Warmer Coklat.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "terjual",
    kat:     "sepatu-acc",
    desc:    "Hood warmer warna coklat."
  },
  {
    nama:    "Hood Warmer Black",
    foto:    "baru/8. Hood Warmer Black.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "terjual",
    kat:     "sepatu-acc",
    desc:    "Hood warmer warna hitam."
  },
  {
    nama:    "Syal Anak",
    foto:    "baru/9. Syal Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Syal hangat untuk anak."
  },
  {
    nama:    "Syal dan Neck Warmer",
    foto:    "baru/10. Syal dan Neck Warmer.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Set syal dan neck warmer."
  },
  {
    nama:    "Kain Ihram",
    foto:    "baru/11. Kain Ihram.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Kain ihram kondisi bagus."
  },
  {
    nama:    "Jilbab",
    foto:    "baru/12. Jilbab.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab kondisi bagus."
  },
  {
    nama:    "Jilbab Anak",
    foto:    "baru/13. Jilbab Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab untuk anak."
  },
  {
    nama:    "Jilbab Dewasa Tali",
    foto:    "baru/14. Jilbab Dewasa Tali.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab dewasa model tali."
  },
  {
    nama:    "Jilbab Dewasa Pat",
    foto:    "baru/15. Jilbab Dewasa Pat.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab dewasa model pat."
  },
  {
    nama:    "Jilbab Pasmina Instan Anak",
    foto:    "baru/16. Jilbab Pasmina Instan Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab pasmina instan untuk anak."
  },
  {
    nama:    "Jilbab Tali Anak",
    foto:    "baru/17. Jilbab Tali Anak.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Jilbab model tali untuk anak."
  },
  {
    nama:    "Peci Rajut",
    foto:    "baru/18. Peci Rajut.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "sepatu-acc",
    desc:    "Peci rajut kondisi bagus."
  },
  {
    nama:    "Long Trousers Wanita",
    foto:    "baru/19. Warm Comfortable Long Trousers Women'S.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Celana panjang wanita hangat dan nyaman."
  },
  {
    nama:    "Celana Kulot Wanita",
    foto:    "baru/20. Celana Kulot Wanita.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Celana kulot wanita kondisi bagus."
  },
  {
    nama:    "Celana Cutbray Navy",
    foto:    "baru/21. Celana Cutbray Navy.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Celana cutbray warna navy."
  },
  {
    nama:    "Sweater H&M Pria",
    foto:    "baru/22. Sweater H&M Pria.jpeg",
    harga:   "25 SEK",
    label:   "",
    kondisi: "baik",
    status:  "terjual",
    kat:     "pakaian",
    desc:    "Sweater H&M untuk pria."
  },
  {
    nama:    "Sweater Dressmann XL",
    foto:    "baru/23. Sweater Dressmann Ukuran XL.jpeg",
    harga:   "25 SEK",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Sweater Dressmann ukuran XL."
  },
  {
    nama:    "Kemeja Wanita H&M XS",
    foto:    "baru/24. Kemeja Wanita H&M Ukuran XS.jpeg",
    harga:   "15 SEK",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Kemeja wanita H&M ukuran XS."
  },
  {
    nama:    "Long Johns Pria L",
    foto:    "baru/25. long johns Pria Ukuran L.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "terjual",
    kat:     "pakaian",
    desc:    "Long johns / pakaian dalam panjang pria ukuran L."
  },
  {
    nama:    "Baju Base Layer M",
    foto:    "baru/26. Baju Base Layer Ukuran M.jpeg",
    harga:   "Free",
    label:   "",
    kondisi: "baik",
    status:  "tersedia",
    kat:     "pakaian",
    desc:    "Baju base layer ukuran M untuk wanita."
  },
];
