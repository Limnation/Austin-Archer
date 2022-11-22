import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './Section'

export default {
    component: Section,
    title: 'Button',
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: 'red', background: 'transparent' }