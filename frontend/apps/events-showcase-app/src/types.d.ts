export type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
};

export type EventItemProps = {
    event: Event;
};

export type EventsListProps = {
    events: Event[];
};
