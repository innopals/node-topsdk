type TopRequestType = "get" | "post" | "file_upload";

interface TopClientStream {
  pipe<T extends NodeJS.WritableStream>(destination: T): T;
}

interface TopClient {
  execute(method: string, args: any, callback: (err: any, data: any) => void): void;
  execute(method: string, args: any, type: TopRequestType, callback: (err: any, data: any) => void): void;
  execute(method: string, args: any, type?: TopRequestType): Promise<any> & TopClientStream;
}

interface TopClientOptions {
  endpoint?: string;
  useValidators?: boolean;
  rawResponse?: boolean;
}

interface TopClientConstructor {
  new(key: string, secret: string, options?: TopClientOptions): TopClient;
  new(key: string, secret: string, endpoint?: string, options?: TopClientOptions): TopClient;
}

declare const TheTopClientConstructor: TopClientConstructor;
export = TheTopClientConstructor;
