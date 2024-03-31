import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeader from '../components/TableHeader/TableHeader';
import { TableHeaderProps } from '../types';


export default {
 title: 'Components/TableHeader',
 component: TableHeader,
} as Meta;

const Template: StoryFn<TableHeaderProps> = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
 valueToOrderBy: 'name',
 orderDirection: 'asc',
 handleRequestSort: () => {},
};