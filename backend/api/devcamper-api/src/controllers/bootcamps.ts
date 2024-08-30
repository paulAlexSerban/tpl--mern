import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../middleware/catchAsyncErrors';
import Bootcamp from '../models/BootcampSchema';
import ErrorResponse from '../utils/errorResponse';
import geocoder from '../utils/geocoder';
/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */

// pattern for matching the query string
const PATTERN = /\b(gt|gte|lt|lte|in)\b/g;

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
    queryString = queryString.replace(PATTERN, (match) => `$${match}`);

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

/**
 * @desc    Get single bootcamp
 * @route   GET /api/v1/bootcamps/:id
 * @access  Public
 */
export const getBootcamp = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        // it needs to return so that it doesn't continue to the next line and throw an error (Cannot set headers after they are sent to the client)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        date: new Date(Date.now()),
        data: bootcamp,
    });
});

/**
 * @desc    Create new bootcamp
 * @route   POST /api/v1/bootcamps
 * @access  Private
 */
export const createBootcamp = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        date: new Date(Date.now()),
        data: bootcamp,
    });
});

/**
 * @desc    Update bootcamp
 * @route   PUT /api/v1/bootcamps/:id
 * @access  Private
 */
export const updateBootcamp = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!bootcamp) {
        // it needs to return so that it doesn't continue to the next line and throw an error (Cannot set headers after they are sent to the client)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: bootcamp });
});

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private
 */
export const deleteBootcamp = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        // it needs to return so that it doesn't continue to the next line and throw an error (Cannot set headers after they are sent to the client)
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: {} });
});

/**
 * @desc    Get bootcamps within a radius
 * @route   GET /api/v1/bootcamps/radius/:zipcode/:distance
 * @access  Private
 */
export const getBootcampsInRadius = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
    const { zipcode, distance } = req.params;

    // Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);

    if (loc.length === 0) {
        return next(new ErrorResponse(`Invalid zipcode: ${zipcode}`, 400));
    }
    // Destructure the first element of the loc array instead of using loc[0]
    const [geo] = loc;
    const lat = geo.latitude;
    const lng = geo.longitude;

    // Calc radius using radians
    // Divide distance by radius of Earth
    // Earth Radius = 3,963 mi / 6,378 km
    const radius = Number(distance) / 3963;

    const bootcamps = await Bootcamp.find({
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });

    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps,
    });
});
