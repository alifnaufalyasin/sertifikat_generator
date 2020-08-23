const Jimp = require("jimp")


async function Sertif(nama) {
  //file path ke sertifikat kosongan
  const Sertifikat = './sertifikat.png'
  const fontName = 'MontserratSemibold.fnt'

  //ini untuk load font nya (jenis, ukuran, type jadi satu) dengan extension .fnt 
  //https://stackoverflow.com/questions/24529369/how-to-convert-ttf-to-fnt-with-fontforge
  const font = await Jimp.loadFont('./font/'+fontName)

  Jimp.read(Sertifikat)
    .then(sertifikat => {
      sertifikat
        .print(
          font,
          0, //X (kalau kurang kekiri kasih angka negatif, kalau kurang kekanan kasih angka positif)
          0, //Y (kalau kurang keatas kasih angka negatif, kalau kurang kebawah kasih angka positif)
          {
            text: nama,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, //rata tengah horizontal
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE //rata tengah vertikal
          },
          //yang bawah ini sesuaikan ukuran pixel dari sertifikat kalian, bisa di lihat di properties > detail
          1756, // lebar
          1241 // tinggi
        )
        //write untuk save file nya
        .write('hasil/'+nama+'.png')
    })
  
}

async function main(params) {
  // load list nama dari file nama.js
  let arrNama = require('./nama')
  //convert kalimat to array
  arrNama = arrNama.split('\n')

  for (let i = 0; i < arrNama.length; i++) {
    console.log('Cetak '+arrNama[i]);
    await Sertif(arrNama[i])
  }
}


main()