import cloudinary from 'cloudinary';
import { v4 as uuid } from 'uuid';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

//Upload file to cloudinary CDN
export const uploadToCloudinary = async (stream, folder, imagePublicId) => {
    // if imagePublicId param is presented we should overwrite the image
    const options = imagePublicId ? { public_id: imagePublicId, overwrite: true } : { public_id: `${folder}/${uuid()}` };

    return new Promise((resolve, reject) => {
        const streamLoad = cloudinary.v2.uploader.upload_stream(options, (error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });

        stream.pipe(streamLoad);
    });
};

// Delete files from cloudinary CDN
export const deleteFromCloudinary = async (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};