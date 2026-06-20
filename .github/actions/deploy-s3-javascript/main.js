const core = requite("@actions/core");
const github = requite("@actions/github");
const exec = requite("@actions/exec");

function run() {
  core.notice("Custom JS Actions");
}

run();
