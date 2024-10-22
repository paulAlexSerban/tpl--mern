type EventDescription = [
    {
        type: string;
        children: [
            {
                type: string;
                text: string;
            },
        ];
    },
];

type EventImage = {
    data: {
        attributes: {
            name: string;
            alternativeText: string;
            caption: string;
            formats: {
                [key in ImageFormats]: {
                    url: string;
                };
            };
        };
    };
};

type EventAttributes = {
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: EventDescription;
    image: EventImage;
};

type ImageFormats = 'thumbnail' | 'small' | 'medium' | 'large' | 'custom';

export type Event = {
    id: string;
    attributes: EventAttributes;
};

export type EventsResponseData = Event[];
