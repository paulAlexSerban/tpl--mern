type EventAttributes = {
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: [
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
    image: {
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
};
type ImageAttributes = 'name' | 'alternativeText' | 'caption' | 'width' | 'height' | 'formats';
type ImageFormats = 'thumbnail' | 'small' | 'medium' | 'large' | 'custom';

export type Event = {
    id: string;
    attributes: EventAttributes;
};

export type EventsResponseData = Event[];
