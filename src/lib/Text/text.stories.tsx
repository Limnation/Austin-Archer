import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

export default {
    component: Text,
    title: 'Button',
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: 'red', background: 'transparent' }