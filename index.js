const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/belajar', function (req, res) {
  res.send(req.body);
});

app.put('/belajar/:id', function (req, res) {
  let hasilPut = {
    'id': req.params.id,
    'body': req.body,
  };
  res.send(hasilPut);
});

app.delete('/belajar/:id', function (req, res) {
  res.send(req.params.id);
});

app.listen(port, function () {
  console.log(`Aplikasi berhasil dijalankan di ${port}`);
});
