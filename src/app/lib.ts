export class API {
  // after storing this url instance, add the endpoint by appending that to `pathname` (addition instead of replace)
  static getBaseURL(): URL {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiBaseUrl)
      throw new Error(
        "Make sure .env has NEXT_PUBLIC_API_URL that points to server api url"
      );
    return new URL(apiBaseUrl);
  }
}

export class APP {
  static getURL(): URL {
    const appUrl = process.env.NEXT_PUBLIC_URL;
    if (!appUrl) {
      throw new Error(
        "Make sure .env has NEXT_PUBLIC_URL that points to root url where the app is served"
      );
    }
    return new URL(appUrl);
  }
}
