const Food = require('../model/foodsModel');

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

module.exports = { methodPost };
