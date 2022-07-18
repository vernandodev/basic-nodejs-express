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

module.exports = { methodPost, methodGet, methodGetId };
