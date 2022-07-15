const express = require('express');

const app = express();
const port = 5000;

app.get('/belajar/:id/:nama/:role', function (req, res) {
  const id = req.params.id;
  const nama = req.params.nama;
  const role = req.params.role;

  let responBody = {
    'id': id,
    'nama': nama,
    'role': role,
  };
  res.send(responBody);
});

app.post('/post', function (req, res) {
  res.send('Halaman post');
});

app.put('/belajar', function (req, res) {
  res.send('Halaman put');
});

app.delete('/belajar', function (req, res) {
  res.send('Halaman Delete');
});

app.listen(port, function () {
  console.log(`Aplikasi berhasil dijalankan di ${port}`);
});
