import React from 'react';
import './CampaignCard.css';

function CampaignCard({ campaign }) {
  return (
    <div className="campaign-card">
      <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <div className="campaign-progress">
        <div className="goal">
          <span>Goal: ${campaign.goal}</span>
        </div>
        <div className="raised">
          <span>Raised: ${campaign.raised}</span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CampaignCard;
