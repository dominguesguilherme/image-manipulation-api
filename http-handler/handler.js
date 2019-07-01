'use strict';

const s3Service = require('./services/s3service')
const dynamodbService = require('./services/dynamoDBService')

module.exports.upload = async (event) => {
  const imageUploadedInfo = await s3Service.upload(event.body);
  await dynamodbService.put(imageUploadedInfo);
  
  return {
    statusCode: 201,
    body: JSON.stringify(imageUploadedInfo),
  };
};

