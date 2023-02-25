type User = {
  firstName: string;
  secondName: string;
};

export type Problem = {
  date: Date;
  problems: number;
};

export const user: User = {
  firstName: 'Anastasiya',
  secondName: 'Saydazimova',
};

export type Option = {
  name: string;
  values: number[];
};

export type Property = {
  provider: string;
  options: Option[];
};

export type Characteristic = {
  name: string;
  properties: Property[];
};

// https://api.npoint.io/1ef77a97bf23acc548e2
export const characteristics: Characteristic[] = [
  {
    name: 'Покрытие',
    properties: [
      {
        provider: 'МТС',
        options: [
          {
            name: '3G',
            values: [0.1, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.2, 0.1, 0.1, 0.1, 0.4, 0.3, 0.5, 0.5, 0.5, 0.2],
          },
          {
            name: '2G/3G/4G',
            values: [0.6, 0.2, 0.3, 0.3, 0.2, 0.9, 0.9, 0.4, 0.2, 0.4],
          },
        ],
      },
      {
        provider: 'МФ',
        options: [
          {
            name: '3G',
            values: [0.3, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.4, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
        ],
      },
    ],
  },
  {
    name: 'Качество',
    properties: [
      {
        provider: 'МТС',
        options: [
          {
            name: '3G',
            values: [0.6, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.7, 0.2, 0.1, 0.3, 0.6, 0.7, 0.6, 0.6, 0.9, 0.5],
          },
          {
            name: '2G/3G/4G',
            values: [0.8, 0.2, 0.6, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
        ],
      },
      {
        provider: 'МФ',
        options: [
          {
            name: '3G',
            values: [0.9, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.1, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
        ],
      },
    ],
  },
  {
    name: 'Скорость UL/DL',
    properties: [
      {
        provider: 'МТС',
        options: [
          {
            name: '3G',
            values: [0.2, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.3, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '2G/3G/4G',
            values: [0.4, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
        ],
      },
      {
        provider: 'МФ',
        options: [
          {
            name: '3G',
            values: [0.1, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
          {
            name: '4G',
            values: [0.1, 0.2, 0.1, 0.3, 0.5, 0.7, 0.8, 0.6, 0.9, 0.5],
          },
        ],
      },
    ],
  },
];
