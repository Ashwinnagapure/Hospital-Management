import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async (req, res) => {
    try {
        const { docId } = req.body; // Corrected the variable name to docId
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        res.json({ success: true, message: "Availability Changed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorList = async (req, res) => { // Added req and res as parameters
    try {
        const doctors = await doctorModel.find({}).select(["-password", "-email"]);
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Exporting both functions
export { changeAvailablity, doctorList };
