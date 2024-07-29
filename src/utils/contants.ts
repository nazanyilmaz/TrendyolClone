import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const categories: any = [
  {
    id: 1,
    title: 'Woman',
  },
  {
    id: 2,
    title: 'Man',
  },
  {
    id: 3,
    title: 'Fashion',
  },
  {
    id: 4,
    title: 'Accessory',
  },
  {
    id: 5,
    title: 'Home Decor',
  },
];
export {width, height, categories};
