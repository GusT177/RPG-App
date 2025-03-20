<template>
  <div class="dnd-wizard">
    <header class="wizard-header">
      <div class="progress-bar">
        <div class="progress-line" :style="{ width: progressWidth + '%' }"></div>
        <div class="progress-steps">
          <div
            class="progress-step"
            v-for="(step, index) in steps"
            :key="index"
            :class="{ 'active': currentStep === index, 'completed': currentStep > index }"
            @click="goToStep(index)"
          >
            {{ index + 1 }}
          </div>
        </div>
      </div>
      <h2>{{ steps[currentStep].title }}</h2>
    </header>

    <main class="wizard-content">
      <div v-if="currentStep === 0" class="step-content">
        <div class="form-group">
          <label for="characterName">Nome do Personagem</label>
          <input type="text" id="characterName" v-model="character.name" placeholder="Nome do seu personagem">
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="class">Classe</label>
            <select id="class" v-model="character.class">
              <option value="">Selecione uma classe</option>
              <option value="Bárbaro">Bárbaro</option>
              <option value="Bardo">Bardo</option>
              <option value="Bruxo">Bruxo</option>
              <option value="Clérigo">Clérigo</option>
              <option value="Druida">Druida</option>
              <option value="Guerreiro">Guerreiro</option>
              <option value="Ladino">Ladino</option>
              <option value="Mago">Mago</option>
              <option value="Monge">Monge</option>
              <option value="Paladino">Paladino</option>
              <option value="Patrulheiro">Patrulheiro</option>
              <option value="Feiticeiro">Feiticeiro</option>
            </select>
          </div>

          <div class="form-group">
            <label for="level">Nível</label>
            <select id="level" v-model="character.level">
              <option v-for="n in 20" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="race">Raça</label>
            <select id="race" v-model="character.race">
              <option value="">Selecione uma raça</option>
              <option value="Anão">Anão</option>
              <option value="Elfo">Elfo</option>
              <option value="Halfling">Halfling</option>
              <option value="Humano">Humano</option>
              <option value="Draconato">Draconato</option>
              <option value="Gnomo">Gnomo</option>
              <option value="Meio-Elfo">Meio-Elfo</option>
              <option value="Meio-Orc">Meio-Orc</option>
              <option value="Tiefling">Tiefling</option>
            </select>
          </div>

          <div class="form-group">
            <label for="background">Antecedente</label>
            <select id="background" v-model="character.background">
              <option value="">Selecione um antecedente</option>
              <option value="Acólito">Acólito</option>
              <option value="Artesão de Guilda">Artesão de Guilda</option>
              <option value="Artista">Artista</option>
              <option value="Charlatão">Charlatão</option>
              <option value="Criminoso">Criminoso</option>
              <option value="Eremita">Eremita</option>
              <option value="Forasteiro">Forasteiro</option>
              <option value="Herói do Povo">Herói do Povo</option>
              <option value="Marinheiro">Marinheiro</option>
              <option value="Nobre">Nobre</option>
              <option value="Órfão">Órfão</option>
              <option value="Sábio">Sábio</option>
              <option value="Soldado">Soldado</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="alignment">Alinhamento</label>
            <select id="alignment" v-model="character.alignment">
              <option value="">Selecione um alinhamento</option>
              <option value="Leal e Bom">Leal e Bom</option>
              <option value="Neutro e Bom">Neutro e Bom</option>
              <option value="Caótico e Bom">Caótico e Bom</option>
              <option value="Leal e Neutro">Leal e Neutro</option>
              <option value="Neutro">Neutro</option>
              <option value="Caótico e Neutro">Caótico e Neutro</option>
              <option value="Leal e Mau">Leal e Mau</option>
              <option value="Neutro e Mau">Neutro e Mau</option>
              <option value="Caótico e Mau">Caótico e Mau</option>
            </select>
          </div>

          <div class="form-group">
            <label for="playerName">Nome do Jogador</label>
            <input type="text" id="playerName" v-model="character.playerName" placeholder="Seu nome">
          </div>
        </div>

        <div class="form-group">
          <label for="experiencePoints">Pontos de Experiência</label>
          <input type="number" id="experiencePoints" v-model="character.experiencePoints" placeholder="0">
        </div>
      </div>

      <!-- Etapa 2: Atributos -->
      <div v-if="currentStep === 1" class="step-content">
        <p class="step-description">Defina os valores dos seus atributos principais. Estes valores determinam o que seu personagem é bom em fazer.</p>

        <div class="attributes-container">
          <div class="attribute-card" v-for="attr in attributes" :key="attr.key">
            <h3>{{ attr.name }}</h3>
            <div class="attribute-value">
              <button @click="decrementAttribute(attr.key)" :disabled="character.attributes[attr.key] <= 8">-</button>
              <span>{{ character.attributes[attr.key] }}</span>
              <button @click="incrementAttribute(attr.key)" :disabled="character.attributes[attr.key] >= 15 || remainingPoints <= 0">+</button>
            </div>
            <div class="attribute-modifier">
              Modificador: {{ calculateModifier(character.attributes[attr.key]) }}
            </div>
            <p class="attribute-description">{{ attr.description }}</p>
          </div>
        </div>

        <div class="points-remaining">
          <p>Pontos Restantes: <span>{{ remainingPoints }}</span></p>
          <p class="hint">Use o sistema de pontos para distribuir entre seus atributos. Cada atributo começa em 8 e pode ir até 15.</p>
        </div>
      </div>

      <!-- Etapa 3: Perícias e Proficiências -->
      <div v-if="currentStep === 2" class="step-content">
        <div class="proficiency-section">
          <h3>Bônus de Proficiência: +{{ calculateProficiencyBonus() }}</h3>
          <p>Baseado no seu nível {{ character.level }}</p>
        </div>

        <div class="skills-section">
          <h3>Perícias</h3>
          <p>Selecione as perícias em que seu personagem é proficiente:</p>

          <div class="skill-list">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <label :for="skill.key">
                <input
                  type="checkbox"
                  :id="skill.key"
                  v-model="character.skills[skill.key]"
                  :disabled="countSelectedSkills() >= maxSkills && !character.skills[skill.key]"
                >
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-attribute">({{ skill.attribute }})</span>
                <span class="skill-modifier">
                  {{ calculateSkillModifier(skill.attributeKey, character.skills[skill.key]) }}
                </span>
              </label>
            </div>
          </div>

          <p class="skill-counter">
            Perícias selecionadas: {{ countSelectedSkills() }}/{{ maxSkills }}
          </p>
        </div>

        <div class="saving-throws-section">
          <h3>Testes de Resistência</h3>
          <p>Baseado na sua classe, você é proficiente nos seguintes testes de resistência:</p>

          <div class="saving-throws-list">
            <div class="saving-throw-item" v-for="save in savingThrows" :key="save.key">
              <label :for="'save-'+save.key">
                <input
                  type="checkbox"
                  :id="'save-'+save.key"
                  v-model="character.savingThrows[save.key]"
                  :disabled="true"
                >
                <span class="save-name">{{ save.name }}</span>
                <span class="save-modifier">
                  {{ calculateSavingThrowModifier(save.key) }}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Etapa 4: Combate -->
      <div v-if="currentStep === 3" class="step-content">
        <div class="combat-stats">
          <div class="combat-stat-card">
            <h3>Classe de Armadura</h3>
            <div class="stat-value">{{ calculateArmorClass() }}</div>
            <p>Baseado na sua Destreza e equipamento</p>
          </div>

          <div class="combat-stat-card">
            <h3>Iniciativa</h3>
            <div class="stat-value">{{ calculateModifier(character.attributes.dexterity) }}</div>
            <p>Baseado no seu modificador de Destreza</p>
          </div>

          <div class="combat-stat-card">
            <h3>Deslocamento</h3>
            <div class="stat-value">9m</div>
            <p>Deslocamento base para a maioria das raças</p>
          </div>
        </div>

        <div class="hit-points-section">
          <h3>Pontos de Vida</h3>
          <div class="hit-points-row">
            <div class="form-group">
              <label for="maxHitPoints">Máximo de Pontos de Vida</label>
              <div class="hit-points-calc">
                <span>{{ calculateMaxHitPoints() }}</span>
                <p>Baseado na sua classe e Constituição</p>
              </div>
            </div>

            <div class="form-group">
              <label for="currentHitPoints">Pontos de Vida Atuais</label>
              <input type="number" id="currentHitPoints" v-model="character.currentHitPoints">
            </div>

            <div class="form-group">
              <label for="temporaryHitPoints">Pontos de Vida Temporários</label>
              <input type="number" id="temporaryHitPoints" v-model="character.temporaryHitPoints">
            </div>
          </div>

          <div class="hit-dice-section">
            <h3>Dados de Vida</h3>
            <div class="hit-dice-display">
              {{ character.level }}{{ getHitDiceByClass() }}
            </div>
          </div>
        </div>

        <div class="attacks-section">
          <h3>Ataques</h3>
          <table class="attacks-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Bônus de Ataque</th>
                <th>Dano/Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(attack, index) in character.attacks" :key="index">
                <td>
                  <input type="text" v-model="attack.name" placeholder="Nome da arma">
                </td>
                <td>
                  <input type="text" v-model="attack.attackBonus" placeholder="+0">
                </td>
                <td>
                  <input type="text" v-model="attack.damageType" placeholder="1d8 cortante">
                </td>
              </tr>
            </tbody>
          </table>
          <button class="add-attack-btn" @click="addAttack">+ Adicionar Ataque</button>
        </div>
      </div>

      <!-- Etapa 5: Equipamento e Moedas -->
      <div v-if="currentStep === 4" class="step-content">
        <div class="equipment-section">
          <h3>Equipamento</h3>
          <div class="equipment-list">
            <div v-for="(item, index) in character.equipment" :key="index" class="equipment-item">
              <input type="text" v-model="item.name" placeholder="Nome do item">
              <input type="number" v-model="item.quantity" placeholder="Qtd" min="1" class="quantity-input">
              <button class="remove-btn" @click="removeEquipment(index)">×</button>
            </div>
            <button class="add-equipment-btn" @click="addEquipment">+ Adicionar Item</button>
          </div>
        </div>

        <div class="currency-section">
          <h3>Moedas</h3>
          <div class="currency-grid">
            <div class="currency-item">
              <label for="copper">Peças de Cobre (PC)</label>
              <input type="number" id="copper" v-model="character.currency.copper" min="0">
            </div>
            <div class="currency-item">
              <label for="silver">Peças de Prata (PP)</label>
              <input type="number" id="silver" v-model="character.currency.silver" min="0">
            </div>
            <div class="currency-item">
              <label for="electrum">Peças de Electrum (PE)</label>
              <input type="number" id="electrum" v-model="character.currency.electrum" min="0">
            </div>
            <div class="currency-item">
              <label for="gold">Peças de Ouro (PO)</label>
              <input type="number" id="gold" v-model="character.currency.gold" min="0">
            </div>
            <div class="currency-item">
              <label for="platinum">Peças de Platina (PL)</label>
              <input type="number" id="platinum" v-model="character.currency.platinum" min="0">
            </div>
          </div>
        </div>
      </div>

      <!-- Etapa 6: Características e Traços -->
      <div v-if="currentStep === 5" class="step-content">
        <div class="personality-section">
          <h3>Traços de Personalidade</h3>
          <textarea
            v-model="character.personalityTraits"
            placeholder="Descreva os traços de personalidade do seu personagem..."
            rows="3"
          ></textarea>

          <h3>Ideais</h3>
          <textarea
            v-model="character.ideals"
            placeholder="Quais são os ideais que motivam seu personagem?"
            rows="3"
          ></textarea>

          <h3>Vínculos</h3>
          <textarea
            v-model="character.bonds"
            placeholder="Descreva os vínculos do seu personagem com pessoas, lugares ou objetos..."
            rows="3"
          ></textarea>

          <h3>Fraquezas</h3>
          <textarea
            v-model="character.flaws"
            placeholder="Quais são as fraquezas ou defeitos do seu personagem?"
            rows="3"
          ></textarea>
        </div>

        <div class="features-section">
          <h3>Características e Traços</h3>
          <p>Adicione características de classe, raça, antecedente ou outras habilidades especiais:</p>

          <div class="features-list">
            <div v-for="(feature, index) in character.features" :key="index" class="feature-item">
              <div class="feature-header">
                <input type="text" v-model="feature.name" placeholder="Nome da característica">
                <button class="remove-btn" @click="removeFeature(index)">×</button>
              </div>
              <textarea
                v-model="feature.description"
                placeholder="Descrição da característica..."
                rows="2"
              ></textarea>
            </div>
            <button class="add-feature-btn" @click="addFeature">+ Adicionar Característica</button>
          </div>
        </div>
      </div>

      <!-- Etapa 7: Revisão Final -->
      <div v-if="currentStep === 6" class="step-content review-step">
        <h3>Revisão do Personagem</h3>
        <p>Revise as informações do seu personagem antes de finalizar:</p>

        <div class="review-card">
          <h4>Informações Básicas</h4>
          <div class="review-grid">
            <div class="review-item">
              <span class="review-label">Nome:</span>
              <span class="review-value">{{ character.name || 'Não definido' }}</span>
            </div>
            <div class="review-item">
              <span class="review-label">Classe/Nível:</span>
              <span class="review-value">{{ character.class || 'Não definido' }} {{ character.level }}</span>
            </div>
            <div class="review-item">
              <span class="review-label">Raça:</span>
              <span class="review-value">{{ character.race || 'Não definido' }}</span>
            </div>
            <div class="review-item">
              <span class="review-label">Antecedente:</span>
              <span class="review-value">{{ character.background || 'Não definido' }}</span>
            </div>
            <div class="review-item">
              <span class="review-label">Alinhamento:</span>
              <span class="review-value">{{ character.alignment || 'Não definido' }}</span>
            </div>
          </div>
        </div>

        <div class="review-card">
          <h4>Atributos</h4>
          <div class="review-attributes">
            <div class="review-attribute" v-for="attr in attributes" :key="attr.key">
              <span class="attr-name">{{ attr.name }}</span>
              <span class="attr-value">{{ character.attributes[attr.key] }}</span>
              <span class="attr-mod">({{ calculateModifier(character.attributes[attr.key]) }})</span>
            </div>
          </div>
        </div>

        <div class="review-card">
          <h4>Combate</h4>
          <div class="review-combat">
            <div class="review-combat-stat">
              <span class="combat-stat-name">CA</span>
              <span class="combat-stat-value">{{ calculateArmorClass() }}</span>
            </div>
            <div class="review-combat-stat">
              <span class="combat-stat-name">Iniciativa</span>
              <span class="combat-stat-value">{{ calculateModifier(character.attributes.dexterity) }}</span>
            </div>
            <div class="review-combat-stat">
              <span class="combat-stat-name">Deslocamento</span>
              <span class="combat-stat-value">9m</span>
            </div>
            <div class="review-combat-stat">
              <span class="combat-stat-name">PV Máximos</span>
              <span class="combat-stat-value">{{ calculateMaxHitPoints() }}</span>
            </div>
          </div>
        </div>

        <div class="review-actions">
          <button class="finish-btn" @click="finishCharacter">Finalizar Personagem</button>
          <button class="edit-btn" @click="currentStep = 0">Editar do Início</button>
        </div>
      </div>
    </main>

    <div class="wizard-footer">
      <button
        v-if="currentStep > 0"
        class="nav-btn prev-btn"
        @click="prevStep"
      >
        Anterior
      </button>
      <button
        v-if="currentStep < steps.length - 1"
        class="nav-btn next-btn"
        @click="nextStep"
        :disabled="!canProceed"
      >
        Próximo
      </button>
    </div>

    <!-- Modal de Personagem Finalizado -->
    <div class="modal" v-if="showCompletionModal">
      <div class="modal-content">
        <h2>Personagem Criado com Sucesso!</h2>
        <p>Seu personagem <strong>{{ character.name }}</strong> foi criado com sucesso.</p>
        <p>Você pode agora:</p>
        <div class="modal-actions">
          <button class="modal-btn primary" @click="downloadCharacter">Baixar Ficha (JSON)</button>
          <button class="modal-btn" @click="printCharacter">Imprimir Ficha</button>
          <button class="modal-btn" @click="resetCharacter">Criar Novo Personagem</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Definição das etapas do wizard
