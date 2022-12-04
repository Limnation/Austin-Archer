import { Header } from './lib/Header/header'
import { Button } from './lib/Button/button'
import { Section } from './lib/Section/section';
import { Text } from './lib/Text/text';

const contact: string = 'to contact austin or book an appointment:';
const email: string = 'email info@austinarcher.com';
const aa: string = 'austin archer website'

const App = () => {
  return (
    <Section>
      <Header text={aa}/>
      <Button />
      <Text text={contact} />
      <Text text={email} />
    </Section>
  );
}

export default App;
