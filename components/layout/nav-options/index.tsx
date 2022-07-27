import { FC } from 'react';
import { FlatList } from 'react-native';

import NavOptionItem from '../../ui/nav-option-item';

import { mockData } from './nav-options.constants';

const NavOptions: FC = () => {
  return (
    <FlatList
      horizontal
      data={mockData}
      renderItem={({ item }) => <NavOptionItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NavOptions;
