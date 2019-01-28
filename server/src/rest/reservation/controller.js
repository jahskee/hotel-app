const Reservation = require('../../databases/mlab/collection1/reservation');
const { parse } = require('querystring');

class ReservationController {
  constructor() {
    /* ===================== custom CRUD ====================== */

    // -------- search category = 'Science' ------------
    this.findAll = (req, res) => {
      const query = Reservation.find({});
      query.exec((err, doc) => {
        if (err) throw err;
        const collection = doc.map(model => model._doc);
        res.json(collection);
        res.end();
      });
    };

    this.findById = (req, res) => {
      const query = Reservation.findById(req.params.id);
      query.exec((err, doc) => {
        if (err) {
          res.json(err);
        } else {
          res.json(doc._doc);
        }
        res.end();
      });
    };

    this.save = (req, res) => {
      let body = '';
      let postData;
      req.on('data', chunk => {
        body += chunk.toString();
        req.on('end', () => {
          console.log((postData = parse(body)));

          let record = new Reservation(postData);
          record.save().then(data => {
            res.json(data);
            res.end();
          });
        });
      });
    };

    this.test = (req, res) => {
      res.json({ test: 'test' });
      res.end();
    };
  } // end constructor
} // end clsss

const controller = new ReservationController();

module.exports = controller;
