(function () {
  const apiUrl = "http://localhost:5000/api/analytics";
  let analyticBody = {
    websiteUrl: null,
    collectedAt: null,
    ttfb: null,
    fcp: null,
    domLoad: null,
    windowLoad: null,
    networkTimings: [],
  };

  performance.getEntriesByType("navigation").forEach((navigation) => {
    const domLoad = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    const ttfb = navigation.responseStart - navigation.startTime;
    const windowLoad = navigation.duration;
    const websiteUrl = document.location.origin;

    analyticBody = {
      ...analyticBody,
      websiteUrl: websiteUrl,
      collectedAt: new Date(),
      ttfb: ttfb,
      domLoad: domLoad,
      windowLoad: windowLoad,
    };

    // console.log(navigation);
    // console.log("domLoad " + domLoad);
    // console.log("ttfb " + ttfb);
    // console.log(navigation.duration);
    // console.log("windowLoad " + windowLoad);
    // console.log("url " + websiteUrl);
  });

  performance.getEntriesByType("paint").forEach((paint) => {
    const fcp = paint.find(({ name }) => name === "first-contentful-paint");
    const fcpTime = fcp.startTime;

    analyticBody = {
      ...analyticBody,
      fcp: fcpTime,
    };
  });

  performance.getEntriesByType("resource").forEach((resource) => {
    analyticBody.networkTimings.push({
      initiatorType: resource.initiatorType,
      name: resource.name,
      duration: resource.duration,
    });
  });

  console.log(analyticBody);
  console.log(JSON.stringify(analyticBody));

  const postAnalytic = async () => {
    const rawResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(analyticBody),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  postAnalytic();

})();
