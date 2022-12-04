import { Header } from './lib/Header/header'
import { Button } from './lib/Button/button'
import { Section } from './lib/Section/section';
import { Text } from './lib/Text/text';

const contact: string = 'to contact austin or book an appointment:';
const soon: string = 'coming soon';
const soonTheme: object = {
  color: "#d2a02a"
}
const email: string = 'email info@austinarcher.com';
const aa: string = 'austin archer website';
const ig: string = 'follow austin on ig @austinarcher';

const App = () => {
  return (
    <Section>
      <Header text={aa}/>
      <Button />
      <Text text={soon} theme={soonTheme} />
      <Text text={contact} />
      <Text text={email} />
      <Text text={ig} />
    </Section>
  );
}

export default App;
