import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../../middleware/catchAsyncErrors';
import Bootcamp from '../../models/BootcampSchema';
import ErrorResponse from '../../utils/errorResponse';

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