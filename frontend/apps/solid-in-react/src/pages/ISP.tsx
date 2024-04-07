import { type FC } from 'react';

const user_1 = {
    name: 'Josh',
    age: 23,
    hairColor: 'blonde',
    heightInCm: 175,
};

const user_2 = {
    personalInfo: {
        name: 'Josh',
        age: 23,
    },
    physicalFeatures: {
        hairColor: 'blone',
        heightInCM: 175,
    },
};

const videoList = [
    {
        id: 1,
        title: 'Video 1',
        url: 'https://www.youtube.com/watch?v=1',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/1/mqdefault.jpg',
    },
    {
        id: 2,
        title: 'Video 2',
        url: 'https://www.youtube.com/watch?v=2',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/2/mqdefault.jpg',
    },
    {
        id: 3,
        title: 'Video 3',
        url: 'https://www.youtube.com/watch?v=3',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/3/mqdefault.jpg',
    },
    {
        id: 4,
        title: 'Video 4',
        url: 'https://www.youtube.com/watch?v=4',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/4/mqdefault.jpg',
    },
    {
        id: 5,
        title: 'Video 5',
        url: 'https://www.youtube.com/watch?v=5',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/5/mqdefault.jpg',
    },
];

type ThumbnailProps = {
    coverUrl: string;
};
const Thumbnail: FC<ThumbnailProps> = ({ coverUrl }) => {
    return <img src={coverUrl} />;
};

type LiveStream = {
    name: string;
    previewUrl: string;
};

export type Video = {
    title: string;
    duration: number;
    coverUrl: string;
};

type VideoListProps = {
    items: Array<Video | LiveStream>;
};

const VideoList: FC<VideoListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => {
                if ('coverUrl' in item) {
                    // it's a video
                    return <Thumbnail coverUrl={item.coverUrl} />;
                } else {
                    // it's a live stream
                    return <Thumbnail coverUrl={item.previewUrl} />;
                }
            })}
        </ul>
    );
};

type DisplayUserProps = {
    name: string;
};

const DisplayUser: FC<DisplayUserProps> = ({ name }) => {
    return (
        <div>
            <h3>Hello, {name}! </h3>
        </div>
    );
};

const ISP = () => {
    return (
        <>
            <div>
                <h2>Display User</h2>
                <DisplayUser name={user_1.name} />
                <DisplayUser name={user_2.personalInfo.name} />
            </div>
            <div>
                <h2>Video List</h2>
                <VideoList items={videoList} />
            </div>
        </>
    );
};

export default ISP;
