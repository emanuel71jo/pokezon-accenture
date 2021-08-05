import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: resolve(__dirname, "..", "..", "uploads"),
  filename: function (req, file, cb) {
    const hash = crypto.randomBytes(6).toString("hex");
    const fileName = `${hash}-${file.originalname}`;
    cb(null, fileName);
  },
});

export const uploads = multer({ storage: storage });
