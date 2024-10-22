import { Request, Response, NextFunction } from 'express';
import catchAsyncErrors from '../../middleware/catchAsyncErrors';
import Bootcamp from '../../models/BootcampSchema';
import ErrorResponse from '../../utils/errorResponse';
import geocoder from '../../utils/geocoder';
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
