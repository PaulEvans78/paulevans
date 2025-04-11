import ftpDeploy from 'ftp-deploy';  // Import the default export
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module (equivalent of __dirname in ES modules)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  user: "login.paulevans.se",
  password: "Cn3yD110-}", // or use 'password: process.env.FTP_PASSWORD' for security
  host: "ftp.paulevans.se",
  port: 21,
  localRoot: path.join(__dirname, 'dist'), // Path joined properly
  remoteRoot: '/',
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true,
};

const deployer = new ftpDeploy();

deployer.deploy(config)
  .then(res => console.log("✅ Finished:", res))
  .catch(err => console.log("❌ Error:", err));
