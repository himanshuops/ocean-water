import Contact from "../models/contect.model.js";

export const createContact = async(req, res) =>{
  try {
    const { username, email, phone, message } = req.body;
    const contact = new Contact({ username, email, phone, message });
    await contact.save();
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export const getAllContacts = async(req, res) =>{
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true,message: "Fetched data successfully",  data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteMsg = async(req, res) => {
    try{
        const msg = await Contact.findByIdAndDelete(req.params.id)
        if(!msg){
            res.status(404).json({message:"Error contact not found"})
        }
        res.status(201).json({message: "delete successfully"})
    }catch(error){
        console.log(error)
        res.status(400).json({message:"Error occuring in contact delete"})
    }
}