const Food = require('../modelS/foodsModel');

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
    res.status(500).json({
      e: [
        {
          message: 'Error',
        },
      ],
    });
  }
};

const methodGet = async (req, res) => {
  try {
    const getData = await Food.findAll({});
    res.json(getData);
  } catch (e) {
    res.status(500).json({
      e: [
        {
          message: 'Error',
        },
      ],
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
    res.status(500).json({
      e: [
        {
          message: 'Error',
        },
      ],
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
    res.status(500).json({
      e: [
        {
          message: 'Error',
        },
      ],
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
    res.status(500).json({
      e: [
        {
          message: 'Error',
        },
      ],
    });
  }
};

module.exports = { methodPost, methodGet, methodGetId, methodUpdate, methodDelete };
