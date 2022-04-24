import { DateTime } from "./modules/luxon.js";

    const addNewSection = document.getElementById('add-new');
    const contactSection = document.getElementById('contact');
    const dateSection = document.getElementById('date');
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
    dateSection.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED
    );