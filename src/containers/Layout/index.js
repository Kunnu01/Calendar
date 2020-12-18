import React from 'react';
import { Card } from '../../components/Card';
import { Calendar } from '../Calendar';

const Layout = () => {
  return (
    <div
      className="container flex flex-row h-4/6 w-7/12 bg-light-green box-border m-auto"
    >
      <Card>
        <Calendar />
      </Card>
    </div>
  );
};

export { Layout };
