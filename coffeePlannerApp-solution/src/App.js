import CoffeePlanner from './components/CoffeePlanner'

import './App.css'

export const coffeePlannerList = [
  {
    id: 0,
    questionType: 'DRINK_TYPE',
    questionTitle: 'How do you drink your coffee?',
    optionsList: [
      {
        id: 0,
        optionTitle: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers.',
      },
      {
        id: 1,
        optionTitle: 'Filter',
        description:
          'For pour or drip methods like Aeropress, Chemex, and V60.',
      },
      {
        id: 2,
        optionTitle: 'Espresso',
        description:
          'Dense and finely ground beans for an intense, flavorful experience.',
      },
    ],
  },
  {
    id: 1,
    questionType: 'COFFEE_TYPE',
    questionTitle: 'What type of coffee?',
    optionsList: [
      {
        id: 3,
        optionTitle: 'Single Origins',
        description:
          'Distinct, high quality coffee from a specific family-owned farm.',
      },
      {
        id: 4,
        optionTitle: 'Blended',
        description:
          'Combination of two or three dark roasted beans of organic coffees.',
      },
      {
        id: 5,
        optionTitle: 'Decaf',
        description:
          'Just like regular coffee, except the caffeine has been removed.',
      },
    ],
  },
  {
    id: 2,
    questionType: 'QUANTITY',
    questionTitle: 'How much would you like?',
    optionsList: [
      {
        id: 6,
        optionTitle: '250 gms',
        description: 'Perfect for a solo drinker. Yields about 12.',
      },
      {
        id: 7,
        optionTitle: '500 gms',
        description:
          'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        id: 8,
        optionTitle: '1000 gms',
        description:
          'Perfect for officers and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    id: 3,
    questionType: 'GRIND_TYPE',
    questionTitle: 'Want us to grind them?',
    optionsList: [
      {
        id: 9,
        optionTitle: 'Coarse',
        description: 'This grind size is ideal for French Press brewing.',
      },
      {
        id: 10,
        optionTitle: 'Medium',
        description: 'A medium grind is for a regular cup of drip coffee.',
      },
      {
        id: 11,
        optionTitle: 'Fine',
        description:
          'This grind is great for espresso. It has a consistency like table salt.',
      },
    ],
  },
  {
    id: 4,
    questionType: 'DELIVER_TYPE',
    questionTitle: 'How often should we deliver?',
    optionsList: [
      {
        id: 12,
        optionTitle: 'Every week',
        description: '$14.00 per shipment. Includes free first-class shipping.',
      },
      {
        id: 13,
        optionTitle: 'Every 2 weeks',
        description: '$17.25 per shipment. Includes free priority shipping.',
      },
      {
        id: 14,
        optionTitle: 'Every month',
        description: '$22.50 per shipment. Includes free priority shipping.',
      },
    ],
  },
]

const App = () => <CoffeePlanner coffeePlannerList={coffeePlannerList} />

export default App
