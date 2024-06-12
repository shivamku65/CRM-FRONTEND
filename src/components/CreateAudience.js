import React from 'react';
import './CreateAudience.css';

const CreateAudience = () => (
  <div className="create-audience">
    <h2>Create Audience</h2>
    <form>
      <div>
        <label>Total Spends</label>
        <input type="number" defaultValue="10000" />
      </div>
      <div>
        <label>Add Rule</label>
        <input type="text" placeholder="Rule" />
      </div>
      <div>
        <input type="radio" name="condition" value="AND" defaultChecked /> AND
        <input type="radio" name="condition" value="OR" /> OR
      </div>
      <button type="button">Check Audience Size</button>
    </form>
  </div>
);

export default CreateAudience;