const steps = [
  { title: "Informações Básicas", required: ['name', 'class', 'level', 'race'] },
  { title: "Atributos", required: [] },
  { title: "Perícias e Proficiências", required: [] },
  { title: "Combate", required: [] },
  { title: "Equipamento", required: [] },
  { title: "Características e Traços", required: [] },
  { title: "Revisão Final", required: [] }
];

// Estado atual
const currentStep = ref(0);
const showCompletionModal = ref(false);

// Definição dos atributos
const attributes = [
  { key: 'strength', name: 'Força', description: 'Força física, capacidade atlética e poder bruto.' },
  { key: 'dexterity', name: 'Destreza', description: 'Agilidade, reflexos, equilíbrio e coordenação.' },
  { key: 'constitution', name: 'Constituição', description: 'Saúde, resistência e vigor físico.' },
  { key: 'intelligence', name: 'Inteligência', description: 'Raciocínio, memória e capacidade de dedução.' },
  { key: 'wisdom', name: 'Sabedoria', description: 'Percepção, intuição e força de vontade.' },
  { key: 'charisma', name: 'Carisma', description: 'Força de personalidade, persuasão e liderança.' }
];

// Definição das perícias
const skills = [
  { key: 'acrobatics', name: 'Acrobacia', attribute: 'Des', attributeKey: 'dexterity' },
  { key: 'animalHandling', name: 'Adestrar Animais', attribute: 'Sab', attributeKey: 'wisdom' },
  { key: 'arcana', name: 'Arcanismo', attribute: 'Int', attributeKey: 'intelligence' },
  { key: 'athletics', name: 'Atletismo', attribute: 'For', attributeKey: 'strength' },
  { key: 'deception', name: 'Enganação', attribute: 'Car', attributeKey: 'charisma' },
  { key: 'history', name: 'História', attribute: 'Int', attributeKey: 'intelligence' },
  { key: 'insight', name: 'Intuição', attribute: 'Sab', attributeKey: 'wisdom' },
  { key: 'intimidation', name: 'Intimidação', attribute: 'Car', attributeKey: 'charisma' },
  { key: 'investigation', name: 'Investigação', attribute: 'Int', attributeKey: 'intelligence' },
  { key: 'medicine', name: 'Medicina', attribute: 'Sab', attributeKey: 'wisdom' },
  { key: 'nature', name: 'Natureza', attribute: 'Int', attributeKey: 'intelligence' },
  { key: 'perception', name: 'Percepção', attribute: 'Sab', attributeKey: 'wisdom' },
  { key: 'performance', name: 'Atuação', attribute: 'Car', attributeKey: 'charisma' },
  { key: 'persuasion', name: 'Persuasão', attribute: 'Car', attributeKey: 'charisma' },
  { key: 'religion', name: 'Religião', attribute: 'Int', attributeKey: 'intelligence' },
  { key: 'sleightOfHand', name: 'Prestidigitação', attribute: 'Des', attributeKey: 'dexterity' },
  { key: 'stealth', name: 'Furtividade', attribute: 'Des', attributeKey: 'dexterity' },
  { key: 'survival', name: 'Sobrevivência', attribute: 'Sab', attributeKey: 'wisdom' }
];

