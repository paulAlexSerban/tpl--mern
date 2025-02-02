import GenericLayout from '@/components/GenericLayout';
import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PUBLIC_CMS_API_URL } from '@/config/index';
import styles from '@/styles/form.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from '@/helpers/index';
import { GetServerSideProps } from 'next';
type AddEventPageProps = {
    token: string;
};

const AddEventPage: FC = () => {
    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: '',
    });

    const router = useRouter();
    console.log({ PUBLIC_CMS_API_URL });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        const hasEmptyFields = Object.values(values).some((element) => element === '');

        if (hasEmptyFields) {
            toast.error('Please fill in all fields');
            return;
        }

        const res = await fetch(`${PUBLIC_CMS_API_URL}/api/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: values }),
        });

        if (!res.ok) {
            if (res.status === 403 || res.status === 401) {
                toast.error('No token included');
                return;
            }
            toast.error('Something Went Wrong');
        } else {
            const evt = await res.json();
            const slug = evt.slug;
            router.push(`/events/${slug}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <GenericLayout title="Add New Event">
            <Link href="/events">Go Back</Link>
            <h1>Add Event</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Event Name</label>
                        <input type="text" id="name" name="name" value={values.name} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="performers">Performers</label>
                        <input
                            type="text"
                            name="performers"
                            id="performers"
                            value={values.performers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="venue">Venue</label>
                        <input type="text" name="venue" id="venue" value={values.venue} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" value={values.date} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="text" name="time" id="time" value={values.time} onChange={handleInputChange} />
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Event Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <input type="submit" value="Add Event" className="btn" />
            </form>
        </GenericLayout>
    );
};

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//     const { token } = parseCookies(req);

//     return {
//         props: {
//             token,
//         },
//     };
// };

export default AddEventPage;
