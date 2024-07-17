// controller/image-controller.js
import File from '../model/file.js';

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    };
    try {
        const file = await File.create(fileObj);
        console.log(file); // Log the created file object to see its contents
        response.status(200).json({ path: `http://localhost:8000/file/${file._id}`}); // Send the response back with the file path or any other details
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: 'Failed to upload file' });
    }
};

export const getImage = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId);
        if (!file) {
            return response.status(404).json({ error: 'File not found' });
        }
        response.download(file.path, file.name);
    } catch (error) {
        response.status(500).json({ error: 'Failed to download file' });
    }
};
