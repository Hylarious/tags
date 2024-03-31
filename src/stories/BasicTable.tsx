import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import BasicTable from '../components/BasicTable/BasicTable';

export default {
 title: 'Components/BasicTable',
 component: BasicTable,
} as Meta;

const Template: StoryFn = (args) => <BasicTable {...args} />;

export const Default = Template.bind({});