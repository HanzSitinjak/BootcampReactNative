let dataBukuTambahan= {
    penulis: "HansAgung",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = { ...buku, ...dataBukuTambahan };
  console.log(objOutput);
  