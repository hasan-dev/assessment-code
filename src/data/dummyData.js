const makananKhas = [
  {
    id: 1,
    nama: 'Nasi Goreng',
    deskripsi:
      'Nasi goreng adalah hidangan nasi yang digoreng dengan bumbu seperti bawang putih, bawang merah, cabai, dan kecap manis. Biasanya dihidangkan dengan telur mata sapi, kerupuk, dan acar.',
    bahanUtama: ['Nasi', 'Telur', 'Bumbu', 'Kecap Manis'],
    asalDaerah: 'Seluruh Indonesia',
    gambar:
      'https://cdn1-production-images-kly.akamaized.net/grfsArrUnfc-czQf0baUYmOKgbQ=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3108566/original/079979700_1587487794-Sajiku_1.jpg',
  },
  {
    id: 2,
    nama: 'Rendang',
    deskripsi:
      'Rendang adalah daging sapi yang dimasak dalam santan dengan berbagai rempah-rempah seperti serai, lengkuas, dan daun jeruk. Ini adalah masakan Padang yang terkenal.',
    bahanUtama: ['Daging Sapi', 'Santan', 'Rempah-rempah'],
    asalDaerah: 'Sumatra Barat (Padang)',
    gambar:
      'https://www.warisankuliner.com/gfx/recipes/temp_thumb-1658299943.jpg',
  },
  {
    id: 3,
    nama: 'Sate',
    deskripsi:
      'Sate adalah potongan daging (biasanya ayam, daging sapi, atau kambing) yang ditusuk lalu dibakar dan disajikan dengan bumbu kacang atau bumbu kecap khas Indonesia.',
    bahanUtama: ['Daging', 'Bumbu Kacang/Bumbu Kecap'],
    asalDaerah: 'Seluruh Indonesia',
    gambar:
      'https://cdn0-production-images-kly.akamaized.net/i0E31DzGRrxN2UEEsHUjJGd1kJE=/1x66:1000x629/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4462249/original/029077700_1686543353-shutterstock_2132031603.jpg',
  },
  {
    id: 4,
    nama: 'Gado-Gado',
    deskripsi:
      'Gado-gado adalah salad Indonesia yang terdiri dari sayuran segar, tahu, tempe, telur rebus, dan lontong. Disajikan dengan saus kacang khas.',
    bahanUtama: ['Sayuran', 'Tahu', 'Tempe', 'Telur', 'Lontong'],
    asalDaerah: 'Jawa',
    gambar:
      'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/14/fff30965-876c-4573-85fa-ed9ec41b966d.jpg',
  },
  {
    id: 5,
    nama: 'Nasi Padang',
    deskripsi:
      'Nasi Padang adalah hidangan nasi yang disajikan dengan berbagai hidangan dari masakan Padang seperti rendang, sambalado, dan gulai.',
    bahanUtama: ['Nasi', 'Hidangan Padang'],
    asalDaerah: 'Sumatra Barat (Padang)',
    gambar:
      'https://cdn.rri.co.id/berita/1/images/1689391542821-images_(22)/1689391542821-images_(22).jpeg',
  },
  {
    id: 6,
    nama: 'Soto Ayam',
    deskripsi:
      'Soto ayam adalah sup ayam dengan kuah kuning yang gurih. Biasanya disajikan dengan nasi, tauge, dan emping.',
    bahanUtama: ['Ayam', 'Bumbu Kuah', 'Nasi', 'Tauge', 'Emping'],
    asalDaerah: 'Jawa',
    gambar: 'https://ik.imagekit.io/dcjlghyytp1/2020/06/yusrisalaprianti.jpg',
  },
  {
    id: 7,
    nama: 'Martabak',
    deskripsi:
      'Martabak adalah roti tebal yang digoreng dengan isian manis atau gurih seperti cokelat, keju, atau daging cincang.',
    bahanUtama: ['Tepung', 'Isian (Cokelat, Keju, Daging Cincang)'],
    asalDaerah: 'Seluruh Indonesia',
    gambar:
      'https://cdn0-production-images-kly.akamaized.net/o0wGMbhMBXM7zFo_O2xzWxJMq-4=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2526959/original/071062500_1544648799-resep-martabak-manis-praktis-tanpa-telur-anti-gagal.jpg',
  },
  {
    id: 8,
    nama: 'Bakso',
    deskripsi:
      'Bakso adalah bola daging yang biasanya terbuat dari daging sapi giling, tapioka, dan bumbu. Sering disajikan dalam sup dengan mie dan bumbu kacang.',
    bahanUtama: ['Daging Sapi', 'Tapioka', 'Bumbu', 'Mie'],
    asalDaerah: 'Jawa',
    gambar:
      'https://www.masakapahariini.com/wp-content/uploads/2019/11/resep-mie-bakso.jpg',
  },
  {
    id: 9,
    nama: 'Nasi Uduk',
    deskripsi:
      'Nasi uduk adalah nasi yang dimasak dalam santan dan bumbu seperti serai dan daun pandan. Biasanya disajikan dengan lauk seperti ayam goreng, telur, dan tempe.',
    bahanUtama: [
      'Nasi',
      'Santan',
      'Serai',
      'Daun Pandan',
      'Ayam',
      'Telur',
      'Tempe',
    ],
    asalDaerah: 'Betawi (Jakarta)',
    gambar:
      'https://cdn1-production-images-kly.akamaized.net/bdMMdUeRIi2EGRbRMlFvpgjreVk=/1x60:700x454/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3264167/original/045475800_1602402228-1212646998.jpg',
  },
  {
    id: 10,
    nama: 'Rujak',
    deskripsi:
      'Rujak adalah campuran buah-buahan segar dengan saus pedas manis. Ada berbagai jenis rujak, termasuk rujak buah dan rujak cingur (dengan hidangan sapi cingur).',
    bahanUtama: ['Buah-buahan', 'Saus Pedas Manis'],
    asalDaerah: 'Seluruh Indonesia',
    gambar:
      'https://img-global.cpcdn.com/recipes/1d5a3ad311821fd3/1360x964cq70/rujak-buah-segar-dan-sehat-foto-resep-utama.webp',
  },
];

export default makananKhas;
