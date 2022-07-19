const Food = require('../models/foodsModel');
const Photo = require('../models/photosModel');
const upload = require('../helper/fileupload');

const methodUploadPhotos = async (req, res) => {
  try {
    // upload file
    await upload(req, res);

    if (req.file === undefined) {
      console.error(req.file);
      return res.status(400).send({
        message: 'Image belum di pilih',
      });
    }

    // DB connect
    Photo.create({
      idfoods: req.body.idfoods,
      path: req.file.originalname,
    }).then((data) => {
      res.status(200).send({
        message: 'File berhasil di upload',
      });
    });
  } catch (e) {
    return res.status(500).json({
      message: 'error 1',
    });
  }
};

const methodPost = async (req, res) => {
  try {
    const { namamakanan, daerah, deskripsi } = req.body;
    const store = new Food({
      namamakanan,
      daerah,
      deskripsi,
    });
    await store.save();
    res.json(store);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
    });
  }
};

const methodGet = async (req, res) => {
  try {
    const getData = await Food.findAll({});
    res.json(getData);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
    });
  }
};

const methodGetId = async (req, res) => {
  try {
    const id = req.params.id;
    const getDataById = await Food.findOne({
      where: { id: id },
    });
    res.json(getDataById);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
    });
  }
};

const methodUpdate = async (req, res) => {
  try {
    const { namamakanan, daerah, deskripsi } = req.body;
    const id = req.params.id;

    const updateFood = Food.update(
      {
        namamakanan,
        daerah,
        deskripsi,
      },
      {
        where: { id: id },
      }
    );

    await updateFood;
    res.send('Berhasil diupdate!');
    const getDataById = await Food.findOne({
      where: { id: id },
    });
    res.json(getDataById);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({
      message: 'Error',
    });
  }
};

const methodDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteFoods = Food.destroy({
      where: { id: id },
    });

    await deleteFoods;
    res.send('berhasildihapus');
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
    });
  }
};

module.exports = {
  methodPost,
  methodGet,
  methodGetId,
  methodUpdate,
  methodDelete,
  methodUploadPhotos,
};
