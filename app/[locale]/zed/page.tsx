import React from 'react';
import PointCloud from './PointCloud';
import fs from 'fs';
import path from 'path';

const Home: React.FC = () => {
  const filePath = path.join(process.cwd(), 'public', 'test.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse the file content into an array of [x, y, z] points
  const lines = fileContent.split('\n');
  const points: number[][] = [];

  for (const line of lines) {
    // Skip comments and empty lines
    if (line.startsWith('#') || line.trim() === '') continue;

    // Parse each line into [x, y, z]
    const [x, y, z] = line.trim().split(' ').map(Number);
    points.push([x, y, z]);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Static Point Cloud Visualization</h1>
      <PointCloud points={points} />
    </div>
  );
};

export default Home;