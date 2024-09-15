/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-lambda-simple",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "ap-south-1",
          profile: input.stage === "shyam-prod" ? "shyam-prod" : "shyam-dev",
        },
      },
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("Api")

    api.route("GET /",{
      handler: "index.main",
    })

    api.route("GET /ip",{
      handler: "index.getIp",
    })
  },
});
