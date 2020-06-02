const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Pipeline = require('../../models/Pipeline');

// @route   GET api/pipeline
// @desc    Get all active products in pipeline
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    const pipeline = await Pipeline.findAll();
    if (!pipeline) {
      return res
        .status(400)
        .json({ msg: 'There are no products in the pipeline' });
    }
    res.json(pipeline);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   Post api/pipeline
// @desc    Add product to pipeline
// @access  Private

router.post('/', auth, async (req, res) => {
  const {
    name,
    supplier,
    niss,
    channel,
    phase,
    status,
    paperwork,
    paperwork_date,
    sample,
    sample_date,
    info_required,
    info_required_date,
    vendor_profile,
    web_po,
    label_review,
    ntp,
  } = req.body;

  try {
    product = new Pipeline({
      name,
      supplier,
      niss,
      channel,
      phase,
      status,
      paperwork,
      paperwork_date,
      sample,
      sample_date,
      info_required,
      info_required_date,
      vendor_profile,
      web_po,
      label_review,
      ntp,
    });
    console.log(product);
    await product.save();
    res.json(`Product was added: ${product}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

// @route   GET api/pipeline/id
// @desc    Get product in pipeline by id
// @access  Private

router.get('/id', async (req, res) => {
  try {
    const pipeline = await Pipeline.findOne({ where: { id: 2 } });
    if (!pipeline) {
      return res
        .status(400)
        .json({ msg: 'The requested product cannot be found' });
    }
    res.json(pipeline);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/pipeline
// @desc    Update pipeline info
// @access  Private

router.put('/', auth, async (req, res) => {
  const {
    id,
    name,
    supplier,
    niss,
    channel,
    phase,
    status,
    paperwork,
    paperwork_date,
    sample,
    sample_date,
    info_required,
    info_required_date,
    vendor_profile,
    web_po,
    label_review,
    ntp,
  } = req.body;

  try {
    const product = await Pipeline.findOne({
      where: { id: req.body.id },
    });
    await product.update(req.body);
    res.json(`Product was updated: ${product.name}`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/pipeline
// @desc    Delete an existing product
// @access  Public

router.delete('/', async (req, res) => {
  const { id } = req.body;

  try {
    const product = await Pipeline.findOne({ where: { id: req.body.id } });
    await product.destroy();
    res.json(`Product #${product.id} deleted`);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error trying to DELETE');
  }
});
