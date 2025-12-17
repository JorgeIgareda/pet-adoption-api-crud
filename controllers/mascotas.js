import mascotasModel from '../models/mascotas.js';

class mascotasController {
  constructor () {}

  async create (req, res) {
    try {
      const data = await mascotasModel.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update (req, res) {
    try {
      res.status(201).json({ status: 'update-ok' });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete (req, res) {
    try {
      res.status(201).json({ status: 'delete-ok' });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getAll (req, res) {
    try {
      res.status(201).json({ status: 'getall-ok' });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getOne (req, res) {
    try {
      res.status(201).json({ status: 'getone-ok' });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
  
}

export default new mascotasController();