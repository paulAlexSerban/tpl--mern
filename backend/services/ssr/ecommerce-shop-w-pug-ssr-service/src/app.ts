import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import rootDir from './util/path';

import { router as adminRouter } from './routes/admin';

import { router as shopRoutes } from './routes/shop';

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

// give the user access to the `./public` directory
app.use(express.static(path.join(rootDir as string, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not found',
    });
});

export default app;
