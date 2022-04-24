import { DateTime } from "./modules/luxon.js"
import * as navigation from "./modules/navigation.js";

//Date section
    const dateSection = document.getElementById('date');
    dateSection.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED);