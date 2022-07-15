const express = require('express');

const methodGet = (req, res) => {
  const id = req.params.id;
  const nama = req.params.nama;
  const role = req.params.role;

  let responBody = {
    'id': id,
    'nama': nama,
    'role': role,
  };
  res.send(responBody);
};

const methodPost = (req, res) => {
  res.send(req.body);
};

const methodPut = (req, res) => {
  let hasilPut = {
    'id': req.params.id,
    'body': req.body,
  };
  res.send(hasilPut);
};

const methodDelete = (req, res) => {
  res.send(req.params.id);
};

module.exports = {
  methodGet,
  methodPost,
  methodPut,
  methodDelete,
};
