import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './article';

export default {
    component: Article,
    title: 'Button',
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />;

export const Primary = Template.bind({});
Primary.args = { }