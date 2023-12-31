const { S3 } = require('aws-sdk')
const generateUniqueId = require('generate-unique-id');

exports.imageUpload = async (file) => {
    const s3 = new S3()
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `property/${file.originalname}`,
        Body: file.buffer,
        ContentType: 'image/png',
        ContentEncoding: 'base64'
    }

    return s3.upload(params).promise()
    // const params = files.map(file => {
    //     return {
    //         Bucket: process.env.AWS_BUCKET_NAME,
    //         Key: `property/${file.originalname}`,
    //         Body: file.buffer,
    //         ContentType: 'image/png',
    //         ContentEncoding: 'base64'
    //     }
    // })
    // return Promise.all(params.map(param => s3.upload(param).promise()))
}

exports.brocherUpload = async (file) => {
    const s3 = new S3()
    const params = {

    }
}