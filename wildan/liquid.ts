let data = {
    liquids: [
        {
            id: 1,
            namaLiquid: 'Liquid Bequ Freeze',
            tahunKeluaran: 2022,
            warna: 'Biru',
            lokasi: {
                alamat: 'Jalan Raya 123',
                kota: 'Jakarta',
                kodePos: '10110'
            },
            harga: {
                biaya: 50000
            }
        },
        {
            id: 2,
            namaLiquid: 'Liquid Mangga',
            tahunKeluaran: 2021,
            warna: 'Kuning',
            lokasi: {
                alamat: 'Jalan Melati 456',
                kota: 'Bandung',
                kodePos: '40211'
            },
            harga: {
                biaya: 60000
            }
        },
        {
            id: 3,
            namaLiquid: 'Liquid Vanilla',
            tahunKeluaran: 2020,
            warna: 'Putih',
            lokasi: {
                alamat: 'Jalan Kenanga 789',
                kota: 'Surabaya',
                kodePos: '60123'
            },
            harga: {
                biaya: 55000
            }
        },
        {
            id: 4,
            namaLiquid: 'Liquid Caramel',
            tahunKeluaran: 2023,
            warna: 'Coklat',
            lokasi: {
                alamat: 'Jalan Cemara 321',
                kota: 'Blitar',
                kodePos: '66137'
            },
            harga: {
                biaya: 70000
            }
        }
    ]
};
// Fungsi untuk filter berdasarkan alamat
function filterBerdasarkanAlamat(alamat) {
    return data.liquids.filter(liquid => liquid.lokasi.alamat.includes(alamat));
}

// Fungsi untuk filter berdasarkan harga minimal
function filterBerdasarkanHarga(min_harga) {
    return data.liquids.filter(liquid => liquid.harga.biaya > min_harga);
}

// Contoh penggunaan:
console.log(filterBerdasarkanAlamat('Raya'));  // Memfilter liquid yang memiliki 'Raya' dalam alamatnya
console.log(filterBerdasarkanHarga(55000));  // Memfilter liquid dengan harga lebih dari 55.000