import formidable from "formidable";
import fs from "fs";

import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_SECRET,
});

const S3 = new AWS.S3();

async function endpoint(req, res) {
  // Get the image
  const data = await new Promise(function (resolve, reject) {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    form.parse(req, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const { path, name } = data.files.image;

  // Create the readable stream
  let readStream = fs.createReadStream(path);

  // Send the data to AWS
  const params = {
    Bucket: "insectivora",
    Key: `blog_pictures/${name}`,
    Body: readStream,
    ACL: "public-read",
  };

  let upload = new AWS.S3.ManagedUpload({
    params,
  });

  let theRes = await upload.promise();

  res.json({ success: 1, file: { url: theRes.Location } });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default endpoint;
