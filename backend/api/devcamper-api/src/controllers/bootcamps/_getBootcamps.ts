import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../../middleware/catchAsyncErrors';
import Bootcamp from '../../models/BootcampSchema';

// pattern for matching the query string
// these are the operators that we want to match in the query string
// and then we want to replace them with the dollar sign and the operator
const QUERY_OPERATORS_PATTERN = /\b(gt|gte|lt|lte|in)\b/g;

/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */
export const getBootcamps = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude, so that they don't match the query string
    const removeFields = ['select', 'sort', 'page', 'limit'];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);

    // Create query string
    let queryString = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc)
    queryString = queryString.replace(QUERY_OPERATORS_PATTERN, (match) => `$${match}`);

    // Finding resource
    let query = Bootcamp.find(JSON.parse(queryString));

    // Select Fields
    if (req.query.select) {
        const fields = (req.query.select as string).split(',').join(' ');
        query.select(fields);
    }

    // Sort
    if (req.query.sort) {
        const sortBy = (req.query.sort as string).split(',').join(' ');
        query.sort(sortBy);
    } else {
        // ascending order by date when it was created
        query.sort('-createdAt');
    }

    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 100;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Bootcamp.countDocuments();

    query = query.skip(startIndex).limit(limit);

    // Executing query
    const bootcamps = await query;

    const paginationResult = {
        next: endIndex < total ? { page: page + 1, limit } : null,
        prev: startIndex > 0 ? { page: page - 1, limit } : null,
        total,
    };

    res.status(200).json({
        success: true,
        date: new Date(Date.now()),
        count: bootcamps.length,
        pagination: paginationResult,
        data: bootcamps,
    });
});
