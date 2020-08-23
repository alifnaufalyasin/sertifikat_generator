# sertifikat_generator

# Cara penggunaan

1. install node dulu di https://nodejs.org/en/download/
2. clone atau download repo ini
3. ketik ```npm install``` pada command prompt directory file ini
4. masukkan sertifikat template dengan format png dan rename dengan nama ```sertifikat.png```
5. buka file nama.js dan masukkan list nama yang akan tercantum pada sertifikat tersebut. pisahkan nama 1 dan lainnya dengan enter (tiap 1 nama 1 baris)
6. pastikan diawal dan akhir dari list nama tersebut adalah petik yang diatas tombol tab
7. buka file index.js dan atur lebar dan tinggi (pixel) dari sertifikat anda pada baris ke 25 dan 26
8. coba run dengan command ```node index.js```
9. cek hasil nya di ```folder hasil``` 
10. jika tulisan nama tersebut kurang pas, lakukan koreksi atas bawah pada ```line 18``` dan koreksi kanan kiri pada ```line 17```
11 ulangi step 8-10 hingga dapat hasil yang sesuai

# Font

Font default yaitu Montserrat Semibold
kalian dapat mengubah jenis dan ukuran font dengan meng-convert font.ttf menjadi font.fnt menggunakan tool pada web https://ttf2fnt.com silahkan atur besar, kecil, spasi antar huruf dan warna di web tersebut, setelah itu baru download dan simpan di folder font kemudian ```edit line 7 dengan nama font tersebut```


> untuk info lebih lanjut mengenai library yang dipake, bisa diliat di https://www.npmjs.com/package/jimp
