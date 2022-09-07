import DatosModel from "../models/DatosModel.js";

//*metodos*//

//mostrar todos los productos
export const getAllDatos = async (req, res) => {
  try {
    const Datos = await DatosModel.findAll();
    res.json(Datos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un solo producto
export const getDato = async (req, res) => {
  try {
    const dato = await DatosModel.findAll({
      where: { id: req.params.id },
    });
    res.json(dato[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un Producto
export const createDato = (req, res) => {
  try {
    DatosModel.create(req.body);
    res.json({
      message: "Registro creado corectamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un producto
export const updateDato = async (req, res) => {
  try {
    await DatosModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro actualzido corectamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar producto
export const deleteDato = async (req, res) => {
  try {
    await DatosModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro eliminado corectamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
