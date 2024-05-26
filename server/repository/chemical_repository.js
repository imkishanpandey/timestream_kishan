const {Chemical} = require('../models/Chemical.js');
const db = require('../models/index.js')
console.log(db);
const ChemicalMasterRepo = db.Chemical;

// CRUD Operations

// Create
const createChemical = async (params) => {
    try {
        const chemical = await ChemicalMasterRepo.create(params);
        return chemical;
    } catch (error) {
        console.error("Error creating chemical:", error);
        throw error; 
    }
};

// Create by CSV
const createChemicalCsv = async (params) => {
    try {
        const chemical = await ChemicalMasterRepo.bulkCreate(params);
        return chemical;
    } catch (error) {
        console.error("Error creating chemical through csv:", error);
        throw error; 
    }
};

// Read 

const findChemicalsById = async(id) => {
    const chemical = await ChemicalMasterRepo.findOne({
        where: {
            chemical_id: id
        }
    })
    return chemical;
}

// Retrieve All
 const findAllChemicals = async() => {
    const chemical = await ChemicalMasterRepo.findAll()
    return chemical;
}

// Update 
 const updateChemical = async(id, chemical) => {
    const updatedChemical = await ChemicalMasterRepo.update(chemical, {
        where: {
            chemical_id: id
        }
    })
    return updatedChemical;
}
// Delete
 const deleteChemical = async(id) => {
    await ChemicalMasterRepo.destroy({
        where: {
            chemical_id: id
        }
    });
}

module.exports = {
    createChemical,
    createChemicalCsv,
    findChemicalsById,
    findAllChemicals,
    updateChemical,
    deleteChemical,
}
