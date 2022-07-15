const express = require('express');
const router = require('./routes/router');

const app = express();
const port = 5000;
const getRouter = router;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', getRouter);

app.listen(port, function () {
  console.log(`Aplikasi berhasil dijalankan di ${port}`);
});
