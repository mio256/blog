/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { PostCount } from "./post_count";
import { StoredPost } from "./stored_post";

export const protobufPackage = "blog.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPostCountRequest {
}

export interface QueryGetPostCountResponse {
  PostCount: PostCount | undefined;
}

export interface QueryGetStoredPostRequest {
  index: string;
}

export interface QueryGetStoredPostResponse {
  storedPost: StoredPost | undefined;
}

export interface QueryAllStoredPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredPostResponse {
  storedPost: StoredPost[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPostCountRequest(): QueryGetPostCountRequest {
  return {};
}

export const QueryGetPostCountRequest = {
  encode(_: QueryGetPostCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetPostCountRequest {
    return {};
  },

  toJSON(_: QueryGetPostCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostCountRequest>, I>>(_: I): QueryGetPostCountRequest {
    const message = createBaseQueryGetPostCountRequest();
    return message;
  },
};

function createBaseQueryGetPostCountResponse(): QueryGetPostCountResponse {
  return { PostCount: undefined };
}

export const QueryGetPostCountResponse = {
  encode(message: QueryGetPostCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PostCount !== undefined) {
      PostCount.encode(message.PostCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPostCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPostCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PostCount = PostCount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostCountResponse {
    return { PostCount: isSet(object.PostCount) ? PostCount.fromJSON(object.PostCount) : undefined };
  },

  toJSON(message: QueryGetPostCountResponse): unknown {
    const obj: any = {};
    message.PostCount !== undefined
      && (obj.PostCount = message.PostCount ? PostCount.toJSON(message.PostCount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPostCountResponse>, I>>(object: I): QueryGetPostCountResponse {
    const message = createBaseQueryGetPostCountResponse();
    message.PostCount = (object.PostCount !== undefined && object.PostCount !== null)
      ? PostCount.fromPartial(object.PostCount)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredPostRequest(): QueryGetStoredPostRequest {
  return { index: "" };
}

export const QueryGetStoredPostRequest = {
  encode(message: QueryGetStoredPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredPostRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetStoredPostRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredPostRequest>, I>>(object: I): QueryGetStoredPostRequest {
    const message = createBaseQueryGetStoredPostRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetStoredPostResponse(): QueryGetStoredPostResponse {
  return { storedPost: undefined };
}

export const QueryGetStoredPostResponse = {
  encode(message: QueryGetStoredPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedPost !== undefined) {
      StoredPost.encode(message.storedPost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedPost = StoredPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredPostResponse {
    return { storedPost: isSet(object.storedPost) ? StoredPost.fromJSON(object.storedPost) : undefined };
  },

  toJSON(message: QueryGetStoredPostResponse): unknown {
    const obj: any = {};
    message.storedPost !== undefined
      && (obj.storedPost = message.storedPost ? StoredPost.toJSON(message.storedPost) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredPostResponse>, I>>(object: I): QueryGetStoredPostResponse {
    const message = createBaseQueryGetStoredPostResponse();
    message.storedPost = (object.storedPost !== undefined && object.storedPost !== null)
      ? StoredPost.fromPartial(object.storedPost)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredPostRequest(): QueryAllStoredPostRequest {
  return { pagination: undefined };
}

export const QueryAllStoredPostRequest = {
  encode(message: QueryAllStoredPostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredPostRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredPostRequest>, I>>(object: I): QueryAllStoredPostRequest {
    const message = createBaseQueryAllStoredPostRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredPostResponse(): QueryAllStoredPostResponse {
  return { storedPost: [], pagination: undefined };
}

export const QueryAllStoredPostResponse = {
  encode(message: QueryAllStoredPostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedPost) {
      StoredPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedPost.push(StoredPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredPostResponse {
    return {
      storedPost: Array.isArray(object?.storedPost) ? object.storedPost.map((e: any) => StoredPost.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredPostResponse): unknown {
    const obj: any = {};
    if (message.storedPost) {
      obj.storedPost = message.storedPost.map((e) => e ? StoredPost.toJSON(e) : undefined);
    } else {
      obj.storedPost = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredPostResponse>, I>>(object: I): QueryAllStoredPostResponse {
    const message = createBaseQueryAllStoredPostResponse();
    message.storedPost = object.storedPost?.map((e) => StoredPost.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a PostCount by index. */
  PostCount(request: QueryGetPostCountRequest): Promise<QueryGetPostCountResponse>;
  /** Queries a StoredPost by index. */
  StoredPost(request: QueryGetStoredPostRequest): Promise<QueryGetStoredPostResponse>;
  /** Queries a list of StoredPost items. */
  StoredPostAll(request: QueryAllStoredPostRequest): Promise<QueryAllStoredPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.PostCount = this.PostCount.bind(this);
    this.StoredPost = this.StoredPost.bind(this);
    this.StoredPostAll = this.StoredPostAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  PostCount(request: QueryGetPostCountRequest): Promise<QueryGetPostCountResponse> {
    const data = QueryGetPostCountRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "PostCount", data);
    return promise.then((data) => QueryGetPostCountResponse.decode(new _m0.Reader(data)));
  }

  StoredPost(request: QueryGetStoredPostRequest): Promise<QueryGetStoredPostResponse> {
    const data = QueryGetStoredPostRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "StoredPost", data);
    return promise.then((data) => QueryGetStoredPostResponse.decode(new _m0.Reader(data)));
  }

  StoredPostAll(request: QueryAllStoredPostRequest): Promise<QueryAllStoredPostResponse> {
    const data = QueryAllStoredPostRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "StoredPostAll", data);
    return promise.then((data) => QueryAllStoredPostResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
