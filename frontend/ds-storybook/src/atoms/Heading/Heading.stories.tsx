import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@wbk--mern-playground/select-dropdown-app-cmp-library';
import '@wbk--mern-playground/lsg-styles-generic/lib/components/atoms/heading.css';

const meta = {
    title: 'Atoms/Heading',
    component: Heading,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: {
            control: {
                type: 'text',
            },
        },
        level: {
            control: {
                type: 'select',
            },
            options: [1, 2, 3, 4, 5, 6],
        },
        align: {
            control: {
                type: 'select',
            },
            options: ['left', 'center', 'right'],
        },
        subtitle: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Hello World',
        level: 1,
        align: 'center',
    },
};
