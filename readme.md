# LECTURE INTRO EXPRESS

- Framework Node.js membantu mengorganisir aplikasi web di server berbasis MVC
- Dokumentasi
  - https://expressjs.com/en/4x/api.html (versi 4)

### DEMO

- Install Express
  - npm init -y
  - npm install express
  - .gitignore (diisi `node_modules`)
- Setup Express
  - Ikuti https://expressjs.com/en/starter/hello-world.html
  - Test secara local
- Melihat Fitur Express
  - https://expressjs.com/en/4x/api.html
  - app.get(path, callback)
- Membuat Routing Halaman (Fix)
  - Membuat routing untuk halaman me response text dan html
  - Cari res.send di dokumentasi express
  - Jika tidak ada res.send() maka akan loading terus / masih menunggu response
  - fs.readFileSync lalu mengembalikan JSON ke res.send()
- Menggunakan Dynamic Parameter di routing halaman
  - Contoh routing dengan parameter
    - https://www.facebook.com/sofyansetiawan (url)
      - https://www.facebook.com/:username (route)
    - https://meet.google.com/ont-cfkf-ziu (url)
      - https://meet.google.com/:meetid (route)
    - http://localhost:3000/putri/book/delete/1 (url)
      - http://localhost:3000/:username/book/delete/:id (route)
  - Melakukan seleksi berdasarkan 1 param
  - Jika ada route ke halaman yang sama tapi perbedaan parameter maka akan diakses secara berbeda misal
    - Tanpa parameter: https://www.facebook.com/ (url)
    - Dengan parameter: https://www.facebook.com/sofyansetiawan (url)
  - Cari req.params di dokumentasi express (berupa object)
  - Routing /person/:id dan /person/:id/delete berbeda route
  - Membuat dynamic parameter lebih dari 1
- Menggunakan query untuk lebih dinamis
  - Query dengan ?namaparam=string&&namaparam2=valueint
  - Umumnya kita manfaatkan untuk pencarian
  - Maka object yang dihasilkan ada namaparam dan valuenya
  - req.query tidak perlu didefinisikan di route
- Tambahan
  - GET tidak selalu harus selalu melalui address bar di browser tapi bisa juga dengan form di HTML dengan method GET
  - Kalian bisa mengkombinasikan antara req.params dan req.query