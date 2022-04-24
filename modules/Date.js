   import { DateTime } from "./luxon.js";
    const dateSection = document.getElementById('date');
    dateSection.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED
    );
