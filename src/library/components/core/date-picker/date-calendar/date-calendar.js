import * as React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';

export const dateCalendar = ({ value, onChange }) => {
  return <MultiViewCalendar views={1} value={value} onChange={onChange} />;
};
