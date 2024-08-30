import classes from './EventsNavigation.module.scss';
import { NavLink, useRouteLoaderData } from 'react-router-dom';
function EventsNavigation() {
    const token = useRouteLoaderData('root') as { token: string } | null;
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/events" className={({ isActive }) => (isActive ? classes.active : '')} end>
                            All Events
                        </NavLink>
                    </li>
                    <li>
                        {token && (
                            <NavLink to="/events/new" className={({ isActive }) => (isActive ? classes.active : '')}>
                                New Event
                            </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;
