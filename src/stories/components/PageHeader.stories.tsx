import { Meta, StoryObj } from "@storybook/react";
import PageHeader from "../../components/PageHeader/PageHeader";

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    page: {
      control: { type: "number", min: 0 },
    },
    rowsPerPage: {
      control: { type: "radio" },
      options: [10, 25, 50],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    page: 1,
    rowsPerPage: 10,
    handleChangePage: () => {},
    handleChangeRowsPerPage: () => {},
  },
};
