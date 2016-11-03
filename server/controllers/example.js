import logger from '../utils/logger';
import { findInstances } from '../models/example';

/**
 * Find example
 * @param {Object} req
 * @param {Object} res
 */
export async function find(req, res) {
    try {
        let results = await findInstances();
        res.json(results);
    } catch (ex) {
        logger.log("error", "Error", ex);
        res.status(500).json(ex.message);
    }
}
