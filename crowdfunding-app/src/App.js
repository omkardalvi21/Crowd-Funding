import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CampaignCard from './components/CampaignCard';

function App() {
  const campaigns = [
    {
      id: 1,
      title: 'Save the Ocean',
      description: 'Help us clean up the oceans and protect marine life.',
      goal: 5000,
      raised: 1500,
    },
    {
      id: 2,
      title: 'Education for All',
      description: 'Provide free education materials to children in need.',
      goal: 10000,
      raised: 7000,
    },
    {
      id: 3,
      title: 'Clean Water Initiative',
      description: 'Provide clean drinking water to communities in Africa.',
      goal: 20000,
      raised: 4500,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="campaigns">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

export default App;
