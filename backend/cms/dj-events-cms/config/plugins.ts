export default ({ env }) => ({
    upload: {
        config: {
            provider: 'local', // or 'cloudinary', 'aws-s3', etc. if you're using a cloud storage provider
            providerOptions: {
                sizeOptimization: true,
                quality: 80, // adjust image quality (optional)
            },
            breakpoints: {
                // Define your custom image formats here
                thumbnail: 150, // width of 150px
                small: 300, // width of 300px
                medium: 600, // width of 600px
                large: 1000, // width of 1000px
                custom: 1200, // custom width of 1200px (example)
            },
        },
    },
});
