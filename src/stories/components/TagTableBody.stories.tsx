import { Meta, StoryObj } from "@storybook/react";
import TagTableBody from "../../components/TagTableBody/TagTableBody";

const meta: Meta<typeof TagTableBody> = {
  title: "Components/TagTableBody",
  component: TagTableBody,
  tags: ["autodocs"],
  argTypes: {
    errorStatus: {
      control: { type: "select" },
      options: {
        success: { success: true, pending: false, error: null },
        pending: { pending: true, success: false, error: null },
        error: { error: "An error occurred", pending: false, success: false },
      },
    },
    tagItems: [
      {
        name: "React",
        count: 100,
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
      },
      {
        name: "JavaScript",
        count: 200,
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;



export const Success: Story = {
  args: {
    errorStatus: { success: true, pending: false, error: null },
    tagItems: [
      {
        name: "React",
        count: 100,
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
      },
      {
        name: "JavaScript",
        count: 200,
        has_synonyms: true,
        is_moderator_only: false,
        is_required: false,
      },
    ],
  },
};

export const Pending: Story = {
  args: {
    errorStatus: { pending: true, success: false, error: null },
    tagItems: [],
  },
};
export const Error: Story = {
  args: {
    errorStatus: { error: "An error occurred", pending: false, success: false },
    tagItems: [],
  },
};
