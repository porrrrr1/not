const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// สร้างกล้องใหม่
exports.create = async (req, res) => {
  try {
    const { ipAddress, name, location } = req.body;
    const newCamera = await prisma.camera.create({
      data: { ipAddress, name, location },
    });
    res.status(201).json(newCamera);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ดึงข้อมูลกล้องทั้งหมด
exports.get = async (req, res) => {
  try {
    const cameras = await prisma.camera.findMany();
    res.json(cameras);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ดึงข้อมูลกล้องตาม ID
exports.getId = async (req, res) => {
  try {
    const { id } = req.params;
    const camera = await prisma.camera.findUnique({ where: { id } });

    if (!camera) {
      return res.status(404).json({ error: 'Camera not found' });
    }
    res.json(camera);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ดึงข้อมูลกล้องตาม IP Address
exports.getIp = async (req, res) => {
  try {
    const { ip } = req.params;
    const camera = await prisma.camera.findMany({ where: { ip_address: ip } });

    if (camera.length === 0) {
      return res.status(404).json({ error: 'Camera with this IP not found' });
    }
    res.json(camera);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
