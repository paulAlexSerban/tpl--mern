import { toast } from 'react-toastify';
import { FC } from 'react';

type SingleColorProps = {
    index: number;
    color: { hex: string; weight: number };
};

const SingleColor: FC<SingleColorProps> = ({ index, color }) => {
    const { hex, weight } = color;
    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success('Color copied to clipboard');
            } catch (error) {
                toast.error('Failed to copy color to clipboard');
            }
        } else {
            toast.error('Clipboard access not available');
        }
    };
    return (
        <article
            className={index > 10 ? 'color color-light' : 'color'}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
    );
};
export default SingleColor;
