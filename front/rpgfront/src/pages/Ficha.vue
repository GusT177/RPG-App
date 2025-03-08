<template>
    <div class="dnd-sheet">
      <div class="header">
        <div class="logo-area">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zw-pvp4di60W1PNiYgpw5s4s57NIrhJuQ.webp" alt="D&D Logo" class="logo-image hidden" />
          <h1 class="title">DUNGEONS & DRAGONS<sup>®</sup></h1>
        </div>
        <div class="character-header">
          <div class="header-row">
            <div class="header-field">
              <input type="text" placeholder="CHARACTER NAME" class="character-name" />
              <label>CHARACTER NAME</label>
            </div>
          </div>
          <div class="header-row">
            <div class="header-field">
              <div class="field-value">Fighter 1</div>
              <label>CLASS & LEVEL</label>
            </div>
            <div class="header-field">
              <div class="field-value">Noble</div>
              <label>BACKGROUND</label>
            </div>
            <div class="header-field">
              <input type="text" placeholder="PLAYER NAME" />
              <label>PLAYER NAME</label>
            </div>
          </div>
          <div class="header-row">
            <div class="header-field">
              <div class="field-value">Human</div>
              <label>RACE</label>
            </div>
            <div class="header-field">
              <div class="field-value">Lawful neutral</div>
              <label>ALIGNMENT</label>
            </div>
            <div class="header-field">
              <input type="text" placeholder="EXPERIENCE POINTS" />
              <label>EXPERIENCE POINTS</label>
            </div>
          </div>
        </div>
      </div>
  
      <div class="main-stats">
        <div class="ability-scores">
          <div class="ability-score">
            <div class="ability-name">STRENGTH</div>
            <div class="ability-value">+3</div>
            <div class="ability-circle"></div>
          </div>
          <div class="ability-score">
            <div class="ability-name">DEXTERITY</div>
            <div class="ability-value">-1</div>
            <div class="ability-circle"></div>
          </div>
          <div class="ability-score">
            <div class="ability-name">CONSTITUTION</div>
            <div class="ability-value">+2</div>
            <div class="ability-circle"></div>
          </div>
          <div class="ability-score">
            <div class="ability-name">INTELLIGENCE</div>
            <div class="ability-value">0</div>
            <div class="ability-circle"></div>
          </div>
          <div class="ability-score">
            <div class="ability-name">WISDOM</div>
            <div class="ability-value">+1</div>
            <div class="ability-circle"></div>
          </div>
          <div class="ability-score">
            <div class="ability-name">CHARISMA</div>
            <div class="ability-value">+2</div>
            <div class="ability-circle"></div>
          </div>
        </div>
  
        <div class="middle-column">
          <div class="proficiency-box">
            <div class="prof-circle">2</div>
            <div class="prof-label">PROFICIENCY BONUS</div>
          </div>
  
          <div class="saving-throws">
            <h3>SAVING THROWS</h3>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+5</span>
              <span class="skill-name">Strength</span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">-1</span>
              <span class="skill-name">Dexterity</span>
            </div>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+4</span>
              <span class="skill-name">Constitution</span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">Intelligence</span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Wisdom</span>
            </div>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+4</span>
              <span class="skill-name">Charisma</span>
            </div>
          </div>
  
          <div class="skills">
            <h3>SKILLS</h3>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">-1</span>
              <span class="skill-name">Acrobatics <span class="skill-attr">(Dex)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Animal Handling <span class="skill-attr">(Wis)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">Arcana <span class="skill-attr">(Int)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+5</span>
              <span class="skill-name">Athletics <span class="skill-attr">(Str)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+2</span>
              <span class="skill-name">Deception <span class="skill-attr">(Cha)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">History <span class="skill-attr">(Int)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Insight <span class="skill-attr">(Wis)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+4</span>
              <span class="skill-name">Intimidation <span class="skill-attr">(Cha)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">Investigation <span class="skill-attr">(Int)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Medicine <span class="skill-attr">(Wis)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">Nature <span class="skill-attr">(Int)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Perception <span class="skill-attr">(Wis)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" checked />
              <span class="skill-mod">+4</span>
              <span class="skill-name">Performance <span class="skill-attr">(Cha)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+2</span>
              <span class="skill-name">Persuasion <span class="skill-attr">(Cha)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">0</span>
              <span class="skill-name">Religion <span class="skill-attr">(Int)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">-1</span>
              <span class="skill-name">Sleight of Hand <span class="skill-attr">(Dex)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">-1</span>
              <span class="skill-name">Stealth <span class="skill-attr">(Dex)</span></span>
            </div>
            <div class="skill-item">
              <input type="checkbox" />
              <span class="skill-mod">+1</span>
              <span class="skill-name">Survival <span class="skill-attr">(Wis)</span></span>
            </div>
          </div>
  
          <div class="passive-wisdom">
            <div class="passive-circle">13</div>
            <div class="passive-text">PASSIVE WISDOM (PERCEPTION)</div>
          </div>
        </div>
  
        <div class="combat-stats">
          <div class="combat-row">
            <div class="combat-stat armor-class">
              <div class="stat-value">17</div>
              <div class="stat-label">ARMOR CLASS</div>
            </div>
            <div class="combat-stat initiative">
              <div class="stat-value">-1</div>
              <div class="stat-label">INITIATIVE</div>
            </div>
            <div class="combat-stat speed">
              <div class="stat-value">30 feet</div>
              <div class="stat-label">SPEED</div>
            </div>
          </div>
  
          <div class="hit-points">
            <div class="hp-max">
              <div class="hp-label">Hit Point Maximum</div>
              <div class="hp-value">12</div>
            </div>
            <div class="current-hp">
              <div class="hp-label">CURRENT HIT POINTS</div>
              <input type="text" class="hp-input" />
            </div>
            <div class="temp-hp">
              <div class="hp-label">TEMPORARY HIT POINTS</div>
              <input type="text" class="hp-input" />
            </div>
          </div>
  
          <div class="hit-dice-death-saves">
            <div class="hit-dice">
              <div class="hd-row">
                <div class="hd-label">TOTAL</div>
                <div class="hd-value">1d10</div>
              </div>
              <div class="hd-label">HIT DICE</div>
              <input type="text" class="hd-remaining" />
            </div>
            <div class="death-saves">
              <div class="ds-label">DEATH SAVES</div>
              <div class="ds-row">
                <div class="ds-type">SUCCESSES</div>
                <div class="ds-circles">
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </div>
              <div class="ds-row">
                <div class="ds-type">FAILURES</div>
                <div class="ds-circles">
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
  
          <div class="attacks-spellcasting">
            <h3>ATTACKS & SPELLCASTING</h3>
            <table class="attacks-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ATK BONUS</th>
                  <th>DAMAGE/TYPE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Greatsword</td>
                  <td>+5</td>
                  <td>2d6+3 slashing</td>
                </tr>
                <tr>
                  <td>Javelin</td>
                  <td>+5</td>
                  <td>1d6+3 piercing</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div class="attack-notes">
              *You can throw a javelin 30 feet, or up to 120 feet with disadvantage on the attack.
            </div>
          </div>
        </div>
  
        <div class="personality-section">
          <div class="personality-box">
            <h3>PERSONALITY TRAITS</h3>
            <p>My flattery makes those I talk to feel wonderful and important. Also, I don't like to get dirty, and I need comfortable accommodations.</p>
          </div>
          <div class="personality-box">
            <h3>IDEALS</h3>
            <p>Responsibility. It is the duty of a noble to protect the common people, not bully them.</p>
          </div>
          <div class="personality-box">
            <h3>BONDS</h3>
            <p>My greatest is a family heirloom, and it's by far my most precious possession.</p>
          </div>
          <div class="personality-box">
            <h3>FLAWS</h3>
            <p>I have a hard time resisting the allure of wealth, especially gold. Wealth can help me restore my legacy.</p>
          </div>
        </div>
  
        <div class="features-traits">
          <h3>FEATURES & TRAITS</h3>
          <div class="features-content">
            <p><strong>Second Wind:</strong> You have a limited well of stamina you can draw on to protect yourself from harm. You can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
            <p><strong>Fighting Style (Defense):</strong> While you are wearing armor, you gain a +1 bonus to AC. This bonus is already included in your AC.</p>
            <p><strong>Position of Privilege:</strong> Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.</p>
          </div>
        </div>
  
        <div class="equipment-section">
          <h3>EQUIPMENT</h3>
          <div class="equipment-list">
            <p>Chain mail*, greatsave, 3 javelins, backpack, blanket, tinderbox, 2 days of rations, waterskin, set of fine clothes, signet ring, scroll of pedigree</p>
            <p>*While wearing this armor, you have disadvantage on Dexterity (Stealth) checks.</p>
          </div>
          <div class="currency">
            <div class="currency-item">
              <label>CP</label>
              <input type="text" value="" />
            </div>
            <div class="currency-item">
              <label>SP</label>
              <input type="text" value="" />
            </div>
            <div class="currency-item">
              <label>EP</label>
              <input type="text" value="" />
            </div>
            <div class="currency-item">
              <label>GP</label>
              <input type="text" value="25" />
            </div>
            <div class="currency-item">
              <label>PP</label>
              <input type="text" value="" />
            </div>
          </div>
        </div>
  
        <div class="proficiencies-languages">
          <h3>OTHER PROFICIENCIES & LANGUAGES</h3>
          <p>
            <strong>Proficiencies:</strong> All armor, shields, simple weapons, martial weapons, playing cards
          </p>
          <p>
            <strong>Languages:</strong> Common, Draconic, Dwarvish
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed for this static character sheet
  </script>
  
  <style>
  .dnd-sheet {
    font-family: 'Calibri', 'Arial', sans-serif;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color:rgb(33, 33, 71);
    color:#fff;
    border: 1px solid #ccc;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
  }
  
  .logo-area {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .logo-image {
    height: 60px;
    margin-right: 10px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  
  .character-header {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .header-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .header-field {
    flex: 1;
    margin: 0 5px;
    position: relative;
  }
  
  .header-field input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    padding: 5px 0;
    font-size: 16px;
  }
  
  .header-field label {
    font-size: 10px;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
  
  .field-value {
    border-bottom: 1px solid #000;
    padding: 5px 0;
    font-size: 16px;
  }
  
  .character-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .main-stats {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    .main-stats {
      grid-template-columns: 1fr;
    }
  }
  
  .ability-scores {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .ability-score {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    position: relative;
  }
  
  .ability-name {
    font-size: 12px;
    font-weight: bold;
  }
  
  .ability-value {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .ability-circle {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
  }
  
  .middle-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .proficiency-box {
    position: relative;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .prof-circle {
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto;
  }
  
  .prof-label {
    font-size: 10px;
    margin-top: 5px;
  }
  
  .saving-throws, .skills {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  
  .saving-throws h3, .skills h3 {
    text-align: center;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  
  .skill-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .skill-mod {
    width: 30px;
    text-align: center;
  }
  
  .skill-name {
    flex: 1;
  }
  
  .skill-attr {
    font-size: 10px;
    color: #666;
  }
  
  .passive-wisdom {
    position: relative;
    text-align: center;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  
  .passive-circle {
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto 5px;
  }
  
  .passive-text {
    font-size: 10px;
  }
  
  .combat-stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .combat-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .combat-stat {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    flex: 1;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: bold;
  }
  
  .stat-label {
    font-size: 10px;
  }
  
  .hit-points {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  
  .hp-max {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .hp-label {
    font-size: 12px;
  }
  
  .hp-value {
    font-weight: bold;
  }
  
  .current-hp, .temp-hp {
    margin-bottom: 10px;
  }
  
  .hp-input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 5px;
  }
  
  .hit-dice-death-saves {
    display: flex;
    gap: 10px;
  }
  
  .hit-dice, .death-saves {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    flex: 1;
  }
  
  .hd-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .hd-label {
    font-size: 12px;
    text-align: center;
  }
  
  .hd-remaining {
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    margin-top: 5px;
  }
  
  .ds-label {
    font-size: 12px;
    text-align: center;
    margin-bottom: 5px;
  }
  
  .ds-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .ds-type {
    font-size: 10px;
  }
  
  .ds-circles {
    display: flex;
    gap: 5px;
  }
  
  .attacks-spellcasting {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  
  .attacks-spellcasting h3 {
    text-align: center;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  
  .attacks-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  
  .attacks-table th, .attacks-table td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }
  
  .attack-notes {
    font-size: 12px;
    font-style: italic;
  }
  
  .personality-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
  }
  
  .personality-box {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  
  .personality-box h3 {
    text-align: center;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  
  .features-traits, .equipment-section, .proficiencies-languages {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
  }
  
  .features-traits h3, .equipment-section h3, .proficiencies-languages h3 {
    text-align: center;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
  }
  
  .features-content {
    font-size: 14px;
  }
  
  .equipment-list {
    margin-bottom: 20px;
  }
  
  .currency {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .currency-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .currency-item input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 5px;
  }
  
  @media (max-width: 768px) {
    .personality-section {
      grid-template-columns: 1fr;
    }
    
    .hit-dice-death-saves {
      flex-direction: column;
    }
    
    .combat-row {
      flex-direction: column;
    }
  }
  
  .hidden {
    display: none;
  }
  </style>