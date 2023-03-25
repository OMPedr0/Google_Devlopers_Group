import React from 'react';
import { useState } from 'react';
import Login from './Login';

export default function Home() {

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 p-4">Bem-vindo ao Workshop de Firebase</h1>
      <Login />
    </div>
  );
}