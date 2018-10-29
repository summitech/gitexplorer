export const optionsFirst = [
  { value: 'cookRice', label: 'Cook Rice' },
  { value: 'boilWater', label: 'Boil Water' }
];

export const optionsSecond = {
  cookRice: [
    {
      value: 'addSalt',
      label: 'Add Salt',
      output: 'Food have cook with salt',
      usage: 'Put salt in rice'
    },
    {
      value: 'addSugar',
      label: 'Add Sugar',
      output: 'Food have cooked with sugar',
      usage: 'Put sugar in rice'
    },
    { value: 'addPepper', label: 'Add Pepper' }
  ],

  boilWater: [
    { value: 'lightFire', label: 'LightFire' },
    {
      value: 'placeKettle',
      label: 'Place Kettle',
      output: 'Water have boil',
      usage: 'pour water in kettle'
    },
    { value: 'start', label: 'Start' }
  ]
};

export const optionsThird = {
  addSalt: [
    {
      value: 'addSalt', label: 'Add Salt', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addSugar', label: 'Add Sugar', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addPepper', label: 'Add Pepper', output: 'Water have boil', usage: 'Water have boil'
    }
  ],

  addSugar: [
    {
      value: 'lightFire', label: 'LightFire', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'placeKettle',
      label: 'Place Kettle',
      output: 'Water have boil',
      usage: 'Water have boil'
    },
    {
      value: 'start', label: 'Start', output: 'Water have boil', usage: 'Water have boil'
    }
  ],

  addPepper: [
    {
      value: 'addSalt', label: 'Add Salt', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addSugar', label: 'Add Sugar', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addPepper', label: 'Add Pepper', output: 'Water have boil', usage: 'Water have boil'
    }
  ],

  lightFire: [
    {
      value: 'lightFire', label: 'LightFire', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'placeKettle',
      label: 'Place Kettle',
      output: 'Water have boil',
      usage: 'Water have boil'
    },
    {
      value: 'start', label: 'Start', output: 'Water have boil', usage: 'Water have boil'
    }
  ],
  placeKettle: [
    {
      value: 'addSalt', label: 'Add Salt', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addSugar', label: 'Add Sugar', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'addPepper', label: 'Add Pepper', output: 'Water have boil', usage: 'Water have boil'
    }
  ],

  start: [
    {
      value: 'lightFire', label: 'LightFire', output: 'Water have boil', usage: 'Water have boil'
    },
    {
      value: 'placeKettle',
      label: 'Place Kettle',
      output: 'Water have boil',
      usage: 'Water have boil'
    },
    {
      value: 'start', label: 'Start', output: 'Water have boil', usage: 'Water have boil'
    }
  ]
};
