const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  //   allows to get provided inputs
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // upload files
  //   the CLI is pre-installed on ubuntu images
  const s3Uri = `s3://${bucket}`; // syncing with an s3 bucket
  // CLI will automatically look for the env varaibles
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice("Custom JS Actions");
}

run();
