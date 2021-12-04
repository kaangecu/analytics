const app = require("../../server");
const supertest = require("supertest");

describe("GET api/analytics", () => {
  describe("called including websiteUrl minDate maxDate", () => {
    test("should respond with 200", async () => {
      const response = await supertest(app)
        .get("/api/analytics")
        .query({ websiteUrl: "www", minDate: new Date(), maxDate: new Date() });
      expect(response.statusCode).toBe(200);
    });
  });

  describe("called with websiteUrl", () => {
    test("should respond with 200", async () => {
      const response = await supertest(app)
        .get("/api/analytics")
        .query({ websiteUrl: "www"});
      expect(response.statusCode).toBe(200);
    });
  });

  describe("called with minDate maxDate", () => {
    test("should respond with 200", async () => {
      const response = await supertest(app)
        .get("/api/analytics")
        .query({ minDate: new Date(), maxDate: new Date() });
      expect(response.statusCode).toBe(200);
    });
  });

  // describe("called with websiteUrl", () => {
  //   test("should respond with 200", async () => {
  //     const response = await supertest(app)
  //       .get("/api/analytics")
  //       .query({ websiteUrl: "www", minDate: new Date(), maxDate: new Date() });
  //     expect(response.statusCode).toBe(200);
  //   });
  // });

});

describe("GET api/analytics/websiteUrls", () => {
  describe("called ", () => {
    test("should respond with 200", async () => {
      const response = await supertest(app).get("/api/analytics/websiteUrls");
      expect(response.statusCode).toBe(200);
    });

    test("should return an array", async () => {
      const response = await supertest(app).get("/api/analytics/websiteUrls");
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});

describe("POST api/analytics", () => {
  describe("object correctly given", () => {
    test("should respond with 200", async () => {
      const response = await supertest(app).post("/api/analytics").send({
        websiteUrl: "websiteUrl",
        collectedAt: new Date(),
        ttfb: 0,
        fcp: 0,
        domLoad: 0,
        windowLoad: 0,
        networkTimings: [],
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
