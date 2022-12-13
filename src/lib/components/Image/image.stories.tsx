import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './image';

export default {
    component: Image,
    title: 'Button',
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <image {...args} />;

export const Primary = Template.bind({});
Primary.args = { }