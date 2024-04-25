import { MantineProvider, Text } from '@mantine/core';
import { HeaderAction } from './Components/Header/Header';
import { link } from 'fs';


const lin = [
  {
    link: '/vacancies', 
    label: 'Поиск вакансий',
  },
  {
    link: '/main', 
    label: 'Избранное',
  }]

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      @ts-ignore
      <HeaderAction links =  { [link]} />
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
