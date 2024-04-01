import { StoryFn, Meta } from "@storybook/react";
import TagTableBody from "../../components/TagTableBody/TagTableBody";
import { TagTableBodyProps } from "../../types";

export default {
  title: "Components/TagTableBody",
  component: TagTableBody,
} as Meta;

const Template: StoryFn<TagTableBodyProps> = (args) => (
  <TagTableBody {...args} />
);

export const Success = Template.bind({});
Success.args = {
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
};

export const Pending = Template.bind({});
Pending.args = {
  errorStatus: { pending: true, success: false, error: null },
  tagItems: [],
};

export const Error = Template.bind({});
Error.args = {
  errorStatus: { error: "An error occurred", pending: false, success: false }, // Updated to match the ErrorStatus type
  tagItems: [],
};
