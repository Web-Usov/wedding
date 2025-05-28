interface NocodbClientConnect {
  apiKey: string;
  tableId: string;
  viewId: string;
}

export class NocodbClient {
  private static readonly defaultConnectParams: NocodbClientConnect = {
    apiKey: import.meta.env.VITE_NOCODB_API_KEY as string,
    tableId: import.meta.env.VITE_NOCODB_TABLE_ID as string,
    viewId: import.meta.env.VITE_NOCODB_VIEW_ID as string,
  } as const;

  private baseUrl: string;
  private fetchOptions: RequestInit;

  protected constructor(private readonly connectParams: NocodbClientConnect) {
    this.baseUrl = `https://app.nocodb.com/api/v2/tables/${connectParams.tableId}/records`;
    this.fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.connectParams.apiKey,
      },
    };
    if (!connectParams.apiKey) {
      throw new Error("VITE_NOCODB_API_KEY is not defined");
    }
    if (!connectParams.tableId) {
      throw new Error("VITE_NOCODB_TABLE_ID is not defined");
    }
    if (!connectParams.viewId) {
      throw new Error("VITE_NOCODB_VIEW_ID is not defined");
    }
    console.log(
      `NocodbClient connected to table ${connectParams.tableId} with view ${connectParams.viewId}`
    );
  }
  public static connect(params: Partial<NocodbClientConnect> = {}) {
    const connectParams = { ...NocodbClient.defaultConnectParams, ...params };
    return new NocodbClient(connectParams);
  }

  public async post<D>(data: D): Promise<boolean> {
    const url = this.getFetchUrl();
    try {
      const response = await fetch(url, {
        ...this.fetchOptions,
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private getFetchUrl(): string {
    const urlParams = new URLSearchParams();
    urlParams.set("viewId", this.connectParams.viewId);
    return `${this.baseUrl}?${urlParams.toString()}`;
  }
}