// Definição dos testes de resistência
const savingThrows = [
  { key: 'strength', name: 'Força' },
  { key: 'dexterity', name: 'Destreza' },
  { key: 'constitution', name: 'Constituição' },
  { key: 'intelligence', name: 'Inteligência' },
  { key: 'wisdom', name: 'Sabedoria' },
  { key: 'charisma', name: 'Carisma' }
];

// Objeto do personagem
const character = ref({
  name: '',
  class: '',
  level: 1,
  race: '',
  background: '',
  alignment: '',
  playerName: '',
  experiencePoints: 0,
  attributes: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  },
  skills: {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false
  },
  savingThrows: {
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false
  },
  armorClass: 10,
  currentHitPoints: 0,
  temporaryHitPoints: 0,
  attacks: [
    { name: '', attackBonus: '', damageType: '' }
  ],
  equipment: [
    { name: '', quantity: 1 }
  ],
  currency: {
    copper: 0,
    silver: 0,
    electrum: 0,
    gold: 0,
    platinum: 0
  },
  personalityTraits: '',
  ideals: '',
  bonds: '',
  flaws: '',
  features: [
    { name: '', description: '' }
  ]
});

// Pontos disponíveis para atributos
const totalAttributePoints = 27;
const baseAttributeCost = 8;

