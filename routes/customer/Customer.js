const express = require('express')
const Router = express.Router();
const PRODUCTMODEL = require('../../model/Product.model')
const CUSTOMERMODEL = require('../../model/Customer.model')
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const CustomerAuthMiddleware = require('../../middleware/customerauthMiddleware')

Router.get('/customer', async(req, res)=>{
    let data = await CUSTOMERMODEL.find({});
    res.json({data})
})

Router.post('/register', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  
  async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    let findAdmin = await ADMINMODEL.find({});

    if(findAdmin.length > 0){
        res.json({msg: 'Account Already Exist'})
    }
    else{   
    try {
      let user = await CUSTOMERMODEL.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Account already exists' }] });
      }  

      var uniqueCode = email.slice(0,4) + name.slice(0, 2) + Date.now();
      user = new CUSTOMERMODEL({
        name,
        email,
        password
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('customerSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
})


Router.get('/access', CustomerAuthMiddleware , async (req, res) => {
    try {
      var user = await CUSTOMERMODEL.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



Router.post('/login', 
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await CUSTOMERMODEL.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('customerSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  
})




module.exports = Router;