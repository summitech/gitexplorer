export const secondaryOptions = {

  initialize: [
    {
      value: 'addSalt',
      label: 'Add Salt',
      output: 'Food have cook with salt',
      usage: 'Put salt in rice'
    },
    {
      value: 'addSugar',
      label: 'Add Sugar',
      output: 'Food have cooked \nwith sugar',
      usage: 'Put sugar in rice'
    },
    { value: 'addPepper', label: 'Add Pepper' }
  ],

  reset: [
    { value: 'lightFire', label: 'LightFire' },
    {
      value: 'placeKettle',
      label: 'Place Kettle',
      output: 'Water is boiling',
      usage: 'pour water in kettle'
    },
    { value: 'start', label: 'Start' }
  ]
};
