import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../../middleware/catchAsyncErrors';
import Bootcamp from '../../models/BootcampSchema';

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
