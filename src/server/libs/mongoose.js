import mongoose from 'mongoose';
import config from './../../config';

import logger from './log';

const log = logger(module);

mongoose.connect(config.mongoose.uri, config.mongoose.options);

mongoose.connection.once('connected', function() {
	log.info("Database connected successfully")
});

export default mongoose;