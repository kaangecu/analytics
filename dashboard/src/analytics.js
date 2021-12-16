(function () {
  const apiUrl = "https://perfanalytics-api-kg.herokuapp.com/api/analytics";

  const fillData = () => {
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
      const domLoad =
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart;
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
    });

    performance.getEntriesByType("paint").forEach((paint) => {
      const fcp = paint.name === "first-contentful-paint" && paint.startTime;

      analyticBody = {
        ...analyticBody,
        fcp: fcp,
      };
    });

    performance.getEntriesByType("resource").forEach((resource) => {
      analyticBody.networkTimings.push({
        initiatorType: resource.initiatorType,
        name: resource.name,
        duration: resource.duration,
      });
    });

    return analyticBody;
  };

  const postAnalytic = async () => {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fillData()),
    });
  };

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      if ("sendBeacon" in navigator) {
        const headers = {
          type: "application/json",
        };
        const blob = new Blob([JSON.stringify(fillData())], headers);

        navigator.sendBeacon(apiUrl, blob);
      } else {
        postAnalytic();
      }
    }
  });
})();
