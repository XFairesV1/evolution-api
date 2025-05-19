const { exec } = require("child_process");

exec("bash ./Docker/scripts/deploy_database.sh && npm run start:prod", (err, stdout, stderr) => {
  if (err) {
    console.error("Erro ao iniciar:", err.message);
    return;
  }
  if (stderr) {
    console.error("stderr:", stderr);
    return;
  }
  console.log("stdout:", stdout);
});
