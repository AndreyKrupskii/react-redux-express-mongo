import express from 'express';
import layout from './../views/layout';

const router = express.Router();

router.get('/*', (req, res, next) => {
	res.send(layout);
});

export default router;