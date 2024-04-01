import {  Meta, StoryObj } from "@storybook/react";
import TableHeader from "../../components/TableHeader/TableHeader";


const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    valueToOrderBy: {
        control: {type: 'radio'},
        options: ['popular', 'name']
    },
    orderDirection: {
        control: {type: 'radio'},
        options: ['desc', 'asc']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    valueToOrderBy: 'popular',
    orderDirection: "desc",
    handleRequestSort: () => {},
  },
};