// Calcula pontos restantes para atributos
const remainingPoints = computed(() => {
  let used = 0;
  for (const key in character.value.attributes) {
    const value = character.value.attributes[key];
    used += value - baseAttributeCost;
  }
  return totalAttributePoints - used;
});

// Número máximo de perícias que podem ser selecionadas
const maxSkills = computed(() => {
  // O número de perícias varia de acordo com a classe e antecedente
  // Esta é uma simplificação
  switch (character.value.class) {
    case 'Bardo': return 3;
    case 'Ladino': return 4;
    case 'Ranger': return 3;
    default: return 2;
  }
});

// Calcula o modificador de um atributo
const calculateModifier = (value) => {
  const mod = Math.floor((value - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
};

// Calcula o bônus de proficiência baseado no nível
const calculateProficiencyBonus = () => {
  const level = character.value.level;
  return Math.floor((level - 1) / 4) + 2;
};

// Calcula o modificador de uma perícia
const calculateSkillModifier = (attributeKey, isProficient) => {
  const attrMod = Math.floor((character.value.attributes[attributeKey] - 10) / 2);
  const profBonus = isProficient ? calculateProficiencyBonus() : 0;
  const total = attrMod + profBonus;
  return total >= 0 ? `+${total}` : `${total}`;
};

// Calcula o modificador de um teste de resistência
const calculateSavingThrowModifier = (attributeKey) => {
  const attrMod = Math.floor((character.value.attributes[attributeKey] - 10) / 2);
  const profBonus = character.value.savingThrows[attributeKey] ? calculateProficiencyBonus() : 0;
  const total = attrMod + profBonus;
  return total >= 0 ? `+${total}` : `${total}`;
};

// Calcula a classe de armadura
const calculateArmorClass = () => {
  // Simplificação: CA base 10 + mod de destreza
  const dexMod = Math.floor((character.value.attributes.dexterity - 10) / 2);
  return 10 + dexMod;
};

// Calcula os pontos de vida máximos
const calculateMaxHitPoints = () => {
  const conMod = Math.floor((character.value.attributes.constitution - 10) / 2);
  let hitDice = 8; // Padrão

  // Determina o dado de vida baseado na classe
  switch (character.value.class) {
    case 'Bárbaro': hitDice = 12; break;
    case 'Guerreiro':
    case 'Paladino':
    case 'Patrulheiro': hitDice = 10; break;
    case 'Bruxo':
    case 'Bardo':
    case 'Clérigo':
    case 'Druida':
    case 'Monge': hitDice = 8; break;
    case 'Feiticeiro':
    case 'Mago':
    case 'Ladino': hitDice = 6; break;
  }

  // No primeiro nível, você recebe o máximo do dado de vida + mod de constituição
  // Para cada nível adicional, a média do dado + mod de constituição
  const firstLevelHP = hitDice + conMod;
  const additionalLevelsHP = (character.value.level - 1) * (Math.floor(hitDice / 2) + 1 + conMod);

  return firstLevelHP + additionalLevelsHP;
};

// Retorna o tipo de dado de vida baseado na classe
const getHitDiceByClass = () => {
  switch (character.value.class) {
    case 'Bárbaro': return 'd12';
    case 'Guerreiro':
    case 'Paladino':
    case 'Patrulheiro': return 'd10';
    case 'Bruxo':
    case 'Bardo':
    case 'Clérigo':
    case 'Druida':
    case 'Monge': return 'd8';
    case 'Feiticeiro':
    case 'Mago':
    case 'Ladino': return 'd6';
    default: return 'd8';
  }
};

// Conta o número de perícias selecionadas
const countSelectedSkills = () => {
  return Object.values(character.value.skills).filter(Boolean).length;
};

// Incrementa um atributo
const incrementAttribute = (key) => {
  if (character.value.attributes[key] < 15 && remainingPoints.value > 0) {
    character.value.attributes[key]++;
  }
};

// Decrementa um atributo
const decrementAttribute = (key) => {
  if (character.value.attributes[key] > 8) {
    character.value.attributes[key]--;
  }
};

// Adiciona um novo ataque
const addAttack = () => {
  character.value.attacks.push({ name: '', attackBonus: '', damageType: '' });
};

// Adiciona um novo item ao equipamento
const addEquipment = () => {
  character.value.equipment.push({ name: '', quantity: 1 });
};

// Remove um item do equipamento
const removeEquipment = (index) => {
  character.value.equipment.splice(index, 1);
};

// Adiciona uma nova característica
const addFeature = () => {
  character.value.features.push({ name: '', description: '' });
};

// Remove uma característica
const removeFeature = (index) => {
  character.value.features.splice(index, 1);
};

// Navega para a próxima etapa
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

// Navega para a etapa anterior
const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

// Navega para uma etapa específica
const goToStep = (step) => {
  if (step < currentStep.value || canProceed.value) {
    currentStep.value = step;
  }
};

// Finaliza a criação do personagem
const finishCharacter = () => {
  showCompletionModal.value = true;
};

// Baixa os dados do personagem como JSON
const downloadCharacter = () => {
  const dataStr = JSON.stringify(character.value, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  const exportFileDefaultName = `${character.value.name || 'personagem'}_dnd.json`;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

// Imprime a ficha do personagem
const printCharacter = () => {
  window.print();
};

// Reseta o personagem para criar um novo
const resetCharacter = () => {
  // Reseta todos os campos para seus valores padrão
  character.value = {
    name: '',
    class: '',
    level: 1,
    race: '',
    background: '',
    alignment: '',
    playerName: '',
    experiencePoints: 0,
    attributes: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    },
    skills: Object.fromEntries(skills.map(skill => [skill.key, false])),
    savingThrows: Object.fromEntries(savingThrows.map(save => [save.key, false])),
    armorClass: 10,
    currentHitPoints: 0,
    temporaryHitPoints: 0,
    attacks: [{ name: '', attackBonus: '', damageType: '' }],
    equipment: [{ name: '', quantity: 1 }],
    currency: { copper: 0, silver: 0, electrum: 0, gold: 0, platinum: 0 },
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    features: [{ name: '', description: '' }]
  };

  currentStep.value = 0;
  showCompletionModal.value = false;
};

// Verifica se pode prosseguir para a próxima etapa
const canProceed = computed(() => {
  const requiredFields = steps[currentStep.value].required;
  if (requiredFields.length === 0) return true;

  return requiredFields.every(field => {
    return character.value[field] !== '' && character.value[field] !== null && character.value[field] !== undefined;
  });
});

// Calcula a largura da barra de progresso
const progressWidth = computed(() => {
  return (currentStep.value / (steps.length - 1)) * 100;
});

// Configura os testes de resistência baseados na classe
watch(() => character.value.class, (newClass) => {
  // Reseta todos os testes de resistência
  for (const key in character.value.savingThrows) {
    character.value.savingThrows[key] = false;
  }

  // Define os testes de resistência baseados na classe
  switch (newClass) {
    case 'Bárbaro':
      character.value.savingThrows.strength = true;
      character.value.savingThrows.constitution = true;
      break;
    case 'Bardo':
      character.value.savingThrows.dexterity = true;
      character.value.savingThrows.charisma = true;
      break;
    case 'Clérigo':
      character.value.savingThrows.wisdom = true;
      character.value.savingThrows.charisma = true;
      break;
    case 'Druida':
      character.value.savingThrows.intelligence = true;
      character.value.savingThrows.wisdom = true;
      break;
    case 'Guerreiro':
      character.value.savingThrows.strength = true;
      character.value.savingThrows.constitution = true;
      break;
    case 'Monge':
      character.value.savingThrows.strength = true;
      character.value.savingThrows.dexterity = true;
      break;
    case 'Paladino':
      character.value.savingThrows.wisdom = true;
      character.value.savingThrows.charisma = true;
      break;
    case 'Patrulheiro':
      character.value.savingThrows.strength = true;
      character.value.savingThrows.dexterity = true;
      break;
    case 'Ladino':
      character.value.savingThrows.dexterity = true;
      character.value.savingThrows.intelligence = true;
      break;
    case 'Feiticeiro':
      character.value.savingThrows.constitution = true;
      character.value.savingThrows.charisma = true;
      break;
    case 'Bruxo':
      character.value.savingThrows.wisdom = true;
      character.value.savingThrows.charisma = true;
      break;
    case 'Mago':
      character.value.savingThrows.intelligence = true;
      character.value.savingThrows.wisdom = true;
      break;
  }
});
</script>

<style scoped>
.dnd-wizard {
  font-family: 'MedievalSharp', cursive;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wizard-header {
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.wizard-header h1 {
  font-size: 2.5rem;
  color: white;
  margin: 0;
}

.wizard-header h2 {
  font-size: 1.8rem;
  color: white;
  margin: 0;
}

.progress-bar {
  width: 100%;
  max-width: 500px;
  position: relative;
  padding: 0 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-steps {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.progress-step {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgb(49, 49, 102);
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid rgb(64, 64, 121);
  transition: all 0.3s ease;
  font-size: 12px;
  position: relative;
  z-index: 3;
}

.progress-line {
  position: absolute;
  height: 2px;
  background-color: rgb(64, 64, 121);
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 1;
}

.progress-step.active {
  background-color: rgb(64, 64, 121);
  color: white;
  transform: scale(1.1);
}

.progress-step.completed {
  background-color: rgb(33, 33, 71);
  color: white;
  border-color: rgb(64, 64, 121);
}

.wizard-content {
  flex: 1;
  margin-bottom: 30px;
}

.step-content {
  background-color: rgb(33, 33, 71);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.step-description {
  margin-bottom: 20px;
  color: #e0e0e0;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: white;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #4a4a8c;
  border-radius: 4px;
  font-size: 16px;
  background-color: rgb(49, 49, 102);
  color: white;
}

.form-group input::placeholder {
  color: #a0a0a0;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1;
}

.attributes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.attribute-card {
  background-color: rgb(49, 49, 102);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.attribute-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: white;
}

.attribute-value {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.attribute-value button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: rgb(64, 64, 121);
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.attribute-value button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.attribute-value span {
  color: white;
}

.attribute-modifier {
  font-weight: bold;
  color: #e0e0e0;
  margin-bottom: 10px;
}

.attribute-description {
  font-size: 14px;
  color: #a0a0a0;
}

.points-remaining {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: rgb(64, 64, 121);
  border-radius: 4px;
  color: white;
}

.points-remaining span {
  font-weight: bold;
  color: #2e7d32;
}

.points-remaining .hint {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.proficiency-section {
  background-color: rgb(49, 49, 102);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
}

.proficiency-section h3 {
  margin-top: 0;
  color: #d32f2f;
}

.skills-section, .saving-throws-section {
  display: grid;
  gap: 1rem;
  background-color: rbg(49, 49, 102);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.skills-section h3, .saving-throws-section h3 {
  background-color: rgb(49, 49, 102);
  padding: 0.5rem;
  color: #d32f2f;
}

.skill-list, .saving-throws-list {
  display: grid;
  background-color: rgb(49, 49, 102);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.skill-item label, .saving-throw-item label {
  display: flex;
  background-color: rgb(64, 64k, 121);
  align-items: center;
  cursor: pointer;
}

.skill-name, .save-name {
  margin-left: 5px;
}

.skill-attribute {
  color: #666;
  font-size: 12px;
  margin-left: 5px;
}

.skill-modifier, .save-modifier {
  margin-left: auto;
  font-weight: bold;
}

.skill-counter {
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

.combat-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.combat-stat-card {
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  gap: 1rem;
}

.combat-stat-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #d32f2f;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.hit-points-section {
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hit-points-section h3 {
  margin-top: 0;
  color: #d32f2f;
}

.hit-points-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.hit-points-calc {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hit-points-calc span {
  font-size: 20px;
  font-weight: bold;
}

.hit-points-calc p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.hit-dice-section {
  margin-top: 20px;
}

.hit-dice-section h3 {
  margin-top: 0;
  color: #d32f2f;
}

.hit-dice-display {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

.attacks-section {
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.attacks-section h3 {
  color: #d32f2f;
}

.attacks-table {
  width: 100%;
  border-collapse: collapse;
}

.attacks-table th, .attacks-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.attacks-table input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-attack-btn {
  background-color: rgb(64, 64, 121);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.equipment-section {
  gap: 1rem;
  border-radius: 8px;
  background-color: rgb(49, 49, 102);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.equipment-section h3 {
  margin: 1rem;
  color: #d32f2f;
}

.equipment-item {
  display: flex;
  gap: 10px;
  align-items: center;
}

.equipment-item input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.quantity-input {
  width: 70px !important;
}

.remove-btn {
  background-color: rgb(33, 33, 71);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-equipment-btn {
  background-color: rgb(64, 64, 121);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.currency-section {
  gap: 1rem;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgb(49, 49, 102);
}

.currency-section h3 {
  margin-top: 0;
  color: #d32f2f;
}

.currency-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.currency-item {
  text-align: center;
}

.currency-item label {
  display: block;
  margin-bottom: 5px;
}

.currency-item input {
  width: 80px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.personality-section {
  margin-bottom: 1rem;
  background-color: rgb(49, 49, 102);
  padding: 1rem;
}

.personality-section h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #d32f2f;
}

.personality-section textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.features-section {
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.features-section h3 {
  margin-top: 0;
  color: #d32f2f;
}

.feature-item {
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.feature-header input {
  flex: 1;
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-feature-btn {
  background-color: rgb(64, 64, 121);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.review-step h3 {
  margin-top: 0;
  color: #d32f2f;
}

.review-card {
  background-color: rgb(49, 49, 102);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  color: white;
}

.review-card h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: white;
  border-bottom: 1px solid rgb(64, 64, 121);
  padding-bottom: 5px;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.review-item {
  margin-bottom: 10px;
}

.review-label {
  font-weight: bold;
  color: #e0e0e0;
}

.review-value {
  margin-left: 5px;
  color: white;
}

.review-attributes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  text-align: center;
}

.review-attribute {
  display: flex;
  flex-direction: column;
}

.attr-name {
  font-weight: bold;
  color: #d32f2f;
}

.attr-value {
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
}

.attr-mod {
  color: #666;
}

.review-combat {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  text-align: center;
}

.review-combat-stat {
  display: flex;
  flex-direction: column;
}

.combat-stat-name {
  font-weight: bold;
  color: #d32f2f;
}

.combat-stat-value {
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
}

.review-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.finish-btn {
  background-color: rgb(64, 64, 121);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.edit-btn {
  background-color: rgb(33, 33, 71);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.wizard-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 20px;
}

.nav-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: rgb(64, 64, 121);
  color: white;
}

.prev-btn {
  background-color: #f5f5f5;
  color: #333;
}

.next-btn {
  background-color: #d32f2f;
  color: white;
}

.next-btn:disabled {
  background-color: rgb(33, 33, 71);
  color: #666;
  cursor: not-allowed;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: rgb(33, 33, 71);
  color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.modal-content h2 {
  margin-top: 0;
  color: #4caf50;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: rgb(64, 64, 121);
  color: white;
}

.modal-btn.primary {
  background-color: rgb(33, 33, 71);
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 10px;
  }

  .review-actions {
    flex-direction: column;
  }

  .modal-content {
    margin: 0 20px;
  }
}

@media print {
  .wizard-header, .wizard-footer, .modal {
    display: none;
  }

  .dnd-wizard {
    padding: 0;
    background-color: white;
    color: black;
  }

  .step-content {
    display: flex;
    box-shadow: none;
    background-color: rgb(33, 33, 71);
  }


}
</style>
