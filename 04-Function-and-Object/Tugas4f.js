let dataBuah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        ada_bijinya: "tidak",
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        ada_bijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        ada_bijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        ada_bijinya: "tidak",
        harga: 5000
    }
];

let buahTanpaBiji = dataBuah.filter(buah => buah.ada_bijinya === "tidak");
console.log(buahTanpaBiji);
