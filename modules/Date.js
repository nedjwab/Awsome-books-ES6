/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

export const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
